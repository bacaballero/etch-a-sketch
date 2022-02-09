let numberOfDivs = 16;

const grid = document.querySelector('.grid');

function makeGrid(rows, cols) {
    grid.style.setProperty('--grid-rows', rows);
    grid.style.setProperty('--grid-cols', cols);
    for (let i = 0; i < (rows * cols); i++) {
        let cell = document.createElement('div');
        grid.appendChild(cell).className = 'grid-item';
    };
};

makeGrid(16, 16); 