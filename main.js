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
const clearBtn = document.querySelector("#clear");
clearBtn.onclick = () => reloadGrid();

function reloadGrid() {
    clearGrid();
    makeGrid();
}

function clearGrid() {
    grid.innerHTML = '';
}

function makeGrid(rows=16, cols=16) {
    grid.style.setProperty('--grid-rows', rows);
    grid.style.setProperty('--grid-cols', cols);
    for (let i = 0; i < (rows * cols); i++) {
        let cell = document.createElement('div');
        grid.appendChild(cell).className = 'grid-item';
        cell.style.backgroundColor = "white";
        cell.addEventListener('mouseover', () => {
            if (!mouseUp) {
                cell.style.backgroundColor = "black";
            };
        });
        cell.addEventListener('click', () => {
            cell.style.backgroundColor = "black";
        });
    };
};


makeGrid(); 

