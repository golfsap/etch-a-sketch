// UI elements
const container = document.querySelector(".container");
const btn = document.querySelector(".btn");

btn.addEventListener('click', () => {
    do {
        var gridSize = prompt("Number of squares per side for new grid? (1-100)");
        if (gridSize === null) { /* If user cancels prompt */
            return;
        }
    } while (isNaN(gridSize) || gridSize > 100 || gridSize < 1);
    createGrid(gridSize);
});

function createGrid(gridSize) {
    container.replaceChildren(); /* Clear existing grid */
    const numOfSquares = gridSize**2;
    const widthOfSquare = 600/gridSize;

    for (let i=0; i<numOfSquares; i++) {
        let div = document.createElement("div");
        div.style.width = widthOfSquare+"px";
        div.style.height = widthOfSquare+"px";
        div.classList.add("grid");
        container.appendChild(div);
    }

    addHoverColor();
    addDarkeningEffect();
    //addRandomColor();
}

function addHoverColor() {
    const squares = document.querySelectorAll(".grid");
    squares.forEach(square => {
        square.addEventListener('mouseover', () => {
            square.classList.add("hover");
        })
    });
}

function addRandomColor() {
    const squares = document.querySelectorAll(".grid");
    squares.forEach(square => {
        square.addEventListener('mouseover', () => {
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            square.style.backgroundColor = "#" + randomColor;
        })
    });
}

function addDarkeningEffect() {
    const squares = document.querySelectorAll(".grid");
    var brightnessPercent = 100;
    squares.forEach(square => {
        square.addEventListener('mouseover', () => {
            console.log(brightnessPercent);
            square.style.filter = "brightness(" + brightnessPercent + "%)";
            if (brightnessPercent > 0) {
                brightnessPercent-= 10;
            }      
        })
    });
}

createGrid(16);




