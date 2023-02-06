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

    const title = projectForm.projectTitle.value
    projects.push(title);
    console.log(title);
    console.log(projects);
}

export { addProject, submitProject }