export function addTask () {
    const addP = document.querySelector('.addTask');
    addP.classList.add('formAppear');
    submit()
    console.log('task baby')
}

function submit () {
    const submit = document.querySelector('.submit-button');
    submit.addEventListener('click', () =>{
        event.preventDefault();
        const addP = document.querySelector('.addTask');
        addP.classList.remove('formAppear');
    })
}