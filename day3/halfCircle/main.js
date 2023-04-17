// Get the canvas element
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

// Set up the variables
let x = canvas.width / 2;
let y = canvas.height / 2;
let radius = 100;
let count = 0;
let direction = true;

// Define the function to draw the half circle
function drawHalfCircle() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the half circle
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI, direction);
  ctx.fillStyle = 'yellow'
  ctx.fill()
  ctx.stroke();
  // toggle the direction flag
  if (direction) {
    direction = false
  } else {
    direction = true
  }
  count++
  // after 10 times of drawing each half
  if (count >= 20) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = 'yellow'
    ctx.fill()
    ctx.stroke();
    clearInterval(drawInterval);
  }
}
// draw the half circle every second
var drawInterval = setInterval(drawHalfCircle, 1000);
