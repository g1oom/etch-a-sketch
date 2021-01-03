function createGrid(gridNumber) {
    for (let i = 1; i <= (gridNumber ** 2); i++) {
        let item = document.createElement('div');
        item.setAttribute('class', 'item');
        item.addEventListener('mouseover', function(){changeColour(item)}, false);
        container.appendChild(item);
    }
    container.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
}

function resetNewGrid() {
    /* prompt */
    let newGridNumber = prompt("Enter number of squares per side (1~100): ");
    while (isNaN(parseInt(newGridNumber)) || !Number.isInteger(parseFloat(newGridNumber)) || 
    parseInt(newGridNumber) < 1 || parseInt(newGridNumber) > 100) {
        newGridNumber = prompt("Enter number of squares per side (1~100): ", "1~100");
    }
    newGridNumber = parseInt(newGridNumber);

    /* remove old grid */
    const items = document.querySelectorAll('.item');
    items.forEach(e => e.remove());

    /* create new grid */
    createGrid(newGridNumber);
}

function changeColour(item) {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    item.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

    const currentBrightness =  parseFloat(window.getComputedStyle(item).getPropertyValue('filter').match(/\d/g).join('.'));
    let newBrightness = currentBrightness;
    if (currentBrightness > 0) {
        newBrightness = currentBrightness - 0.1;
    }
    item.style.filter = `brightness(${newBrightness})`;
}

const container = document.querySelector('.container');
const body = document.body;

createGrid(16);

const resetButton = document.createElement('button');
resetButton.classList.add('button');
resetButton.textContent = 'Reset';
body.insertBefore(resetButton, container);

resetButton.addEventListener('click', resetNewGrid, false);