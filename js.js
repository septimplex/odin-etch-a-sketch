const grid = document.querySelector("#grid-container");



for(let i=0;i<2;i++){
    for(let j=0;j<2;j++){
        const box = document.createElement("div");
        box.classList = "box";
        grid.appendChild(box);
        
    }
}

grid.style.width = "960/2";
grid.style.height = "960/2";