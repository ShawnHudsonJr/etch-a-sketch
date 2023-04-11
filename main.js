const sketchpad = document.querySelector("#sketchpad");
//Size Adjustment
const size = document.querySelector(".size");
size.addEventListener('click', function() {

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
        }

    }
/*
    let column = document.getElementsByClassName(".column");
    column.style.height = boxsize + "px";
    column.style.width = boxsize + "px";
    let row = document.getElementsByClassName(".row");
    row.style.height = boxsize + "px";
    row.style.width = boxsize + "px";
    */
});

// Set To Monochrome
const monochrome = document.querySelector(".monochrome");
monochrome.addEventListener('click', function() {

});

//Set To Colorful
const colorful = document.querySelector(".colorful");
colorful.addEventListener('click', function() {

});

// Clear Sketchpad
const clear = document.querySelector(".clear");
clear.addEventListener('click', function() {

});


