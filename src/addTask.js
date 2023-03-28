import { projects, projectIndex } from "./addProject";

let tasks = [];

class Task{
    constructor(taskTitle, description, dueDate) {
    this.taskTitle = taskForm.taskTitle.value;
    this.description = taskForm.description.value;
    this.dueDate = taskForm.dueDate.value;
    this.priority = taskForm.priority.value;
    }
  }

function addTask () {
    const addP = document.querySelector('.addTask');
    addP.classList.add('formAppear');
    document.getElementById('taskForm').reset();
}

function submitTask () {
    event.preventDefault();
    const addT = document.querySelector('.addTask');
    addT.classList.remove('formAppear'); 

    const newTask = new Task(this.taskTitle, this.description, this.dueDate, this.priority);
    
    pushTasks(newTask);
    renderTasks();
}

function renderTasks () {
    const taskContainer = document.querySelector('.taskContainer');
    taskContainer.innerHTML = '';   
    let result = projects[projectIndex]

    for (let i = 1; i< result.length; i++) {
        taskItem(result[i])
    };
}

function taskItem (item) {
    const taskContainer = document.querySelector('.taskContainer');
    const taskBox = document.createElement('div');
    taskBox.classList.add('taskBox');
    taskContainer.appendChild(taskBox);

    const taskTitle = document.createElement('div');
    taskTitle.textContent = 'Task: '+ item.taskTitle;
    taskBox.appendChild(taskTitle);

    const taskDescrip = document.createElement('div');
    taskDescrip.textContent = 'Description: ' + item.description;
    taskBox.appendChild(taskDescrip);

    const taskDate = document.createElement('div');
    taskDate.textContent = 'Due: ' + item.dueDate;
    taskBox.appendChild(taskDate);

    const taskPriority = document.createElement('div');
    taskPriority.textContent = 'Priority: ' + item.priority
    taskBox.appendChild(taskPriority);

    const complete = document.createElement('button');
    taskBox.appendChild(complete);
    item.complete = false

    if(item.complete===false) {
        complete.textContent = 'Not Complete'
        complete.style.backgroundColor = 'Red'
    } else {
        complete.textContent = 'Complete'
        complete.style.backgroundColor = 'Green'
    }

    complete.addEventListener('click', () => {
        if(item.complete===false) {
            item.complete = true;
            complete.textContent = 'Complete';
            complete.style.backgroundColor = 'Green';
            taskBox.style.color = 'Grey'
        }else {
            item.complete = false;
            complete.textContent = 'Not Complete';
            complete.style.backgroundColor = 'Red';
            taskBox.style.color = 'Black'
        }
    })
}

function pushTasks (item) {
    let index = projects[projectIndex];
    if (item instanceof PointerEvent) {
    }
    else {
    index.push(item);
    }
    tasks = [];
}

export {addTask, submitTask, pushTasks, renderTasks}