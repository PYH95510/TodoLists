const toDoForm = document.getElementById("todo-form");
const todoInput = toDoForm.querySelector("input"); 
//we have two options either find from all the document or like this from find from toDoForm, documment.querySelector("#todo-form input")
const todoList = document.getElementById("todo-list");

function paintTodo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span"); //span doesn't have to be identified as span1 span2 like this. It coud be added as span span span span.
    li.appendChild(span); //so if todos are added like this, then todos will updated automatically.
    span.innerText = newTodo;
    todoList.appendChild(li); //adding todolists to todoLIsts. Because we added required from HTML if we do type nothing it will be not added to todoLists.
}

function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    paintTodo(newTodo);
}

toDoForm.addEventListener("submit",handleTodoSubmit);