const input = document.querySelector(".inputs input");
const button = document.querySelector(".inputs button");
const todos = document.querySelector(".todos");

let todoList = [];

function createTodo() {
  todos.innerHTML = "";
  todoList.forEach((todo) => {
    todos.innerHTML += `
        <div class="card">
        <h2>${todo.todo}</h2>
        <button onclick=removeFromTodo("${todo.id}")>delete</button>
      </div>
        `;
  });


  
}

const addTodo = () => {
  todoList = [
    ...todoList,
    {
      id: Math.random().toString(36).substr(2, 5),
      todo: input.value.trim(),
    },
  ];
  createTodo();
  input.value = "";
};

function removeFromTodo(id) {
  const findIndex = todoList.indexOf(id);
  todoList.splice(findIndex, 1);
  createTodo();
}

button.addEventListener("click", addTodo);
