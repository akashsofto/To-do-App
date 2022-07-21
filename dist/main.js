/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/createTodo.js":
/*!***************************!*\
  !*** ./src/createTodo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _show_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show-todo */ \"./src/show-todo.js\");\n\n\nconst createTodoDom = () => {\n    const cont = document.createElement('div');\n    cont.id = 'todo-form';\n\n    const form = document.createElement('form');\n\n    const title = document.createElement('input');\n    title.placeholder = 'Title';\n    title.type = 'text';\n    title.id = 'title';\n\n    const description = document.createElement('input');\n    description.placeholder = 'Description';\n    description.type = 'text';\n    description.id = 'description';\n\n    const dueDate = document.createElement('input');\n    dueDate.type = 'date';\n    dueDate.id = 'dueDate';\n    dueDate.value = new Date().toJSON().slice(0,10);\n\n\n    const priority = document.createElement('select');\n    priority.id = 'priority';\n\n    const highPrio = document.createElement('option');\n    highPrio.value = 'high';\n    highPrio.innerText = 'High';\n\n    const mediumPrio = document.createElement('option');\n    mediumPrio.value = 'medium';\n    mediumPrio.innerText = 'Medium';\n    \n    const lowPrio = document.createElement('option');\n    lowPrio.value = 'low';\n    lowPrio.innerText = 'Low';\n\n    priority.appendChild(highPrio);\n    priority.appendChild(mediumPrio);\n    priority.appendChild(lowPrio);\n\n    const selectProject = document.createElement('select');\n    selectProject.id = 'project-selector';\n\n    for (let i = 0; i < localStorage.length; i++) {\n        const project = localStorage.key(i);\n        const projectOption = document.createElement('option');\n        projectOption.value = project;\n        projectOption.innerText = project;\n\n        selectProject.appendChild(projectOption);\n    }\n\n    const submit = document.createElement('button');\n    submit.id = 'submit';\n    submit.type = 'button';\n    submit.innerText = 'Add Task';\n\n    submit.addEventListener('click', () => {\n        const task = {\n            title: title.value,\n            description: description.value,\n            dueDate: dueDate.value,\n            priority: priority.value \n        };\n\n        addTodoToStorage(task, selectProject.value);\n    });\n    \n    const cancel = document.createElement('button');\n    cancel.id = 'cancel';\n    cancel.innerText = 'Cancel';\n    cancel.type = 'button';\n\n    cancel.addEventListener('click', () => {\n        cont.style.display = 'none';\n        const addBtn = document.getElementById('add-btn');\n        addBtn.style.display = 'block';\n    });\n\n    form.appendChild(title);\n    form.appendChild(description);\n    form.appendChild(dueDate);\n    form.appendChild(priority);\n    form.appendChild(selectProject);\n    form.appendChild(submit);\n    form.appendChild(cancel);\n\n    cont.appendChild(form);\n\n    return cont;\n};\n\nconst addTodoToStorage = (task, project = 'defaultProject') => {\n    if (task.title !== \"\") {\n        if (localStorage.project) {\n            let currProject = JSON.parse(localStorage.getItem(project));\n            currProject.push(task);\n            localStorage.setItem(project, JSON.stringify(currProject));\n        } else {\n            localStorage.setItem(project, JSON.stringify([task]));\n        }\n\n        (0,_show_todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(project);\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTodoDom);\n\n//# sourceURL=webpack://akash/./src/createTodo.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createHeader = () => {\n    const content = document.getElementById(\"content\");\n\n    const header = document.createElement(\"div\");\n    header.classList.add(\"header\");\n\n    const title = document.createElement(\"p\");\n    title.innerHTML = '<h3>To Do App<h3>';\n\n    header.appendChild(title);\n    content.appendChild(header);\n    \n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHeader);\n\n//# sourceURL=webpack://akash/./src/header.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _todo_section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-section */ \"./src/todo-section.js\");\n/* harmony import */ var _show_todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./show-todo */ \"./src/show-todo.js\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n\n\n\n\n\n\n\nconst body = document.getElementsByTagName(\"body\")[0];\nconst content = document.createElement(\"div\");\ncontent.id = 'content';\nbody.appendChild(content);\n\n(0,_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n(0,_todo_section__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_show_todo__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_projects__WEBPACK_IMPORTED_MODULE_3__.createProjectSecion)();\n(0,_projects__WEBPACK_IMPORTED_MODULE_3__.addProjectForm)();\n\n//# sourceURL=webpack://akash/./src/index.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addProjectForm\": () => (/* binding */ addProjectForm),\n/* harmony export */   \"createProjectSecion\": () => (/* binding */ createProjectSecion)\n/* harmony export */ });\n/* harmony import */ var _show_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show-todo */ \"./src/show-todo.js\");\n\n\nconst createProjectSecion = () => {\n    const content = document.getElementById('content');\n\n    const cont = document.createElement('div');\n    cont.id = 'project-section';\n\n    const innerCont = document.createElement('div');\n    innerCont.id = 'inner-project';\n\n    \n    cont.appendChild(innerCont);\n\n    content.appendChild(cont);\n\n    renderProjects();\n};\n\nconst renderProjects = () => {\n    const innerCont = document.getElementById('inner-project');\n\n    innerCont.innerHTML = '';\n\n    for (let i = 0; i < localStorage.length; i++) {\n        const projectName = localStorage.key(i);\n        const projectContainer = document.createElement('div');\n        const projectTitle = document.createElement('p');\n        projectTitle.innerText = `${projectName}`;\n\n        projectContainer.appendChild(projectTitle);\n\n        innerCont.appendChild(projectContainer);\n\n        projectContainer.addEventListener('click', () => {\n            (0,_show_todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(projectContainer.firstChild.innerText);\n        });\n    }\n\n};\n\nconst addProjectForm = () => {\n    const projectSection = document.getElementById('project-section');\n\n    const addBtn = document.createElement('button');\n    addBtn.type = 'button';\n    addBtn.innerHTML = '<h3>Add a Project<h3>';\n    addBtn.id='btn';\n\n    addBtn.addEventListener('click', () => {\n        addBtn.style.display = 'none';\n        form.style.display = 'initial';\n    });\n\n    const input = document.createElement('input');\n    input.type = 'text';\n    input.placeholder = 'Project Name';\n    input.id = 'project-input';\n\n    const confirmBtn = document.createElement('button');\n    confirmBtn.type = 'button';\n    confirmBtn.innerText = 'Confirm';\n    confirmBtn.id='confirm'\n    \n    const cancelBtn = document.createElement('button');\n    cancelBtn.type = 'button';\n    cancelBtn.innerText = 'Cancel';\n    cancelBtn.id='cancel'\n    \n    cancelBtn.addEventListener('click', () => {\n        addBtn.style.display = 'initial';\n        form.style.display = 'none';\n    });\n    \n    const form = document.createElement('div');\n    form.id = 'add-project-form';\n    \n    form.style.display = 'none';\n\n    confirmBtn.addEventListener('click', addProjectToStorage);\n    \n    form.appendChild(input);\n    form.appendChild(confirmBtn);\n    form.appendChild(cancelBtn);\n\n    projectSection.appendChild(addBtn);\n    projectSection.appendChild(form);\n};\n\nconst addProjectToStorage = () => {\n    const input = document.getElementById('project-input');\n    localStorage.setItem(input.value, JSON.stringify([]));\n    renderProjects();\n};\n\n\n\n//# sourceURL=webpack://akash/./src/projects.js?");

/***/ }),

/***/ "./src/show-todo.js":
/*!**************************!*\
  !*** ./src/show-todo.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst showTodos = (project = 'defaultProject') => {\n    const todoSection = document.getElementById('todo-section');\n\n    let cont = document.getElementById('todo-wrapper');\n\n    if (!cont) {\n        cont = document.createElement('div');\n        cont.id = 'todo-wrapper';\n    } else {\n        cont.innerHTML = '';\n    }\n\n    const items = JSON.parse(localStorage.getItem(project));\n\n    if (!items) {\n        localStorage.setItem(project, JSON.stringify([]))\n    }\n\n    for (let i = 0; i < items.length; i++) {\n        const item = items[i];\n        const div = document.createElement('div');\n        div.id = `${i}`;\n\n        const title = document.createElement('p');\n        title.textContent = item.title;\n        const description = document.createElement('p');\n        description.textContent = item.description;\n        const dueDate = document.createElement('p');\n        dueDate.textContent = item.dueDate;\n        const priority = document.createElement('p');\n        priority.textContent = item.priority;\n\n        const doneBtn = document.createElement('button');\n        doneBtn.type = 'button';\n        doneBtn.innerText = 'Done';\n        doneBtn.id = 'done-btn';\n        doneBtn.addEventListener('click', () => {\n            items.splice(i,1);\n            localStorage.setItem(project, JSON.stringify(items));\n            cont.innerHTML = '';\n            renderTodos(project);\n        });\n\n        div.appendChild(title);\n        div.appendChild(description);\n        div.appendChild(dueDate);\n        div.appendChild(priority);\n        div.appendChild(doneBtn);\n\n        div.classList.add('task');\n\n        cont.appendChild(div);\n    }\n\n    todoSection.appendChild(cont);\n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showTodos);\n\n//# sourceURL=webpack://akash/./src/show-todo.js?");

/***/ }),

/***/ "./src/todo-section.js":
/*!*****************************!*\
  !*** ./src/todo-section.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createTodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTodo */ \"./src/createTodo.js\");\n\n\nconst createTodoSection = () => {\n    const content = document.getElementById('content');\n\n    const todoSection = document.createElement('div');\n    todoSection.id = 'todo-section';\n\n    const addBtn = document.createElement('button');\n    addBtn.id = 'add-btn';\n    addBtn.innerHTML = '<h3>Add a Task<h3>';\n    addBtn.id='add';\n    todoSection.appendChild(addBtn);\n    \n    const todoForm = (0,_createTodo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    todoSection.appendChild(todoForm);\n\n    addBtn.addEventListener('click', () => {\n        todoForm.style.display = 'block';\n        addBtn.style.display = 'none';\n    });\n\n\n    content.appendChild(todoSection);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTodoSection);\n\n//# sourceURL=webpack://akash/./src/todo-section.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;