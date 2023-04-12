let blockColor = 'black';
let boxsize;
let gridsize = 50;
let rainbowStatus = false;
const sketchpad = document.querySelector("#sketchpad");
const random = ['red', 'blue', 'yellow', 'green', 'brown', 'black', 'orange', 'pink', 'purple', 'white'];

function clearBoard() {
    const clear = document.getElementById('sketchpad');
    
    while (clear.hasChildNodes()) {
        clear.removeChild(clear.firstChild);
    }
}

//Size Selector
const size = document.querySelector(".size");
size.addEventListener('click', function() {
    clearBoard();
    gridsize = prompt("Choose a Grid Size")
    mainLoop(blockColor);
}); 

//Clear Board
const clear = document.querySelector('.clear');
clear.addEventListener('click', function() {
    clearBoard();
    mainLoop(blockColor);
});

mainLoop(blockColor);

    function mainLoop(blockColor) {

            for (i = 0; i < gridsize; i++) {
                boxsize = ((800 / gridsize) - 2);
                const sketchpad = document.querySelector("#sketchpad");
                let newColumn = document.createElement("div");
                newColumn.className = "column";
                sketchpad.appendChild(newColumn)
                for (y = 0; y < gridsize; y++) {
                    let newRow = document.createElement("div");
                    newRow.className = "row";
                    newColumn.appendChild(newRow);

                    //Hover Effect
                    newRow.addEventListener('mouseover', function() {
                        if (rainbowStatus) {
                            blockColor = randomColor();
                        }
                        newRow.style.backgroundColor = blockColor;
                    })

                }
            }  
            
                //Set to Colorful
                function randomColor() {
                    //Random number between 0 and 9
                    let x = (Math.floor(Math.random() * 10));
                    x = random[x];
                    return x;
                }
                const colorful = document.querySelector('.colorful');
                colorful.addEventListener('click', function () {
                    rainbowStatus = true;
                });

                // Set To Monochrome
                const monochrome = document.querySelector(".monochrome");
                monochrome.addEventListener('click', function() {
                    blockColor = 'black';
                    rainbowStatus = false;
                });

                // Set To Eraser
                const eraser = document.querySelector(".eraser");
                eraser.addEventListener('click', function() {
                    rainbowStatus = false;
                    blockColor = 'white';
                });
    }


