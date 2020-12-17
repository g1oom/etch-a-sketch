const container = document.querySelector('.container');

function createGrid(gridNumber) {
    for (let i = 1; i <= (gridNumber ** 2); i++) {
        let item = document.createElement('div');
        item.setAttribute('id', 'item');
        
        item.addEventListener('mouseover', () => item.classList.add('hover'));
        /*item.addEventListener('mouseout', () => item.classList.remove('hover'));*/
    
        container.appendChild(item);
    }
    container.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
}


createGrid(16);
const resetButton = document.createElement('button');
resetButton.classList.add('button');
container.appendChild(resetButton);