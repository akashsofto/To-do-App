import createTodoDom from "./createTodo";

const createTodoSection = () => {
    const content = document.getElementById('content');

    const todoSection = document.createElement('div');
    todoSection.id = 'todo-section';

    const addBtn = document.createElement('button');
    addBtn.id = 'add-btn';
    addBtn.innerHTML = '<h3>Add a Task<h3>';
    addBtn.id='add';
    todoSection.appendChild(addBtn);
    
    const todoForm = createTodoDom();
    todoSection.appendChild(todoForm);

    addBtn.addEventListener('click', () => {
        todoForm.style.display = 'block';
        addBtn.style.display = 'none';
    });


    content.appendChild(todoSection);
};

export default createTodoSection;