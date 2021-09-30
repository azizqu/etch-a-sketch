console.log("Hello")

const container = document.querySelector('#container');

const childDiv = document.createElement('div');
childDiv.classList.add('childDiv');
childDiv.textContent = "Above is the Grid";

//make function createGrid(row, col) that loops to create a grid of divs

function createGrid(row, col){ //ex: createGrid(16, 16) 16x16 or 4x4
    container.style.setProperty('--grid-rows', row);
    container.style.setProperty('--grid-cols', col);
    for(i=0; i < (row * col);i++){
        let divs = document.createElement("div");
        divs.innerText = (i + 1);
        container.appendChild(divs).className ="grid-item" 
    }

}
createGrid(16,16);


//container.appendChild(childDiv);

//Div container (parent DIV) 
// let container = document.createElement('div');
// container.setAttribute('id', 'container');
// document.body.appendChild(container);

