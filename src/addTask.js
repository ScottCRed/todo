export function addTask () {
    const addP = document.querySelector('.addTask');
    addP.classList.add('formAppear');
    
    console.log('task baby')
}

export function submitTask () {
        event.preventDefault();
        const addT = document.querySelector('.addTask');
        addT.classList.remove('formAppear');
}