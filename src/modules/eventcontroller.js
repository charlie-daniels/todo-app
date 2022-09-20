import { DOMController } from './domcontroller';
import * as elements from './domcollection.js';
import { Task } from './task.js';
import { Project } from './project.js';
import { parseISO } from 'date-fns';

let taskList = [];
let projectList = [];

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

function createNewProject(title, description, dueDate) {
  let newProject = Project(
    title,
    description,
    dueDate
  );
  projectList.push(newProject);
  DOMController.toggleNewProjectForm();
  DOMController.updateProjectList(projectList);
  DOMController.showProject(newProject);
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

elements.newProjectForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(elements.newProjectForm);
  createNewProject(
    data.get('title'),
    data.get('description'),
    parseISO(data.get('due-date')),
  );
});

elements.sideGeneralInbox.addEventListener('click', () => DOMController.showInbox(taskList));

elements.sideGeneralToday.addEventListener('click', () => DOMController.showToday(taskList));

elements.sideGeneralUpcoming.addEventListener('click', () => DOMController.showUpcoming(taskList));

elements.sideCreateProject.addEventListener('click', DOMController.toggleNewProjectForm);

