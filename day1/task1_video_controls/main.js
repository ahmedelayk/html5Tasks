

var video_ = document.getElementsByTagName('video')[0]
var playbackRange = document.getElementById('playback')
var videoCurrentTime = document.getElementById('video-current-time')
var videoDuration = document.getElementById('video-duration')
var playBtn = document.querySelectorAll('input[type = "button"]')[0]
var stopBtn = document.querySelectorAll('input[type = "button"]')[1]
var back5sBtn = document.querySelectorAll('input[type = "button"]')[2]
var backToFirstBtn = document.querySelectorAll('input[type = "button"]')[3]
var forwardToLastBtn = document.querySelectorAll('input[type = "button"]')[4]
var forward5sBtn = document.querySelectorAll('input[type = "button"]')[5]
var muteBtn = document.querySelectorAll('input[type = "button"]')[6]
var volumeRange = document.getElementById('volume')
var speedRange = document.getElementById('speed')


playBtn.addEventListener('click',function(){
  video_.play()
})
stopBtn.addEventListener('click',function(){
  video_.pause()
})
muteBtn.addEventListener('click',function(){
  video_.volume = 0
  volumeRange.value = 0
})

back5sBtn.addEventListener('click',function(){
  video_.currentTime -= 5
})
forward5sBtn.addEventListener('click',function(){
  video_.currentTime += 5
})
forwardToLastBtn.addEventListener('click',function(){
  video_.currentTime = video_.duration
})
backToFirstBtn.addEventListener('click',function(){
  video_.currentTime = 0
})
volume.addEventListener('input',function(){
  video_.volume = this.value
  console.log(this.value)
})
speedRange.addEventListener('input',function(){
  video_.playbackRate = this.value
  console.log(this.value)
})
video_.addEventListener('loadeddata', function(){
  playbackRange.setAttribute('max', Number(video_.duration))
  videoDuration.innerHTML = Math.trunc(Number(video_.duration))
})
playbackRange.addEventListener('input',function(){
  video_.currentTime = this.value
  console.log(this.value)
})
video_.addEventListener('timeupdate',function(){
  // console.log(video_.currentTime)
  playbackRange.value = this.currentTime
  videoCurrentTime.innerHTML = Math.trunc((this.currentTime))
})
