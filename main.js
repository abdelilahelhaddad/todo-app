const themeToggle = document.querySelector("#themeToggle");
const todo = document.querySelector("#todo");
const todoText = document.querySelector("#todoText");
const todoCollection = document.querySelector("#todoCollection");
const todoItem = document.querySelector(".todoItem");
const itemsLeft = document.querySelector(".itemsLeft");
const todoItemText = document.querySelector(".todoItemText");
const checkBTN = document.querySelector("#checkBTN");
const clearCompleted = document.querySelector(".clearCompleted");

//Light and Dark theme toggle
themeToggle.addEventListener("click", () => {
  todo.classList.toggle("dark");
});

//Items Left
function leftItems() {
  const leftItems = todoCollection.childElementCount - 1;
  itemsLeft.textContent = `${leftItems} items left`;
}
leftItems();

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
    <img class="crossIcon" src="./images/icon-cross.svg" alt="">
    `;

    todoCollection.appendChild(newTodoItem);
    todoCollection.insertBefore(newTodoItem, todoCollection.firstChild);
    todoText.value = "";
  }
  leftItems();
});

//Delete a todo
todoCollection.addEventListener('click', function (e) {
  if (e.target.classList.contains("crossIcon")) {
    e.target.parentElement.remove();
  }
  leftItems();
})

//Completed todo
todoCollection.addEventListener('change', function (e) {
  e.target.parentElement.parentElement.children[1].classList.toggle("completed");
})

//Clear completed todos
clearCompleted.addEventListener("click", () => {
  const completedTodos = document.querySelectorAll(".completed");
  for (let i = 0; i < completedTodos.length; i++) {
    completedTodos[i].parentElement.remove();
  }
})