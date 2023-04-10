var redRange = document.getElementsByTagName('input')[0]
var greenRange = document.getElementsByTagName('input')[1]
var blueRange = document.getElementsByTagName('input')[2]
var opacityRange = document.getElementsByTagName('input')[3]
var txt = document.getElementById('txt')
colorEvent(redRange)
colorEvent(greenRange)
colorEvent(blueRange)
colorEvent(opacityRange)
function colorEvent(rangeElement){
  rangeElement.addEventListener('input',function(){
    txt.style.cssText = "color:rgba("+redRange.value+","+greenRange.value+","+blueRange.value+","+opacityRange.value+")"
  })
}
