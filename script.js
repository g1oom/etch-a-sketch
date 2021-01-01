const container = document.querySelector('.container');

function createGrid(gridNumber) {
    for (let i = 1; i <= (gridNumber ** 2); i++) {
        let item = document.createElement('div');
        item.setAttribute('class', 'item');
        
        item.addEventListener('mouseover', () => item.classList.add('hover'));
    
        container.appendChild(item);
    }
    container.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
}

function reset() {
    const items = document.querySelectorAll('.item');

    for (let i = 0; i < items.length; i++) {
        items[i].classList.remove('hover');
    }
}


createGrid(16);
const resetButton = document.createElement('button');
resetButton.classList.add('button');
resetButton.textContent = 'Reset';
container.appendChild(resetButton);

resetButton.onclick = function() {reset()};