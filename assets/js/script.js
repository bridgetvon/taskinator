//using the DOM//
console.dir(window.document);

//save-task button 
var formEl = document.querySelector("#task-form");
console.log(buttonEl);

//task-item list append and dynamic styling 
//four steps key to create a DOM
// 1. creat new task item 2 style new task item 3. add the text 4. append this element to task list 

var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");
var createTaskHandler = function(event) {
    event.preventDefault();

    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task." ; 
    tasksToDoEl.appendChild(listItemEl);
};

formEl.addEventListener("submit", createTaskHandler);
