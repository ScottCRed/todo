import './style.css';

let projects = [];


function addProject () {
    const addP = document.querySelector('.addProject');
    addP.classList.add('formAppear');
    document.getElementById('projectForm').reset();
    console.log('it works bih')
}

function submitProject () {
    event.preventDefault();
    const addP = document.querySelector('.addProject');
    addP.classList.remove('formAppear');

    const title = projectForm.projectTitle.value;
    projects.push(title);
    console.log(title);
    console.log(projects);

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
        
    
        projectContainer.appendChild(projectItem)
        }
}

export { addProject, submitProject }