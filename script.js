const container = document.querySelector(".container");
const newGridBtn = document.querySelector(".gridBtn");

function createGrid(x){
    const containerSize = 512; 
    const blockSize = containerSize / x;
    for (let i = 0; i < x * x; i++){
        const newDiv = document.createElement("div");
        newDiv.classList.add('blocks');
        newDiv.style.flexBasis = `${100 / x}%`;
        newDiv.style.height = `${blockSize}px`;
        newDiv.addEventListener("mouseover", () => {
            newDiv.classList.add('blackBgColor');
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