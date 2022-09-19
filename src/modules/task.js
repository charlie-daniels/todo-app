import { format } from 'date-fns';

export const Task = (title, description, dueDate, priority) => {
  let task = {
    title,
    description,
    dueDate,
    priority
  }
  
  task.toggleCompleted = () => {task.completed = !task.completed}

  task.dueDateToString = () => {
    if (task.dueDate instanceof Date && !isNaN(task.dueDate)) {
      return format(task.dueDate, 'EEEE do MMM y');
    }
    return '';
  }

  return task;
};