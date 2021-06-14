const themeToggle = document.querySelector("#themeToggle");
const todo = document.querySelector("#todo");
const todoText = document.querySelector("#todoText");

//Light and Dark theme toggle
themeToggle.addEventListener("click", () => {
  todo.classList.toggle("dark");
});