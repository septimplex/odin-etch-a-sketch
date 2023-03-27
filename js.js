const grid = document.querySelector("#grid-container");
const size = document.querySelector("#h3-size");


const input = document.querySelector("#input");
input.addEventListener('input', function(){ 
        size.innerHTML = this.value + " x " + this.value;

     });


createGrid(input.value);

const btn_black = document.querySelector("#black");
const divs = document.querySelectorAll(".box");
const btn_reset = document.querySelector("#reset");

btn_reset.addEventListener("click", resetGrid);

for(let i=0;i<divs.length;i++){
    divs[i].addEventListener("mouseover",function(e){ 
        e.target.classList = "box toBlack";  
    });
}

function resetGrid(){
    for(let i=0;i<divs.length;i++){
        divs[i].classList = "box";
    }
}




function createGrid(x){
    grid.innerHTML = "";
    for(let i=0;i<x;i++){
        for(let j=0;j<x;j++){
            const box = document.createElement("div");
            box.classList = "box";
            grid.appendChild(box);       
        }  
    }
    
    
    const gridSize = 550/x + "px";
    const boxSize = document.querySelectorAll(".box");
    for(let i=0;i<boxSize.length;i++){
            boxSize[i].style.width = gridSize;
            boxSize[i].style.height = gridSize;
    } 
    
}











