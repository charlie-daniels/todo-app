import { Task } from './task.js';

export const Project = (title, description, dueDate) => {
  const task = Task(title, description, dueDate, priority);
  let project = { 
    tasks: []
  };
  
  return Object.assign({}, task, project);
};
