const container = document.querySelector(".container");

const gridSize = 16
const numOfSquares = gridSize**2;
const widthOfSquare = 600/gridSize;

// Create grid
for (let i=0; i<numOfSquares; i++) {
    let div = document.createElement("div");
    div.style.width = widthOfSquare+"px";
    div.style.height = widthOfSquare+"px";
    div.classList.add("grid");
    container.appendChild(div);
}

// Add hover effect
const squares = document.querySelectorAll(".grid");
squares.forEach(square => {
    square.addEventListener('mouseover', () => {
        square.classList.add("hover");
    })
});

