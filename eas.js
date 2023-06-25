let container = document.querySelector(".container");
let slider = document.getElementById('myRange');
let val = document.getElementById('value');
let b = document.getElementById("new_size");
let grid_size = slider.value*slider.value;

//create grid according to slider input

val.innerHTML = slider.value;

create_grid(grid_size);

slider.oninput = function() {
    val.innerHTML = this.value;
    grid_size = this.value*this.value;
  }; 


b.addEventListener('click', () => {
    
    create_grid(grid_size);
});


//setup so drawing only occurs when mouse is being held or clicked

let mousedown = false;

container.onmousedown = () => {
    mousedown = true;
    console.log(mousedown);
};

container.onmouseup = () => {
    mousedown = false;
    console.log(mousedown);
};

//create grid and take input function
function create_grid(grid_size)
{

    container.replaceChildren();

    container.style.gridTemplateColumns = `repeat(${Math.sqrt(grid_size)}, auto)`;
    container.style.gridTemplateRows = `repeat(${Math.sqrt(grid_size)}, auto)`;

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
}



