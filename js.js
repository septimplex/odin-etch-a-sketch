const grid = document.querySelector("#grid-container");
const size = document.querySelector("#h3-size");

const input = document.querySelector("#input");

main(input.value);

input.addEventListener('input', function(){ 
    size.innerHTML = this.value + " x " + this.value;
    createGrid(this.value);
    main(this.value);
    
});


function main(mainSize){
    createGrid(mainSize);

    const divs = document.querySelectorAll(".box");
    const btn_black = document.querySelector("#black");
    const btn_random = document.querySelector("#random");
    const btn_shade = document.querySelector("#shade");
    const btn_reset = document.querySelector("#reset");


    btn_reset.addEventListener("click", resetGrid);

    btn_black.addEventListener("click", activateBlack);
    btn_random.addEventListener("click", activateRandom);
    btn_shade.addEventListener("click", activateShade);

    activateBlack();


    function activateRandom(){
        btn_black.classList = "button";
        btn_shade.classList = "button";
        btn_random.classList = "button active";

        for(let i=0;i<divs.length;i++){
            divs[i].addEventListener("mouseover",function(e){ 
                e.target.style.backgroundColor = getColor();  
                });
            }
        }

    function activateBlack(){
        btn_black.classList = "button active";
        btn_shade.classList = "button";
        btn_random.classList = "button";

        for(let i=0;i<divs.length;i++){
            divs[i].addEventListener("mouseover",function(e){ 
                e.target.style.backgroundColor = "black";  
                });
            }    
        }

    function activateShade(){
        btn_black.classList = "button";
        btn_shade.classList = "button active";
        btn_random.classList = "button";

        let counter = 0;
        for(let i=0;i<divs.length;i++){
            divs[i].addEventListener("mouseover",function(e){ 
            
            if(counter < 9){
                e.target.style.backgroundColor = shadeList[counter];
                counter++;
                }
            else{
                e.target.style.backgroundColor = shadeList[counter];
                counter = 0;
                }
            }); 
        }
    }

    function resetGrid(){
            for(let i=0;i<divs.length;i++){
                divs[i].style.backgroundColor = "hsl(347, 100%, 97%)";
            }
        }
        
        

    //find out shade
    let shadeList = ["hsl(0,0%,90%)","hsl(0,0%,80%)","hsl(0,0%,70%)",
                    "hsl(0,0%,60%)","hsl(0,0%,50%)","hsl(0,0%,40%)",
                    "hsl(0,0%,30%)","hsl(0,0%,20%)","hsl(0,0%,10%)",
                    "hsl(0,0%,0%)"];

    //list of random colors
    let colorList = ["#f23f27","#3bbbed","#FCB13B","#f2ec6f","#F990ED","#c184f0","#2dcf58"];

    function getColor(){
        return colorList[Math.floor(Math.random() * colorList.length)];
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

















