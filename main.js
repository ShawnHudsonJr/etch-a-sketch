const sketchpad = document.querySelector("#sketchpad");

let blockColor;
const random = ['red', 'blue', 'yellow', 'green', 'brown', 'black', 'orange', 'pink', 'purple', 'white'];

//Set To Colorful
function randomColor() {
    //Random number between 0 and 9
    let x = (Math.floor(Math.random() * 10));
    x = random[x];
    return x;
}

const colorful = document.querySelector('.colorful');
colorful.addEventListener('click', function () {
    blockColor = randomColor();
});

// Set To Monochrome
const monochrome = document.querySelector(".monochrome");
monochrome.addEventListener('click', function() {
    blockColor = 'black';
});

// Clear Sketchpad
const clear = document.querySelector(".clear");
clear.addEventListener('click', function() {
    blockColor = 'white';
});

//Size Selector
const size = document.querySelector(".size");
size.addEventListener('click', function() {

    //create grid
    let gridsize = prompt("Pick a Grid Size");
    let boxsize;

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
                newRow.style.backgroundColor = blockColor;
            });

        }
    }

});


