const MellowCore = {
   
   ready(func) {
       window.addEventListener('hashchange', func)
       window.addEventListener('load', func)
   },
   
   route(params, func) {
       var url = location.hash.slice(1)
       if(params == '/') {
          params = ''
       }
       if(url == params) {
          func.call()
       }
   },
   
   redirect(url) {
       location.href = '#' + url
   }
  
}

export default MellowCore