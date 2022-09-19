import { DOMController } from './domcontroller';
import * as elements from './domcollection.js';
import { Task } from './task';
import { parseISO } from 'date-fns';

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
  DOMController.showInbox(taskList);
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
    parseISO(data.get('due-date')),
    data.get('priority')
  );
})

elements.sideGeneralInbox.addEventListener('click', () => DOMController.showInbox(taskList));

elements.sideGeneralToday.addEventListener('click', () => DOMController.showToday(taskList));

elements.sideGeneralUpcoming.addEventListener('click', () => DOMController.showUpcoming(taskList));

