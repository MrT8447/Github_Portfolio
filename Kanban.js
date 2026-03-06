const taskInput = document.getElementById("task-input");
const addButton = document.getElementById("add-button");
const delButton = document.getElementById("del-button");

const ideasList = document.getElementById("ideas-list");
const todoList = document.getElementById("todo-list");
const doingList = document.getElementById("doing-list");
const reviewList = document.getElementById("review-list");
const doneList = document.getElementById("done-list");

const todoColumn = document.getElementById("todo-column");
const doingColumn = document.getElementById("doing-column");
const reviewColumn = document.getElementById("review-column");
const doneColumn = document.getElementById("done-column");

let draggedItem = null;

// Task ziehen
todoColumn.addEventListener("dragover", function(e){
    e.preventDefault();
});

doingColumn.addEventListener("dragover", function(e){
    e.preventDefault();
});

reviewColumn.addEventListener("dragover", function(e){
    e.preventDefault();
});

doneColumn.addEventListener("dragover", function(e){
    e.preventDefault();
});

// Task ablegen
todoColumn.addEventListener("drop", function(e){
    e.preventDefault();
    todoList.prepend(draggedItem);
    const delButton = draggedItem.querySelector("button");
    delButton.remove();
});

doingColumn.addEventListener("drop", function(e){
    e.preventDefault();
    doingList.prepend(draggedItem);
    const delButton = draggedItem.querySelector("button");
    delButton.remove();
});

reviewColumn.addEventListener("drop", function(e){
    e.preventDefault();
    reviewList.prepend(draggedItem);
    const delButton = draggedItem.querySelector("button");
    delButton.remove();
});

doneColumn.addEventListener("drop", function(e){
    e.preventDefault();
    doneList.prepend(draggedItem);
    const delButton = draggedItem.querySelector("button");
    delButton.remove();
});

// Task erstellen
function addTask() {
    const text = taskInput.value;
    if (!text) return;

    const li = document.createElement("li");
    const textNode = document.createTextNode(" " + text + " ");
    li.draggable = true;

    // Delete-Button nur in ideas-list
    const delButton = document.createElement("button");
    delButton.type = "button";
    delButton.textContent = "x";

    li.appendChild(textNode);
    li.appendChild(delButton); // nur in ideas-list sichtbar

    // Drag & Drop
    li.addEventListener("dragstart", function(){
        draggedItem = li;
    });

    // Delete-Button löscht nur dieses li
    delButton.addEventListener("click", function() {
        li.remove();
    });

    ideasList.appendChild(li);
    taskInput.value = "";
}

addButton.addEventListener("click", addTask);
delButton.addEventListener("click", delTask);




