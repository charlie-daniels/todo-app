import loadUI from './pages/ui.js';
import './styles/global.scss';

function init() {
  const body = document.querySelector('#content');
  
  loadUI(body);
}

init();