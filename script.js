const canvas = document.getElementById('drawingZone');
const ctx = canvas.getContext('2d');
const squareUpperLeftCoords = {
    x: 0,
    y: 0
}
const squareColor = '#ff898c';
const squareSizeInPx = 100;
const stepInPx = 20;
const dotRadiusInPx = 5;
const dotColor = 'white'
let drawingDot = false;

function drawSquare(x, y, size = squareSizeInPx, color = squareColor) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, size, size);
}

function drawCircle(x, y, color = dotColor, radius = dotRadiusInPx) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}

function updateSquarePosition(dx, dy) {
    squareUpperLeftCoords.x += dx;
    squareUpperLeftCoords.y += dy;
}

function moveSquare(dx, dy) {
    // clear the previous square
    ctx.clearRect(squareUpperLeftCoords.x, squareUpperLeftCoords.y, squareSizeInPx, squareSizeInPx);
    // update the position and handle collisions
    updateSquarePosition(dx, dy);
    // redraw
    drawSquare(squareUpperLeftCoords.x, squareUpperLeftCoords.y);
}

function handleKeydown(event) {
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

function handleMouseMove(event) {
    if (drawingDot) {
        drawCircle(event.clientX, event.clientY);
    }
}

function handleMouseDown() {
    drawingDot = true;
}

function handleMouseUp() {
    drawingDot = false;
}

function init() {
    // make the canvas fill the whole page
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    // draw initial rectangle
    drawSquare(squareUpperLeftCoords.x, squareUpperLeftCoords.y);
    // bind event handlers to arrow stokes
    document.addEventListener('keydown', handleKeydown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
}

init();



