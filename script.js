// UI elements
const container = document.querySelector(".container");
const btn = document.querySelector(".btn");

btn.addEventListener('click', () => {
    do {
        var gridSize = prompt("Number of squares per side for new grid? (1-100)");
        if (gridSize === null) {
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
}

function addHoverColor() {
    const squares = document.querySelectorAll(".grid");
    squares.forEach(square => {
        square.addEventListener('mouseover', () => {
            square.classList.add("hover");
        })
    });
}

createGrid(16);



