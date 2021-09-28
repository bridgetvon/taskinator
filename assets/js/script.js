
//save-task button 
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var taskFormHandler = function(event) {
    var taskFormHandler = function(event) {
        event.preventDefault();
        var taskNameInput = document.querySelector("input[name='task-name']").value;
        var taskTypeInput = document.querySelector("select[name='task-type']").value;
      
        //check if input values ar emepty strings 
        if (!taskNameInput || !taskTypeInput) {
            alert("You need to fill out the task form!");
            return false;
        }
        formEl.reset();
        // package up data as an object
        var taskDataObj = {
          name: taskNameInput,
          type: taskTypeInput
        };
      
        // send it as an argument to createTaskEl
        createTaskEl(taskDataObj);
      };

//task-item list append and dynamic styling 
//four steps key to create a DOM
// 1. creat new task item 2 style new task item 3. add the text 4. append this element to task list 


var createTaskEl = function(taskDataObj) {
    // create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
  
    // create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
    listItemEl.appendChild(taskInfoEl);
  
    console.dir(listItemEl);
  
    // add list item to list
    tasksToDoEl.appendChild(listItemEl);
  };
  
  formEl.addEventListener("submit", taskFormHandler);
  
}