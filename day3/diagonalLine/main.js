// Get the canvas element
let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

// Set up the variables
let x = 0, y = 0

// draw line and alert when it's done
let lineInt = setInterval(() => {
  ctx.beginPath()
  ctx.lineTo(x++, y++)
  ctx.lineTo(x, y)
  ctx.lineWidth = 5
  ctx.stroke()
  if (x === 400) {
    clearInterval(lineInt)
    alert('animation end')
  }
}, 10)