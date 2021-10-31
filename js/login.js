const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const hello = document.querySelector(".hello");
const main = document.querySelector("main");

const USERNAME_KEY = "username";
const HIDDEN_CLASSNAME = "hidden";

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername) {
  loginForm.classList.add(HIDDEN_CLASSNAME);
  main.classList.remove(HIDDEN_CLASSNAME);
  sayHello(savedUsername);
} else {
  loginForm.addEventListener("submit", onLoginSubmit);
}

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  main.classList.remove(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  sayHello(username);
}

function sayHello(username) {
  hello.classList.remove(HIDDEN_CLASSNAME);
  hello.innerText = `${username}님 안녕하세요`;
}
