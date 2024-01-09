// Function to get tasks from local storage
function getTasks() {
    return JSON.parse(localStorage.getItem('jsonitems')) || [];
}

// Function to update tasks in the table
function updateTable(tasks) {
    const tableBody = document.getElementById("tablebody");
    let tableHTML = "";

    tasks.forEach((task, index) => {
        tableHTML += `
            <tr>
                <th scope="row">${index + 1}</th>
                <td>${task[0]}</td>
                <td>${task[1]}</td> 
                <td><button class="btn btn-primary btn-sm" onclick="removeTask(${index})">Delete</button></td>
            </tr>`;
    });

    tableBody.innerHTML = tableHTML;
}

// Function to add a new task
function addTask() {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;

    if (!title || !description) {
        alert("Title and description are required!");
        return;
    }

    const tasks = getTasks();
    tasks.push([title, description]);
    localStorage.setItem('jsonitems', JSON.stringify(tasks));

    updateTable(tasks);

    // Clearing input fields after task is added
    document.getElementById('title').value = "";
    document.getElementById('description').value = "";
}

// Function to remove a task by index
function removeTask(index) {
    const tasks = getTasks();
    tasks.splice(index, 1);
    localStorage.setItem('jsonitems', JSON.stringify(tasks));
    updateTable(tasks);
}

// Function to delete the full list
function deleteFullList() {
    const confirmationMsg = confirm("Are you sure you want to delete the full list?");
    if (confirmationMsg) {
        localStorage.removeItem('jsonitems');
        updateTable([]);
    } else {
        alert("The list has not been deleted.");
    }
}

// Function to search tasks
function searchTasks() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const tasks = getTasks();
    const filteredTasks = tasks.filter(task => {
        const title = task[0].toLowerCase();
        const description = task[1].toLowerCase();
        return title.includes(searchTerm) || description.includes(searchTerm);
    });

    updateTable(filteredTasks);
}

// Event listeners
document.querySelector("#add").addEventListener('click', addTask);
document.querySelector("#deleteFullList").addEventListener('click', deleteFullList);
document.querySelector("#searchInput").addEventListener('input', searchTasks);

// Initial update
const initialTasks = getTasks();
updateTable(initialTasks);
