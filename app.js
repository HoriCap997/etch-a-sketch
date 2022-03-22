
const grid = document.getElementById("grid");

const defaultSize = 16;
let currentSize = defaultSize; 

function makeGrid(currentSize) {
    grid.style.setProperty('--gridRows', currentSize);
    grid.style.setProperty('--gridCols', currentSize);
    for (c = 0; c < (currentSize * currentSize); c++) {
        let cell = document.createElement("div"); 
        grid.appendChild(cell).className = "gridItem";
        cell.addEventListener("mouseover",changeColor);
        cell.addEventListener("mousedown",changeColor);
    };
  }; 

makeGrid(currentSize)

const defaultColor = '#333333';

let currentColor = defaultColor;
let mouseDown = false;  
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function changeColor(e){
    if (e.type === "mouseover" && !mouseDown) return; 
    e.target.style.backgroundColor = "currentColor";
}

const sizeValue = document.getElementById("sizeValue");
const sizeSlider = document.getElementById("sizeSlider");

sizeSlider.onmousemove = (e) => updateSizeText(e.target.value);
sizeSlider.onchange = (e) => updateGrid(e.target.value);

function updateGrid(newSize){
    updateSizeText(newSize);
    setCurrentSize(newSize);
    reloadGrid(newSize)
}

function setCurrentSize(newSize){
    let currentSize = newSize;
}
function updateSizeText(newSize){
    sizeValue.innerText= `${newSize} x ${newSize}`
}


function reloadGrid(newSize){
    grid.innerHTML=('') 
    makeGrid(newSize);
}