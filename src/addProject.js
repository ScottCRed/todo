import { renderTasks, tasks } from './addTask';
import './style.css';

let projects = [['Default Project']];
let project = [];
let projectIndex = 0;

// class Project {
//     constructor(projectTitle, taskArray) {
//         this.projectTitle = projectForm.projectTitle.value;
//         this.taskArray = tasks;
//     }
// }

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

    //const title = [projectForm.projectTitle.value];
    //const newProject = new Project(this.projectTitle, this.taskArray);
    project.push(projectForm.projectTitle.value, tasks);
    projects.push(project);
    project = [];
    console.log(projects);

    projectIndex++;
    renderProjects();
       
};

function projectDisplay (e, title) {
    //project.push([title, tasks]);
    //projects.push(project);

    projects.push(projectIndex);
    console.log(projects);

    //let renderIndex = projects.indexOf(e);
    //renderTasks(renderIndex[1]);
}

function renderProjects (item) {
    const projectContainer = document.querySelector('.projectContainer');
    projectContainer.innerHTML = ''   

    for (let i = 0; i< projects.length; i++) {

        const projectItem = document.createElement('div');
        projectItem.setAttribute('id', i);
        projectItem.classList.add('projectItem');
        projectItem.textContent = projects[i][0];
        projectItem.addEventListener('click', changeIndex);
        projectItem.addEventListener('click', projectHead);

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
    console.log(projectIndex);
    console.log(projects);
    return projectIndex;
};

function projectHead () {
    const projectHead = document.querySelector('.projectHead');
    projectHead.textContent = projects[projectIndex][0];
}

projectHead();

renderProjects()


export { addProject, submitProject, projects, projectIndex, projectDisplay }