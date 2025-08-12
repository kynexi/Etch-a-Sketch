const container = document.querySelector(".container");
const gridValue = document.querySelector(".gridValue");
const gridInput = document.querySelector("#gridInp");
const rainbowToggle = document.querySelector(".rainbow");
const resetBtn = document.querySelector(".reset");

let rainbow = 0;
let gridSize = 16;

gridValue.innerHTML = gridInput.value;
gridInput.addEventListener("input", (event) => {
    gridValue.innerHTML = event.target.value;
    gridSize = gridValue.innerHTML;
    resetGrid(gridSize);
});

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
    if(!rainbow){ div.style.backgroundColor = `black`;}
    else{
        div.style.backgroundColor = `rgb(${randomColor()}, 
        ${randomColor()}, ${randomColor()})`;
    }
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

createGrid(gridSize);