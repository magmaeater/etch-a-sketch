let container = document.querySelector(".container");
let slider = document.getElementById('myRange');
let val = document.getElementById('value');
let b = document.getElementById("new_size");
let cls = document.getElementById("cls");
let rand = document.getElementById("random_mode");
let grid_size = slider.value*slider.value;
let random_mode = false;

//create grid according to slider input and clear the screen when cls is pressed

val.innerHTML = slider.value;

create_grid(grid_size, random_mode);

slider.oninput = function() {
    val.innerHTML = this.value;
    grid_size = this.value*this.value;
  }; 


b.addEventListener('click', () => {
    
    create_grid(grid_size, random_mode);
});

cls.addEventListener('click', () => {
    for(let p = 1; p <= grid_size; p++)
    {
        let clear_block  = document.getElementById(`${p+1}`);
        clear_block.style.backgroundColor = 'white';
    }
})

//random mode implementation where a random color gets drawn 

rand.addEventListener('click', () => {

    if(rand.textContent === 'Active!')
    {
        rand.textContent = 'Random Mode!';
        random_mode = false;
    }
    else
    {
        rand.textContent = 'Active!';
        random_mode = true;
    }
    create_grid(grid_size, random_mode);
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
function create_grid(grid_size, random_mode)
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
            if(random_mode === false)
            {
                block.style.backgroundColor = "black";
            }
            else
            {
                block.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
            }

        });
        block.addEventListener('mouseover', () => {
            if(mousedown === true)
            {
                if(random_mode === false)
                {        
                    block.style.backgroundColor = "black";
                }
                else
                {
                    block.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
                }

            }
        });


        container.appendChild(block);
    }
}



