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

function makeGrid(size=16) {
    grid.style.setProperty('--grid-rows', size);
    grid.style.setProperty('--grid-cols', size);

    for (let i = 0; i < (size * size); i++) {
        let cell = document.createElement('div');
        cell.classList.add('grid-item');
        //cell.style.backgroundColor = "white";
        cell.addEventListener('mouseover', draw);
        cell.addEventListener('mousedown', draw);
        grid.appendChild(cell)
    };
};

function draw(e) {
    if (e.type === 'mouseover' && !mouseDown) {
        return
    } else {
        e.target.style.backgroundColor = "black";
    }
}


makeGrid(); 

