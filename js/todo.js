const toDoForm = document.getElementById("todo-form");
const todoInput = toDoForm.querySelector("input"); 
//we have two options either find from all the document or like this from find from toDoForm, documment.querySelector("#todo-form input")
const todoList = document.getElementById("todo-list");

function handleTodoSubmit(event){
    event.preventDefault();
    todoInput.value = "";
}

toDoForm.addEventListener("submit",handleTodoSubmit);