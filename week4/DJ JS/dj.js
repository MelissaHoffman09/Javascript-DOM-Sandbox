// Header
var header = document.createElement('h1');
header.textContent = 'DJ JS';
header.style.fontSize = '80px';
header.style.textAlign = 'center';
document.body.append(header);

// Square
var square = document.createElement('div');
square.style.backgroundColor = 'black';
square.style.width = '350px';
square.style.height = '350px';
square.style.margin = '200px auto'
document.body.append(square);

// Event Listeners - Mouse

//Blue when the mouse hovers over the square
square.addEventListener('mouseover', function(){
    square.style.background = 'blue';
});

//Red when the mouse button is held down over the square
square.addEventListener('mousedown', function(){
    square.style.background = 'red';
});

//Yellow when the mouse button is let go over the square
square.addEventListener('mouseup', function(){
    square.style.background = 'yellow';
});

//Green when the mouse is double clicked in the square
square.addEventListener('dblclick', function(){
    square.style.background = 'green';
});

//Orange when the mouse scroll is used somewhere in the window
document.addEventListener('wheel', function(){
    square.style.background = 'orange';
});

// Event listeners - Keys

document.addEventListener("keydown", function(press){
    var i = press.key;
    if (i === "b" || i === "B") {
        square.style.background = "blue";
    }
});

document.addEventListener("keydown", function(press) {
    var i = press.key;
    if (i === "r" || i === "R") {
        square.style.background = "red";
    }
});

document.addEventListener("keydown", function(press) {
    var i = press.key;
    if (i === "y" || i === "Y") {
        square.style.background = "yellow";
    }
});

document.addEventListener("keydown", function(press) {
    var i = press.key;
    if (i === "g" || i === "G") {
        square.style.background = "green";
    }
});

document.addEventListener("keydown", function(press) {
    var i = press.key;
    if (i === "o" || i === "O") {
        square.style.background = "orange";
    }
});