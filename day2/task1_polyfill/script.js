
conditionizr.add("noWebStorage", function () {
  return !window.webstorage;
});

conditionizr.polyfill("./cookies_library.js", ["noWebStorage"]);

setTimeout(function(){
  var c = new Cookies()
  c.setCookie('name','elayek')
  c.setCookie('age','24')
  console.log(c.getAllcookies())
},1000)


// conditionizr.on('noWebStorage',function(){

// })