let projects = [];

let tasks = [];

function addProject(){

    const projectInput = document.getElementById("projectInput");

    if(projectInput.value === ""){
        return;
    }

    projects.push(projectInput.value);

    renderProjects();

    projectInput.value = "";
}

function renderProjects(){

    const projectList = document.getElementById("projectList");

    projectList.innerHTML = "";

    projects.forEach((project)=>{

        projectList.innerHTML += `
            <div class="card">
                <h3>${project}</h3>
            </div>
        `;
    });
}

function addTask(){

    const taskInput = document.getElementById("taskInput");

    const statusInput = document.getElementById("statusInput");

    if(taskInput.value === ""){
        return;
    }

    const taskData = {
        name: taskInput.value,
        status: statusInput.value
    };

    tasks.push(taskData);

    renderTasks();

    taskInput.value = "";
}

function renderTasks(){

    const taskList = document.getElementById("taskList");

    taskList.innerHTML = "";

    tasks.forEach((task,index)=>{

        taskList.innerHTML += `
            <div class="card">
                <h3>${task.name}</h3>

                <p>Status: ${task.status}</p>

                <button onclick="removeTask(${index})">
                    Delete
                </button>
            </div>
        `;
    });
}

function removeTask(index){

    tasks.splice(index,1);

    renderTasks();
}