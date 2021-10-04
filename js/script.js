console.log("Hello")

const container = document.querySelector('#container');
 
const body = document.querySelector('#bod')


const btnClear = document.createElement('button')
btnClear.setAttribute('id', 'reset');
btnClear.textContent = "RESET"

const newGridbtn = document.createElement('button')
newGridbtn.setAttribute('id','newGrid');
newGridbtn.textContent = "Enter New Grid params"


body.insertBefore(newGridbtn, container);
body.insertBefore(btnClear, container);



//make function createGrid(row, col) that loops to create a grid of divs

function createGrid(){ //ex: createGrid(16, 16) 16x16 or 4x4
    
    const prevGridI= document.getElementsByClassName("grid-item")
    const arrayGrid = Array.from(prevGridI);
    console.log(arrayGrid)
    console.log(arrayGrid.length)
    
    if(arrayGrid.length > 0){ //clears previous div 
        for(i=0; i<arrayGrid.length; i++){
            container.removeChild(arrayGrid[i]);
    }

    }
    
    const row = prompt("Enter new row value: ")
    const col = prompt("Enter new col value: ")
    
    try {
        if(row > 100 || col > 100) throw "Too large"
        if(isNaN(row) || isNaN(col)) throw "Not a number"
        if(row <0 || col <0) throw "Too small";
        
    } catch (error) {
        alert("Error "+error);
        return error;
    }

        container.style.setProperty('--grid-rows', row);        
        container.style.setProperty('--grid-cols', col);
        for(i=0; i < (row * col);i++){
            let divs = document.createElement("div");
            //divs.innerText = (i + 1);
            container.appendChild(divs).className ="grid-item" 
    }

    document.getElementById('gridInfo').innerHTML = "Grid Size: "+row+" X "+col

    
    
    
}   
createGrid();

//New grid button 

const listenerBtn = document.getElementById('newGrid').addEventListener("click", function(){
    const prevGridI= document.getElementsByClassName("grid-item")
    const arrayGrid = Array.from(prevGridI);
    console.log(arrayGrid)
    createGrid();

    let divHover = document.getElementsByClassName("grid-item")

for(i=0; i<divHover.length; i++) {
    divHover[i].addEventListener('mouseover', function(e){
        e.target.style.backgroundColor ='red';
        setTimeout(function(){
            document.getElementById("reset").addEventListener("click", function(){
                e.target.style.backgroundColor= "grey";
            })
        }, 500)
    }, false)
}
   
})

let divHover = document.getElementsByClassName("grid-item")

for(i=0; i<divHover.length; i++) {
    divHover[i].addEventListener('mouseover', function(e){
        e.target.style.backgroundColor ='red';
        setTimeout(function(){
            document.getElementById("reset").addEventListener("click", function(){
                e.target.style.backgroundColor= "grey";
            })
        }, 500)
    }, false)
}






