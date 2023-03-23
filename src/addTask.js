import { projects } from "./addProject";

let tasks = [];
let projectIndex;

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
    console.log('task baby')
}

function submitTask () {
    event.preventDefault();
    const addT = document.querySelector('.addTask');
    addT.classList.remove('formAppear'); 

    const newTask = new Task(this.taskTitle, this.description, this.dueDate, this.priority);
    tasks.push(newTask);
    console.log(tasks);
    console.log(projectForm.projectTitle.value);

    renderTasks();
}

function renderTasks () {
    const taskContainer = document.querySelector('.taskContainer');
    taskContainer.innerHTML = '';   

    for (let i = 0; i< tasks.length; i++) {
        taskItem(tasks[i])
    };
}

function taskItem (item) {
    const taskContainer = document.querySelector('.taskContainer');
    const taskBox = document.createElement('div');
    taskBox.classList.add('taskBox');
    taskContainer.appendChild(taskBox);

    const taskTitle = document.createElement('div');
    taskTitle.textContent = 'Task: '+ item.taskTitle
    taskBox.appendChild(taskTitle)

    const taskDescrip = document.createElement('div');
    taskDescrip.textContent = 'Description: ' + item.description;
    taskBox.appendChild(taskDescrip);

    const taskDate = document.createElement('div');
    taskDate.textContent = 'Due: ' + item.dueDate
    taskBox.appendChild(taskDate);

    const taskPriority = document.createElement('div');
    taskPriority.textContent = 'Priority: ' + item.priority
    taskBox.appendChild(taskPriority);
}

function projectHead () {
    const projectHead = document.querySelector('.projectHead');
    const heading = document.createElement('h2');
    heading.textContent = 'Default Project';
    projectHead.appendChild(heading);

}

projectHead();

export {tasks, addTask, submitTask, renderTasks}