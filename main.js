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

//Filter Todo BY:
const AlltodoItemText = document.querySelectorAll(".todoItemText");

//1- All
//Desktop
const filterByAll = document.querySelector(".filterByAll");

filterByAll.addEventListener("click", () => {
  for (let i = 0; i < AlltodoItemText.length; i++) {
    if (AlltodoItemText[i].parentElement.style.display == "none") {
      AlltodoItemText[i].parentElement.style.display = "flex";
    }
  }
  filterByAll.classList.add("active");
  filterByActive.classList.remove("active");
  filterByCompleted.classList.remove("active");
})
//MObile
const filterByAllMobile = document.querySelector(".filterByAllMobile");

filterByAllMobile.addEventListener("click", () => {
  for (let i = 0; i < AlltodoItemText.length; i++) {
    if (AlltodoItemText[i].parentElement.style.display == "none") {
      AlltodoItemText[i].parentElement.style.display = "flex";
    }
  }
  filterByAllMobile.classList.add("active");
  filterByActiveMobile.classList.remove("active");
  filterByCompletedMobile.classList.remove("active");
})

//2- Active
//Desktop
const filterByActive = document.querySelector(".filterByActive");

filterByActive.addEventListener("click", () => {
  for (let i = 0; i < AlltodoItemText.length; i++) {
    if (AlltodoItemText[i].classList.contains("completed")) {
      AlltodoItemText[i].parentElement.style.display = "none";
    }
  }
  filterByAll.classList.remove("active");
  filterByActive.classList.add("active");
  filterByCompleted.classList.remove("active");
})
//MObile
const filterByActiveMobile = document.querySelector(".filterByActiveMobile");

filterByActiveMobile.addEventListener("click", () => {
  for (let i = 0; i < AlltodoItemText.length; i++) {
    if (AlltodoItemText[i].classList.contains("completed")) {
      AlltodoItemText[i].parentElement.style.display = "none";
    }
  }
  filterByAllMobile.classList.remove("active");
  filterByActiveMobile.classList.add("active");
  filterByCompletedMobile.classList.remove("active");
})

//3- Completed
//Desktop
const filterByCompleted = document.querySelector(".filterByCompleted");

filterByCompleted.addEventListener("click", () => {
  for (let i = 0; i < AlltodoItemText.length; i++) {
    if (!AlltodoItemText[i].classList.contains("completed")) {
      AlltodoItemText[i].parentElement.style.display = "none";
    }
  }
  filterByAll.classList.remove("active");
  filterByActive.classList.remove("active");
  filterByCompleted.classList.add("active");
})
//MObile
const filterByCompletedMobile = document.querySelector(".filterByCompletedMobile");

filterByCompletedMobile.addEventListener("click", () => {
  for (let i = 0; i < AlltodoItemText.length; i++) {
    if (!AlltodoItemText[i].classList.contains("completed")) {
      AlltodoItemText[i].parentElement.style.display = "none";
    }
  }
  filterByAllMobile.classList.remove("active");
  filterByActiveMobile.classList.remove("active");
  filterByCompletedMobile.classList.add("active");
})

new Sortable(todoCollection, {
  animation: 150,
  ghostClass: 'purpple-background-class',
  filter: '.todoFilter',
});