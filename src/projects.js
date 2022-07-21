
import showTodos from "./show-todo";
const createProjectSecion = () => {
    const content = document.getElementById('content');

    const cont = document.createElement('div');
    cont.id = 'project-section';

    const innerCont = document.createElement('div');
    innerCont.id = 'inner-project';

    
    cont.appendChild(innerCont);

    content.appendChild(cont);

    renderProjects();
};

const renderProjects = () => {
    const innerCont = document.getElementById('inner-project');

    innerCont.innerHTML = '';

    for (let i = 0; i < localStorage.length; i++) {
        const projectName = localStorage.key(i);
        const projectContainer = document.createElement('div');
        const projectTitle = document.createElement('p');
        projectTitle.innerText = `${projectName}`;

        projectContainer.appendChild(projectTitle);

        innerCont.appendChild(projectContainer);

        projectContainer.addEventListener('click', () => {
            showTodos(projectContainer.firstChild.innerText);
        });
    }

};

const addProjectForm = () => {
    const projectSection = document.getElementById('project-section');

    const addBtn = document.createElement('button');
    addBtn.type = 'button';
    addBtn.innerHTML = '<h3>Add a Project<h3>';
    addBtn.id='btn';

    addBtn.addEventListener('click', () => {
        addBtn.style.display = 'none';
        form.style.display = 'initial';
    });

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Project Name';
    input.id = 'project-input';

    const confirmBtn = document.createElement('button');
    confirmBtn.type = 'button';
    confirmBtn.innerText = 'Confirm';
    confirmBtn.id='confirm'
    
    const cancelBtn = document.createElement('button');
    cancelBtn.type = 'button';
    cancelBtn.innerText = 'Cancel';
    cancelBtn.id='cancel'
    
    cancelBtn.addEventListener('click', () => {
        addBtn.style.display = 'initial';
        form.style.display = 'none';
    });
    
    const form = document.createElement('div');
    form.id = 'add-project-form';
    
    form.style.display = 'none';

    confirmBtn.addEventListener('click', addProjectToStorage);
    
    form.appendChild(input);
    form.appendChild(confirmBtn);
    form.appendChild(cancelBtn);

    projectSection.appendChild(addBtn);
    projectSection.appendChild(form);
};

const addProjectToStorage = () => {
    const input = document.getElementById('project-input');
    localStorage.setItem(input.value, JSON.stringify([]));
    renderProjects();
};

export {createProjectSecion, addProjectForm};