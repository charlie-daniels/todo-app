export const Task = (title, description, dueDate, priority) => {
  let task = {
    title,
    description,
    dueDate,
    priority
  }
  
  let _completed = false;

  task.toggleCompleted = () => {_completed = !_completed}

  return task;
};