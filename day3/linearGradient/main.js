// Get the canvas element
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

// draw top rectangle with grad
let grad = ctx.createLinearGradient(200, 30, 200, 250)
grad.addColorStop(0.3, 'lightblue')
grad.addColorStop(0.9, 'white')
ctx.fillStyle = grad
ctx.fillRect(30, 30, 340, 250)

// draw bottom rectangle with grad
let grad2 = ctx.createLinearGradient(200, 230, 200, 450)
grad2.addColorStop(0.3, 'lightgreen')
grad2.addColorStop(0.9, 'white')
ctx.fillStyle = grad2
ctx.fillRect(30, 230, 340, 400)

// create grad for lines
let grad3 = ctx.createLinearGradient(200, 150, 200, 300)
grad3.addColorStop(0.3, 'black')
grad3.addColorStop(0.9, 'lightgreen')

// draw lines
ctx.beginPath()
ctx.moveTo(100, 300)
ctx.lineTo(100, 150)
ctx.lineTo(300, 150)
ctx.lineTo(300, 300)
ctx.lineWidth = 3
ctx.strokeStyle = grad3
ctx.stroke()
