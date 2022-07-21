const showTodos = (project = 'defaultProject') => {
    const todoSection = document.getElementById('todo-section');

    let cont = document.getElementById('todo-wrapper');

    if (!cont) {
        cont = document.createElement('div');
        cont.id = 'todo-wrapper';
    } else {
        cont.innerHTML = '';
    }

    const items = JSON.parse(localStorage.getItem(project));

    if (!items) {
        localStorage.setItem(project, JSON.stringify([]))
    }

    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const div = document.createElement('div');
        div.id = `${i}`;

        const title = document.createElement('p');
        title.textContent = item.title;
        const description = document.createElement('p');
        description.textContent = item.description;
        const dueDate = document.createElement('p');
        dueDate.textContent = item.dueDate;
        const priority = document.createElement('p');
        priority.textContent = item.priority;

        const doneBtn = document.createElement('button');
        doneBtn.type = 'button';
        doneBtn.innerText = 'Done';
        doneBtn.id = 'done-btn';
        doneBtn.addEventListener('click', () => {
            items.splice(i,1);
            localStorage.setItem(project, JSON.stringify(items));
            cont.innerHTML = '';
            showTodos(project);
        });

        div.appendChild(title);
        div.appendChild(description);
        div.appendChild(dueDate);
        div.appendChild(priority);
        div.appendChild(doneBtn);

        div.classList.add('task');

        cont.appendChild(div);
    }

    todoSection.appendChild(cont);

};

export default showTodos;
