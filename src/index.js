

import createHeader from "./header";
import createTodoSection from './todo-section';
import showTodos from './show-todo';
import {createProjectSecion, addProjectForm} from './projects';

const body = document.getElementsByTagName("body")[0];
const content = document.createElement("div");
content.id = 'content';
body.appendChild(content);

createHeader();

createTodoSection();
showTodos();
createProjectSecion();
addProjectForm();