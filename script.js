const container = document.querySelector(".container");
const newGridBtn = document.querySelector(".gridBtn");
const rainbowToggle = document.querySelector(".rainbow");
let rainbow = 0;
rainbowToggle.addEventListener("click", () => {
    if (rainbow == 0){ rainbow = 1}
    else {rainbow  = 0};
});

function randomColor(){
    return Math.floor(Math.random() * 256);
}

function colorGrid(div){
    if(rainbow == 0 ){
        div.classList.add('blackBgColor');
        return;
    }
    div.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`
}

function createGrid(x){
    const containerSize = 512; 
    const blockSize = containerSize / x;
    for (let i = 0; i < x * x; i++){
        const newDiv = document.createElement("div");
        newDiv.classList.add('blocks');
        newDiv.style.flexBasis = `${100 / x}%`;
        newDiv.style.height = `${blockSize}px`;
        newDiv.addEventListener("mouseover", () => {
            colorGrid(newDiv);
        });
        container.appendChild(newDiv);
    }
}

function removeGrid(){
    let child = container.lastElementChild;
    while(child){
        container.removeChild(child);
        child = container.lastElementChild;
    }
}

function promptGrid(){
    let size = prompt("Pick the size of the new grid: ");
    if(size > 100 || size < 0){
        promptGrid();
        return;
    }
    removeGrid();
    createGrid(size);
}

createGrid(32);