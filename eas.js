let container = document.querySelector(".container");
let grid_size = 32*32;

let mousedown = false;

document.body.onmousedown = () => {
    mousedown = true;
    console.log(mousedown);
};
document.body.onmouseup = () => {
    mousedown = false;
    console.log(mousedown);
};

for(let i = 1; i <= grid_size; i++)
{
    let block = document.createElement('div');
    block.className = "block";
    block.textContent = "";
    block.id = `${i+1}`;

    block.addEventListener('mousedown', () => {
        block.style.backgroundColor = "black";
    });
    block.addEventListener('mouseover', () => {
        if(mousedown === true)
        {    
        block.style.backgroundColor = "black";
        }
    });


    container.appendChild(block);
}



