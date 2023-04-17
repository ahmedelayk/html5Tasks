// Get the canvas element
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

// Variables
let x = canvas.width / 2
let y = canvas.height / 2


let grad = ctx.createLinearGradient(30, 30, 300, 300)
grad.addColorStop(0.3, 'blue')
grad.addColorStop(0.9, 'white')


let grad2 = ctx.createRadialGradient(x, y, 10, x, y, 250)
grad2.addColorStop(0.6, 'blue')
grad2.addColorStop(0.4, 'white')


ctx.beginPath();
ctx.arc(x, y, 150, 0, 2 * Math.PI);
ctx.fillStyle = grad2
ctx.fill()

ctx.beginPath();
ctx.arc(x, y, 110, 0, 2 * Math.PI);
ctx.fillStyle = grad
ctx.fill()

ctx.font = "200px Arial";
ctx.fillStyle = '#FFF';
ctx.textAlign = "center";
ctx.fillText("A", x, y + 60);