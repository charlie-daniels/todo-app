export const templates = {
  Task: '<li class="dash-Task">' +
          '<h3 class="name"></h3>' +
          '<div class="properties">' +
            '<p class="due-date"></p>' +
            '<p class="tags"></p>' +
          '</div>' +
        '</li>',
  newTask:'<form>' + 
            '<input type="text" name="title" id="new-title" placeholder="Title">' +
            '<input type="text" name="description" id="new-description" placeholder="Description...">' +
            '<input type="submit" value="Submit" id="new-submit" class="submit-new-task">' +
          '</form>'
}