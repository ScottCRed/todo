import './style.css';

export function addProject () {
    const addP = document.querySelector('.addProject');
    addP.classList.add('formAppear');
    submit();
    console.log('it works bih')
}

function submit () {
    const submit = document.querySelector('.submit-button');
    submit.addEventListener('click', () =>{
        event.preventDefault();
        const addP = document.querySelector('.addProject');
        addP.classList.remove('formAppear');
    })
}