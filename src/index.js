import { addProject } from "./addProject";
import { addTask } from "./addTask";
import { submitProject } from "./addProject";
import { submitTask } from "./addTask";
import './style.css';

const addT = document.querySelector('.taskAdd');
addT.addEventListener('click', addTask);

const addP = document.querySelector('.projectAdd');
addP.addEventListener('click', addProject);

const submitP = document.querySelector('.submit-button-p');
submitP.addEventListener('click', submitProject);

const submitT = document.querySelector('.submit-button-t');
submitT.addEventListener('click', submitTask);



