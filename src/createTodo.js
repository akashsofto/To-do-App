import showTodos from "./show-todo";

const createTodoDom = () => {
    const cont = document.createElement('div');
    cont.id = 'todo-form';

    const form = document.createElement('form');

    const title = document.createElement('input');
    title.placeholder = 'Title';
    title.type = 'text';
    title.id = 'title';

    const description = document.createElement('input');
    description.placeholder = 'Description';
    description.type = 'text';
    description.id = 'description';

    const dueDate = document.createElement('input');
    dueDate.type = 'date';
    dueDate.id = 'dueDate';
    dueDate.value = new Date().toJSON().slice(0,10);


    const priority = document.createElement('select');
    priority.id = 'priority';

    const highPrio = document.createElement('option');
    highPrio.value = 'high';
    highPrio.innerText = 'High';

    const mediumPrio = document.createElement('option');
    mediumPrio.value = 'medium';
    mediumPrio.innerText = 'Medium';
    
    const lowPrio = document.createElement('option');
    lowPrio.value = 'low';
    lowPrio.innerText = 'Low';

    priority.appendChild(highPrio);
    priority.appendChild(mediumPrio);
    priority.appendChild(lowPrio);

    const selectProject = document.createElement('select');
    selectProject.id = 'project-selector';

    for (let i = 0; i < localStorage.length; i++) {
        const project = localStorage.key(i);
        const projectOption = document.createElement('option');
        projectOption.value = project;
        projectOption.innerText = project;

        selectProject.appendChild(projectOption);
    }

    const submit = document.createElement('button');
    submit.id = 'submit';
    submit.type = 'button';
    submit.innerText = 'Add Task';

    submit.addEventListener('click', () => {
        const task = {
            title: title.value,
            description: description.value,
            dueDate: dueDate.value,
            priority: priority.value 
        };

        addTodoToStorage(task, selectProject.value);
    });
    
    const cancel = document.createElement('button');
    cancel.id = 'cancel';
    cancel.innerText = 'Cancel';
    cancel.type = 'button';

    cancel.addEventListener('click', () => {
        cont.style.display = 'none';
        const addBtn = document.getElementById('add-btn');
        addBtn.style.display = 'block';
    });

    form.appendChild(title);
    form.appendChild(description);
    form.appendChild(dueDate);
    form.appendChild(priority);
    form.appendChild(selectProject);
    form.appendChild(submit);
    form.appendChild(cancel);

    cont.appendChild(form);

    return cont;
};

const addTodoToStorage = (task, project = 'defaultProject') => {
    if (task.title !== "") {
        if (localStorage.project) {
            let currProject = JSON.parse(localStorage.getItem(project));
            currProject.push(task);
            localStorage.setItem(project, JSON.stringify(currProject));
        } else {
            localStorage.setItem(project, JSON.stringify([task]));
        }

        showTodos(project);
    }
}

export default createTodoDom;