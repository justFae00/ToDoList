const inputBox = document.getElementById("input-box");
const taskContainer = document.getElementById("task-container");

inputBox.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

//creat and add checked property and delete button
function addTask() {
  if (inputBox.value !== "") {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    taskContainer.appendChild(li);
    let button = document.createElement("button");
    button.innerHTML = "✘";
    li.appendChild(button);
  }
  inputBox.value = "";
  saveData();
}

taskContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "BUTTON") {
    e.target.parentElement.remove();
    saveData();
  }
});

//save data in localstorage
function saveData() {
  localStorage.setItem("Data", taskContainer.innerHTML);
}

//load data
function showTasks() {
  taskContainer.innerHTML = localStorage.getItem("Data");
}

showTasks();
