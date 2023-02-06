
let tasks = [];

class Task{
    constructor(taskTitle, description, dueDate, priority) {
    this.taskTitle = form.title.value;
    this.description = form.description.textContent;
    this.dueDate = form.date.value;
    this.priority = form.priority.value;
    }
  }

function addTask () {
    const addP = document.querySelector('.addTask');
    addP.classList.add('formAppear');
    
    console.log('task baby')
}

function submitTask () {
    event.preventDefault();
    const addT = document.querySelector('.addTask');
    addT.classList.remove('formAppear'); 

    const newTask = new Task(this.taskTitle, this.description, this.dueDate, this.priority);
    tasks.push(newTask);
    console.log(tasks)
}

export {tasks, addTask, submitTask}