import './style.css';

let projects = [];


function addProject () {
    const addP = document.querySelector('.addProject');
    addP.classList.add('formAppear');
    document.getElementById('projectForm').reset();
}

function submitProject () {
    event.preventDefault();
    const addP = document.querySelector('.addProject');
    addP.classList.remove('formAppear');

    const title = projectForm.projectTitle.value;
    projects.push(title);

    renderProjects();
}

function renderProjects () {
    const projectContainer = document.querySelector('.projectContainer');
    projectContainer.innerHTML = ''   

    for (let i = 0; i< projects.length; i++) {

        const projectContainer = document.querySelector('.projectContainer');
        const projectItem = document.createElement('div');
        projectItem.setAttribute('id', projects.indexOf(i));
        projectItem.classList.add('projectItem');
        projectItem.textContent = projects[i];

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('remove');
        deleteButton.textContent = 'X';

        projectItem.appendChild(deleteButton)
        projectContainer.appendChild(projectItem)
        }
}

export { addProject, submitProject }