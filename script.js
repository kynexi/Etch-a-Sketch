const container = document.querySelector(".container");
const newGridBtn = document.querySelector(".gridBtn");
const rainbowToggle = document.querySelector(".rainbow");
const resetBtn = document.querySelector(".reset");

let rainbow = 0;
let gridSize = 16;

rainbowToggle.addEventListener("click", () => {
    if (rainbow == 0){ rainbow = 1}
    else {rainbow  = 0};
});

resetBtn.addEventListener("click", () => {
    resetGrid();
});


function randomColor(){
    return Math.floor(Math.random() * 256);
}

function colorGrid(div){
    if(rainbow == 0 ){
        div.classList.add('blackBgColor');
        return;
    }
    div.style.backgroundColor = `rgb(${randomColor()}, 
    ${randomColor()}, ${randomColor()})`;
}

function createGrid(x){
    const containerSize = 1024; 
    const blockSize = containerSize / x;
    for (let i = 0; i < x * x; i++){
        const newDiv = document.createElement("div");
        newDiv.classList.add('blocks');
        newDiv.style.flexBasis = `${100 / x}%`;
        newDiv.style.height = `${blockSize}px`;
        newDiv.addEventListener("mouseover", () => {
            let currentOpacity = parseFloat(newDiv.style.opacity) || 0;
            currentOpacity = Math.min(currentOpacity + 0.1, 1);
            newDiv.style.opacity = currentOpacity;
            colorGrid(newDiv);
        });
        container.appendChild(newDiv);
    }
}

function resetGrid(){
    let child = container.lastElementChild;
    while(child){
        container.removeChild(child);
        child = container.lastElementChild;
    }
    createGrid(gridSize);
}

function promptGrid(){
    gridSize = prompt("Pick the size of the new grid: ");
    if(gridSize > 100 || gridSize < 0){
        promptGrid();
        return;
    }
    resetGrid();
}

createGrid(gridSize);