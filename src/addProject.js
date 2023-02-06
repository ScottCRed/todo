import './style.css';

export function addProject () {
    const addP = document.querySelector('.addProject');
    addP.classList.add('formAppear');

    console.log('it works bih')
}

export function submitProject () {
        event.preventDefault();
        const addP = document.querySelector('.addProject');
        addP.classList.remove('formAppear');
}