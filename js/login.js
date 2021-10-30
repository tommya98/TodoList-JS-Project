const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");

const USERNAME_KEY = "username";
const HIDDEN_CLASSNAME = "hidden";

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername) {
  loginForm.classList.add(HIDDEN_CLASSNAME);
  console.log(`안녕하세요 ${localStorage.getItem(USERNAME_KEY)}님`);
} else {
  loginForm.addEventListener("submit", onLoginSubmit);
}

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  console.log(`안녕하세요 ${username}님`);
}
