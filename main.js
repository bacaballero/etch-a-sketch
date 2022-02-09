let numberOfDivs = 16;
let mouseDown = false;
let mouseUp = true;

const grid = document.querySelector('.grid');
document.body.onmousedown = () => {
    mouseDown = true;
    mouseUp = false;
};
document.body.onmouseup = () => {
    mouseUp = true;
    mouseDown = false;
};

function makeGrid(rows, cols) {
    grid.style.setProperty('--grid-rows', rows);
    grid.style.setProperty('--grid-cols', cols);
    for (let i = 0; i < (rows * cols); i++) {
        let cell = document.createElement('div');
        grid.appendChild(cell).className = 'grid-item';
    };
};

function draw() {
    const cells = document.querySelectorAll('.grid-item');
    cells.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            if (!mouseUp) {
                cell.style.backgroundColor = "black";
            };
        });
    });
    cells.forEach((cell) => {
        cell.addEventListener('click', () => {
            cell.style.backgroundColor = "black";
        })
    })
};

makeGrid(16, 16); 
draw();
