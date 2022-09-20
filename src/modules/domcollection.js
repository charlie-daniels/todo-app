// Navbar
export const navHome = document.getElementById('show-home');
export const navSearch = document.getElementById('search-query');
export const navNewTask = document.getElementById('new-task');
export const navNotifications = document.getElementById('show-notifications');
// Sidebar
export const side = document.querySelector('aside');
export const sideGeneral = document.getElementById('general');
export const sideFavourites = document.getElementById('favourites');
export const sideProjects = document.getElementById('projects');
export const sideGeneralList = document.querySelector('#general > ul');
export const sideFavouritesList = document.querySelector('#favourites > ul');
export const sideProjectsList = document.querySelector('#projects > ul');
export const sideGeneralInbox = document.getElementById('show-inbox');
export const sideGeneralToday = document.getElementById('show-today');
export const sideGeneralUpcoming = document.getElementById('show-upcoming');
export const sideCreateProject = document.getElementById('create-project');
// Dashboard
export const dashboardTitle = document.getElementById('display-title');
export const dashboardFilters = document.getElementById('filters');
export const dashboardTaskList = document.getElementById('task-list');
export const dashboardFirstTask = document.querySelector('dash-task');
// New Task Form
export const newTaskForm = document.getElementById('new-task-form');
export const newTaskFormFields = {
  title: document.getElementById('new-task-title'),
  description: document.getElementById('new-task-description'),
  submit: document.getElementById('new-task-submit')
};
// New Project Form
export const newProjectForm = document.getElementById('new-project-form');
export const newProjectFormFields = {
  title: document.getElementById('new-project-title'),
  description: document.getElementById('new-project-description'),
  submit: document.getElementById('new-project-submit')
};
