import { DOMController } from './domcontroller';
import * as elements from './domcollection.js';
import { Task } from './task';

let taskList = [];

function createNewTask(title, description) {
  let newTask = Task(
    title,
    description
  );
  taskList.push(newTask);
  DOMController.toggleNewTaskForm();
  console.log(taskList[0].getInfo());
}

elements.navNewTask.addEventListener('click', (e) => {
  DOMController.toggleNewTaskForm();
});

elements.newTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(elements.newTaskForm);
    createNewTask(
      data.get('title'),
      data.get('description')
    );
})