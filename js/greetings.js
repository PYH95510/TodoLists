//const loginForm = document.querySelector("#login-form"); //login form is alredy the HTML document so we could directly search inside the login form
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY ="username";


function onLoginSubmit(event){
    
    event.preventDefault(); //prevent the defualt action which is refreshing the page
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME); //here we add login form to hidden classname so we make it invisible
    localStorage.setItem(USERNAME_KEY,username);
    paintGreetings(username);
 
    

    
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
  }


const savedUsername = localStorage.getItem(USERNAME_KEY);


if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
  } else {
    paintGreetings(savedUsername);
  }