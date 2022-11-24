const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); 
//we have two options either find from all the document or like this from find from toDoForm, documment.querySelector("#todo-form input")
const todoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";
let toDos = [];

function saveTodos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //when it goes into document, it parse into string.
    saveTodos()
}


function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span"); //span doesn't have to be identified as span1 span2 like this. It coud be added as span span span span.
    span.innerText = newTodo.text;
    
    const button = document.createElement("button");
    button.innerText = "🌟";
    button.addEventListener("click",deleteTodo);
    
    li.appendChild(span); //so if todos are added like this, then todos will updated automatically.
    li.appendChild(button);
    todoList.appendChild(li); //adding todolists to todoLIsts. Because we added required from HTML if we do type nothing it will be not added to todoLists.
}




function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

/*so in concise, we need li (list item) to item lists in html so we first make it, and then inside them we made span which is inline
text. each of the li span and button is appended. At the end, we append li to the todoList.*/



const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos !== null){//after refreshed, if the savedTodos is not null, bring them and do the painTodos
    const parsedToDos = JSON.parse(savedTodos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);    
}