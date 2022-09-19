import { DOMController } from './domcontroller';
import * as elements from './domcollection.js';
import { Task } from './task';

let taskList = [];

function createNewTask(title, description, dueDate, priority) {
  let newTask = Task(
    title,
    description,
    dueDate,
    priority
  );
  taskList.push(newTask);
  DOMController.toggleNewTaskForm();
  DOMController.refreshTaskList(taskList);
}

elements.navNewTask.addEventListener('click', () => {
  DOMController.toggleNewTaskForm();
});

elements.newTaskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(elements.newTaskForm);
  createNewTask(
    data.get('title'),
    data.get('description'),
    data.get('due-date'),
    data.get('priority')
  );
})

elements.navMenu.addEventListener('click', () => {
  DOMController.toggleMenu();
});