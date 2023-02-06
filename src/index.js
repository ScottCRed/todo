import { addProject } from "./addProject"
import { addTask } from "./addTask"
import './style.css'

const addP = document.querySelector('.projectAdd');
addP.addEventListener('click', addProject);

const addT = document.querySelector('.taskAddButton');
addT.addEventListener('click', addTask);

console.log('ya bith')

