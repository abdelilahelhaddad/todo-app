const themeToggle = document.querySelector("#themeToggle");
const todo = document.querySelector("#todo");
const todoText = document.querySelector("#todoText");
const todoCollection = document.querySelector("#todoCollection");

//Light and Dark theme toggle
themeToggle.addEventListener("click", () => {
  todo.classList.toggle("dark");
});

//Add a todo
todoText.addEventListener('keypress', function (e) {
  todoTextValue = todoText.value;
  if (e.key === 'Enter') {
    const newTodoItem = document.createElement("div");
    newTodoItem.classList.add("todoItem");

    newTodoItem.innerHTML = `
    <div class="borderGradiant">
    <input type="checkbox" name="checkBTN" id="checkBTN"></div>
    <p class="todoItemText">${todoTextValue}</p>
    <img src="./images/icon-cross.svg" alt="">
    `;

    todoCollection.appendChild(newTodoItem);
    todoCollection.insertBefore(newTodoItem, todoCollection.firstChild);
    todoText.value = "";
  }
});

//Delete a todo
todoCollection.addEventListener('click', function (e) {
  if (e.target.parentElement.classList.contains("todoItem")) {
    e.target.parentElement.remove();
  }
})