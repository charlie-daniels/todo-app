import '../styles/global.scss';
import * as elements from './domcollection.js';
import { templates } from './domtemplates.js'
import { isToday, isThisWeek } from 'date-fns';

export const DOMController = (() => {
  const _clearElement = (elem) => {
    elem.innerHTML = '';
  }

  const _toggleElementDisabled = (elem) => { 
    elem.disabled ? elem.disabled = false : elem.disabled = true;
  }

  const _toggleElementHidden = (elem) => {
    elem.classList.contains('hidden') ? elem.classList.remove('hidden') : elem.classList.add('hidden')
  }

  const _refreshTaskList = (tasks) => {
    _clearElement(elements.dashboardTaskList);
    tasks.forEach(task => {
      elements.dashboardTaskList.append(_taskToHTML(task));
    });
  }

  const _refreshProjectList = (projects) => {
    _clearElement(elements.sideProjectsList);
    projects.forEach(project => {
      const liElement = document.createElement('li');
      const projButton = document.createElement('button');
      liElement.appendChild(projButton);
      projButton.textContent = project.title;

      projButton.addEventListener('click', () => {
        _showProject(project);
      });
      elements.sideProjectsList.append(liElement);
    })
  }

  const _setDashboardTitle = (title) => {
    elements.dashboardTitle.textContent = title;
  }

  const _taskToHTML = (task) => {
    const wrapper = document.createElement('div');
    const base =
    '<li class="dash-task">' +
      '<h3 class="title"></h3>' +
      '<p class="description">' +
      '<div class="properties">' +
        '<p class="due-date"></p>' +
        '<p class="priority"></p>' +
      '</div>' +
    '</li>';
    wrapper.insertAdjacentHTML('beforeend', base);
    wrapper.querySelector('.title').textContent = task.title;
    wrapper.querySelector('.description').textContent = task.description;
    wrapper.querySelector('.due-date').textContent = task.dueDateToString();
    wrapper.querySelector('.priority').textContent = task.priority;
    return wrapper;
  }

  const _projectToHTML = (project) => {
    const wrapper = document.createElement('div');
    const base =
    '<li class="dash-project">' +
      '<h3 class="title"></h3>' +
      '<p class="description">' +
      '<div class="properties">' +
        '<p class="due-date"></p>' +
        '<p class="priority"></p>' +
      '</div>' +
    '</li>';
    wrapper.insertAdjacentHTML('beforeend', base);
    wrapper.querySelector('.title').textContent = project.title;
    wrapper.querySelector('.description').textContent = project.description;
    wrapper.querySelector('.due-date').textContent = project.dueDateToString();
    return wrapper;
  }

  const toggleNewTaskForm = () => {
    _toggleElementHidden(elements.newTaskForm);
    _toggleElementDisabled(elements.navNewTask);
    _toggleElementDisabled(elements.sideCreateProject);
  }

  const toggleNewProjectForm = () => {
    _clearElement(elements.dashboardTaskList);
    _toggleElementHidden(elements.newProjectForm);
    _toggleElementDisabled(elements.sideCreateProject);
    _toggleElementDisabled(elements.navNewTask);
  }

  const showInbox = (tasks) => {
    _setDashboardTitle('Inbox');
    _refreshTaskList(tasks);
  }

  const showToday = (tasks) => {
    _setDashboardTitle('Today');
    let todayTasks = [];
    tasks.forEach(t => {
      if (isToday(t.dueDate)) todayTasks.push(t);
    });
    _refreshTaskList(todayTasks);
  }
  
  const showUpcoming = (tasks) => {
    _setDashboardTitle('Upcoming');
    let upcomingTasks = [];
    tasks.forEach(t => {
      if (isThisWeek(t.dueDate)) upcomingTasks.push(t);
    });
    _refreshTaskList(upcomingTasks);
  }

  const showProject = (project) => {
    _clearElement(elements.dashboardTaskList);
    _setDashboardTitle(project.title);
  }

  const updateProjectList = (projects) => {
    _refreshProjectList(projects);
  }

  return { 
    toggleNewTaskForm,
    toggleNewProjectForm,
    showInbox,
    showToday,
    showUpcoming,
    showProject,
    updateProjectList
  };
})();

function onLoad() {
  DOMController.showInbox([]);
}

onLoad();