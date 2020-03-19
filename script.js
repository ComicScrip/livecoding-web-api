const canvas = document.getElementById('drawingZone');
const ctx = canvas.getContext('2d');
const backgroundColor = 'red';
const squareUpperLeftCoords = {
    x: 0,
    y: 0
}
const squareColor = 'black';
const squareSizeInPx = 100;
const stepInPx = 20;

function drawSquare(x, y, size = squareSizeInPx, color = squareColor) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, size, size);
}

function updateSquarePosition(dx, dy) {
    squareUpperLeftCoords.x += dx;
    squareUpperLeftCoords.y += dy;
}

function moveSquare(dx, dy) {
    // clear all the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // update the position and handle collisions
    updateSquarePosition(dx, dy);
    // redraw
    drawSquare(squareUpperLeftCoords.x, squareUpperLeftCoords.y);
}

function handleInput(event) {
    if (event.key === "ArrowUp") {
        moveSquare(0, -stepInPx);
    } else if (event.key === "ArrowDown") {
        moveSquare(0, stepInPx);
    } else if (event.key === "ArrowLeft") {
        moveSquare(-stepInPx, 0);
    } else if (event.key === "ArrowRight") {
        moveSquare(stepInPx, 0);
    }
}

function init() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    // draw initial rectangle
    drawSquare(squareUpperLeftCoords.x, squareUpperLeftCoords.y);
    // bind event handlers to arrow stokes
    document.addEventListener('keydown', handleInput)
}

init();



