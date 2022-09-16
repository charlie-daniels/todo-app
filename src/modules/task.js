export const Task = (title, description) => {
  let task = {
    title,
    description
  };
  let _completed = false;

  const getInfo = () => {
    return task;
  }

  return {
    getInfo
  };
};