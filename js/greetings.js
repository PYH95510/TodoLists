//const loginForm = document.querySelector("#login-form"); //login form is alredy the HTML document so we could directly search inside the login form
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY ="username";


function onLoginSubmit(event){
    // const username = loginInput.value;
    // if(username === ""){
    //     alert("Please write your name");
    // }else if(username.length > 15){
    //     alert("your name is too long")
    // } you can do this job in html 
    event.preventDefault(); //prevent the defualt action which is refreshing the page
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    console.log(username);
    localStorage.setItem(USERNAME_KEY,username);
    paintGreetings(username);
    //greeting.innerText = "Hello " + username;
    // greeting.innerText = `Hello ${username}`; //same as the above one
    // greeting.classList.remove(HIDDEN_CLASSNAME);
    

    
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


const savedUserName = localStorage.getItem(USERNAME_KEY);
console.log(savedUserName);

if(savedUserName === null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}else{
    //show the greetings
    paintGreetings(savedUserName);
}