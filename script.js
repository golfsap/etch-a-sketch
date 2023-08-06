const container = document.querySelector(".container");
var gridSize = 16
var numOfSquares = gridSize**2;
var width = 500/gridSize;

for (let i=0; i<numOfSquares; i++) {
    var div = document.createElement("div");
    div.style.width = width+"px";
    div.style.height = width+"px";
    div.classList.add("grid");
    container.appendChild(div);
}