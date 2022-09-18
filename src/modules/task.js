export const Task = (title, description) => {
  let _title = title;
  let _description = description;
  let _completed = false;

  return {
    title: _title,
    description: _description
  };
};