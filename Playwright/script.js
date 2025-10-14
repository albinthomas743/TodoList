document.getEl
ementById("add-task-btn").addEventListener("click", addTask);
document.getElementById("task-input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

function addTask() {
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const taskList = document.getElementById("task-list");

    // Create a new list item
    const li = document.createElement("li");
    li.textContent = taskText;

    // Add a delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-btn");
    deleteButton.addEventListener("click", function() {
        taskList.removeChild(li);
    });

    // Add the delete button to the list item
    li.appendChild(deleteButton);

    // Add the new task to the task list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = "";

    // Toggle completed status on click
    li.addEventListener("click", function() {
        li.classList.toggle("completed");
    });
}
