let container = document.getElementById("container");


function makeGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div"); 
        container.appendChild(cell).className = "gridItem";
    };
  }; 

makeGrid(16,16)
const gridItems= Array(document.querySelectorAll(".gridItem"));
console.log(gridItems)