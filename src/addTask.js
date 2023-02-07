
let tasks = [];

class Task{
    constructor(taskTitle, description) {
    this.taskTitle = taskForm.taskTitle.value;
    this.description = taskForm.description.value;
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

    const newTask = new Task(this.taskTitle, this.description);
    tasks.push(newTask);
    console.log(tasks);

    renderTasks();
}

function renderTasks () {

}

export {tasks, addTask, submitTask}