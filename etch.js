
// Mat Kus - part of The Odin Project learing.

const top_container = document.getElementById('top');

//title
heading = document.createElement('h1');
heading.textContent = "Etch a sketch!";
top_container.append(heading);

//buttons
const clear_button = document.createElement('button');
clear_button.textContent = 'Clear';
clear_button.addEventListener('click', () => clearBoard())
top_container.append(clear_button);

const grid_button = document.createElement('button');
grid_button.textContent = 'Change grid size';
grid_button.addEventListener('click', () => setGridSize())
top_container.append(grid_button);

top_container.append(document.createElement('p'));

const main_content = document.getElementById('content');

const footerInfo = document.getElementById('footer');
footerInfo.append(document.createElement('p'));
let note = document.createElement('h5');
note.textContent = `Created by Mat Kus ${new Date().getFullYear()}`;
footerInfo.append(note);
    



let gridSize=30;

//creating grid of certain size

createGrid(gridSize);

function createGrid(size){

    for (let i=0; i<size; i++){
        
        let DivRow = document.createElement('div');
        DivRow.id = 'r';
        DivRow.className = 'divRow';
        main_content.append(DivRow);    

        for (let j=0; j<size;j++){
        
            let DivCol = document.createElement('div');
            
            DivCol.id = 'c';
            DivCol.className = 'divCol';
            //this line was for changing the color by changing class and was replaced by rainbow patter below.
            
            let a = Math.random()*255;
            let b = Math.random()*255;
            let c = Math.random()*255;
            DivCol.addEventListener('mouseover', ()=> DivCol.style.background = `rgb(${a},${b},${c})`);
            DivRow.append(DivCol);
        }
        
    }
}

//clearing board by removing old one and generating new one of the same size.

function clearBoard(){


      let boardCells = document.querySelectorAll('#r')
    
      for (let i = 0; i < boardCells.length; i++) {
          boardCells[i].remove();
          
        }
        createGrid(boardCells.length);
    
}

//changing grid size. 
function setGridSize(size){
    let boardCells = document.querySelectorAll('#r')
    
    for (let i = 0; i < boardCells.length; i++) {
        boardCells[i].remove();
        
      }
    gridSize = 101;
    while (gridSize > 100){

        gridSize = prompt('Enter the grid size of value <100');

    }
    createGrid(gridSize);
}

