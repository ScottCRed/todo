import './style.css';

export function testFunc () {
    const test = document.querySelector('#container');
    const testDiv = document.createElement('div');
    testDiv.classList.add('testDiv')
    testDiv.textContent = 'HI BIH'

    test.appendChild(testDiv);
    console.log('it works bih')
}