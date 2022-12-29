const MellowCore = {

   element(id) {
       if(id.charAt(0) == '#') {
          return document.getElementById(id.replace('#',""))
       }else if(id.charAt(0) == '.') {
          return document.getElementsByClassName(id.replace('.',""))
       }
   },
   
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
   
   render(id, data) {
       if(id.charAt(0) == '#') {
           var template = document.getElementById(id.replace('#',""))
       }else if(id.charAt(0) == '.') {
           var template = document.getElementsByClassName(id.replace('.',""))
       }
       const view = '<div class="mx-auto"><div class="h-full bg-gray-50">'
       const result = data.replace('<View>', view)
                         .replace('</View>', '</div></div>')
       template.innerHTML = result
   },
   
   redirect(url) {
       location.href = '#' + url
   }
  
}

export default MellowCore