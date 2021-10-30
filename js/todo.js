const totoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".todo-form input");
const todoList = document.querySelector(".todo-list");

const TODO_KEY = "todo";

let todos = [];

toDoForm.addEventListener("submit", handleTodoSubmit);

function handleTodoSubmit(event) {
  event.preventDefault();
  todoInput.value = "";
  const newTodoObj = {
    id: Date.now(),
    text: todoInput.value,
  };
  todos.push(newTodoObj);
}
