import '../styles/global.scss';
import * as elements from './domcollection.js';
import { templates } from './domtemplates.js'

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

  const toggleNewTaskForm = () => {
    _toggleElementHidden(elements.newTaskForm);
    _toggleElementDisabled(elements.navNewTask);
  }

  return { 
    toggleNewTaskForm
  };
})();