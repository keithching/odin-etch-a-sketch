const container = document.querySelector('.container');

const DEFAULTGRID = 50;

createGrid(DEFAULTGRID);

const message = document.querySelector('p');
message.textContent = `Current Grid: ${DEFAULTGRID} x ${DEFAULTGRID}`;


function createGrid(size) {
    let gridX;
    let gridY;

    gridX = size;
    gridY = size;

    for (let i = 0; i < gridY; i++) {

        const rows = document.createElement('div');
        rows.setAttribute('class', 'rows');

        for (let j = 0; j < gridX; j++) {

            const grid = document.createElement('div');
            grid.setAttribute('class', 'grid');
            rows.appendChild(grid);
        }

        container.appendChild(rows);
    }    

    const message = document.querySelector('p');
    message.textContent = `Current Grid: ${size} x ${size}`;

    // create hover event
    const grids = document.querySelectorAll('.grid');
    grids.forEach(grid => grid.addEventListener('mouseover', createHoverEffect));

}

function createHoverEffect(e) {
    this.classList.add('hover');
}

function resetGrid() {

    const rows = document.querySelectorAll('.rows');
    rows.forEach(row => container.removeChild(row));

    let size;
    do {
        size = prompt('provide a size (100 max.)', 0);
    }
    while (size > 100);

    if (size == null) {
        container.style.visibility = 'hidden';
    }
    else {
        container.style.visibility = 'visible';
        // draw the grid
        createGrid(size);

    }
}


const button = document.querySelector('button');
button.addEventListener('click', resetGrid);