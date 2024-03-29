import { pushTasks, renderTasks} from './addTask';
import './style.css';

let projects = [['Default Project']];
let project = [];
let projectIndex = 0;


function addProject () {
    const addP = document.querySelector('.addProject');
    addP.classList.add('formAppear');
    document.getElementById('projectForm').reset();
};

function submitProject () {
    event.preventDefault();
    const addP = document.querySelector('.addProject');
    addP.setAttribute('id', projectIndex)
    addP.classList.remove('formAppear');

    const taskContainer = document.querySelector('.taskContainer');
    taskContainer.innerHTML = ''; 

    let project = [projectForm.projectTitle.value]
    projects.push(project);

    projectIndex++;
    renderProjectHead();
    renderProjects();
};


function renderProjects (item) {
    const projectContainer = document.querySelector('.projectContainer');
    projectContainer.innerHTML = ''   

    for (let i = 0; i< projects.length; i++) {

        const projectItem = document.createElement('div');
        projectItem.setAttribute('id', i);
        projectItem.classList.add('projectItem');
        projectItem.textContent = projects[i][0];
        projectItem.addEventListener('click', pushTasks);
        projectItem.addEventListener('click', changeIndex);
        projectItem.addEventListener('click', renderProjectHead);
        projectItem.addEventListener('click', renderTasks);

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('remove');
        deleteButton.textContent = 'X';
        deleteButton.addEventListener('click', () => { 
            projects.splice(projects.indexOf(projects[i]),1);
            renderProjects();
          });

        projectItem.appendChild(deleteButton);
        projectContainer.appendChild(projectItem);
    };  
};

function changeIndex(event) {
    projectIndex = event.target.id;
    return projectIndex;
};

function renderProjectHead () {
    const projectHead = document.querySelector('.projectHead');
    projectHead.textContent = projects[projectIndex][0];
}

renderProjectHead();

renderProjects();

export { addProject, submitProject, projects, projectIndex}