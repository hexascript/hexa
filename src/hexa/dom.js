const HexaDOM = {

    element(id) {
      if (id.charAt(0) == '#') {
        return document.getElementById(id.replace('#', ""))
      } else if (id.charAt(0) == '.') {
        return document.getElementsByClassName(id.replace('.', ""))
      }
    },
    
    addEvent(event, id, func) {
        if (id.charAt(0) == '#') {
          var element = document.getElementById(id.replace('#', ""))
        } else if (id.charAt(0) == '.') {
          var element = document.getElementsByClassName(id.replace('.', ""))
        }
        element.addEventListener(event, func)
    },
    
    render(id, data) {
      if(id.charAt(0) == '#') {
        var template = document.getElementById(id.replace('#', ""))
      }else if(id.charAt(0) == '.') {
        var template = document.getElementsByClassName(id.replace('.', ""))
      }
      const result = data.replace(/<view>(.*?)<\/view>/gis, '<div class="mx-auto"><div class="h-full bg-gray-50">$1</div></div>')
        .replace(/<content>(.*?)<\/content>/gis, '<div class="p-6">$1</div>')
        
      template.innerHTML = result
    }
    
}

export default HexaDOM