// library of cookies
// setCookie
// getAllcookies
// getcookie
// hasCookie
// deleteCookie

console.log('Cookies library is ready');

function Cookies(){
  return{
    setCookie:function (cookieKey,cookieValue,expires){
      if(arguments.length < 2 || arguments.length > 3)
        throw new Error('this function accepts only two or three parameters [cookie key] and [cookie value] and can accept [expire date] as the third parameter')
      if(expires == undefined){
        document.cookie = cookieKey+"="+cookieValue
      }
      else{
        var date = expires
        date.setMonth(date.getMonth()+1)
        document.cookie = cookieKey+"="+cookieValue+";expires="+date.toUTCString()
      }
    },
    
    getAllcookies:function (){
      if(arguments.length > 0)
        throw new Error('you cannot passing parameter to this function')
      var arr=document.cookie.split('; ')
      var data = []
      for(var i=0;i<arr.length;i++){
        data[arr[i].split('=')[0]]=arr[i].split('=')[1]
      }
      return data
    },
    
    getCookie:function (cookieKey){
      if(arguments.length !== 1)
        throw new Error('this function can accepts only one parameter [cookie key]')
      var data = getAllcookies()
      if(data[cookieKey] !== undefined){
        return data[cookieKey]
      }else{
        return 'not found'
      }
    },
    
    hasCookie:function (cookieKey){
      if(arguments.length !== 1)
        throw new Error('this function can accepts only one parameter [cookie key]')
      var data = getAllcookies()
      if(data[cookieKey] !== undefined)
        return true
      else
        return false
    },
    
    deleteCookie:function (cookieKey){
      if(arguments.length !== 1)
        throw new Error('this function can accepts only one parameter [cookie key]')
      if(hasCookie(cookieKey)){
        var date = new Date()
        date.setMonth(date.getMonth()-1)
        document.cookie=cookieKey+"=;expires="+date.toUTCString()
      }else
        return 'there is no cookie with key ['+cookieKey+']'
    }
  }
}


// var cookies = new Cookies()

