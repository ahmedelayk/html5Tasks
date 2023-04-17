// Get the canvas element
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

var img = new Image()
img.src = './child.jpg'

img.onload = function () {
  ctx.drawImage(img, 0, 0, 500, 350)
  ctx.font = "30px Arial";
  ctx.fillStyle = 'black';
  ctx.stroke()
  ctx.fillText("Hey, I am not real", 30, 300);
}
