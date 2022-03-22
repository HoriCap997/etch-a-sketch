const defaultSize = 16;
const defaultColor = '#333333';
const defaultMode = 'color'

let currentSize = defaultSize; 
let currentColor = defaultColor;
let currentMode = defaultMode;

function setCurrentColor(newColor){
     currentColor = newColor;
}

function setCurrentMode(newMode){
    activateButton(newMode);
    currentMode = newMode;
}

function setCurrentSize(newSize){
     currentSize = newSize;
}

const colorPicker = document.getElementById("colorPicker")
const colorBtn = document.getElementById("colorBtn");
const rainbowBtn = document.getElementById("rainbowBtn");
const eraserBtn = document.getElementById("eraserBtn");
const resetBtn = document.getElementById("resetBtn");
const sizeValue = document.getElementById("sizeValue");
const sizeSlider = document.getElementById("sizeSlider");
const grid = document.getElementById("grid");

colorPicker.onchange=(e)=>setCurrentColor(e.target.value);
colorBtn.onclick=()=>setCurrentMode('color');
rainbowBtn.onclick=()=>setCurrentMode('rainbow');
eraserBtn.onclick=()=>setCurrentMode('eraser');
resetBtn.onclick=()=>reloadGrid();
sizeSlider.onmousemove = (e) => updateSizeText(e.target.value);
sizeSlider.onchange = (e) => updateGrid(e.target.value);

let mouseDown = false;  
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function makeGrid(currentSize) { 
    grid.style.gridTemplateRows=`repeat(${currentSize}, 1fr)` ;
    grid.style.gridTemplateColumns= `repeat(${currentSize}, 1fr)`;
    for (c = 0; c < (currentSize * currentSize); c++) {
        let cell = document.createElement("div"); 
        cell.addEventListener("mouseover",changeColor);
        cell.addEventListener("mousedown",changeColor);
        grid.appendChild(cell).classList.add("gridItem");
    };
  }; 

function updateGrid(currentSize){
    updateSizeText(currentSize);
    setCurrentSize(currentSize);
    reloadGrid(currentSize)
}

function updateSizeText(currentSize){
    sizeValue.innerText= `${currentSize} x ${currentSize}`
}

function reloadGrid(){
    grid.innerHTML=('') 
    makeGrid(currentSize);
}

function changeColor(e){
    if (e.type === "mouseover" && !mouseDown) return; 
    if (currentMode==="color"){  
        e.target.style.backgroundColor = currentColor;
    }
    else if (currentMode === "rainbow"){ 
        const R = ~~(Math.random() * 256);
        const G = ~~(Math.random() * 256);
        const B = ~~(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${R},${G},${B})`;
    }
    else if (currentMode === "eraser"){  
        e.target.style.backgroundColor = '#fefefe'
    }
}

function activateButton(newMode){
    if (currentMode === "color"){
        colorBtn.classList.remove("active");
    }
    else if (currentMode === "rainbow"){
        rainbowBtn.classList.remove("active");
    }
    else if (currentMode === "eraser"){
        eraserBtn.classList.remove("active");
    }


    if (newMode === "color"){
        colorBtn.classList.add("active");
    }
    else if (newMode === "rainbow"){
        rainbowBtn.classList.add("active");
    }
    else if (newMode === "eraser"){
        eraserBtn.classList.add("active");
    }
}

window.onload=()=>{
    makeGrid(defaultSize);
    activateButton(defaultMode);
}