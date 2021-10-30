const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".todo-form input");
const todoList = document.querySelector(".todo-list");

const TODO_KEY = "todo";

const savedTodo = localStorage.getItem(TODO_KEY);

let todos = [];

todoForm.addEventListener("submit", handleTodoSubmit);

if (savedTodo) {
  const parsedTodo = JSON.parse(savedTodo);
  todos = parsedTodo;
  parsedTodo.forEach(showTodo);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodoObj = {
    id: Date.now(),
    text: todoInput.value,
  };
  todoInput.value = "";
  todos.push(newTodoObj);
  showTodo(newTodoObj);
  saveTodo();
}

function showTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function saveTodo() {
  localStorage.setItem(TODO_KEY, JSON.stringify(todos));
}

function deleteTodo() {}
