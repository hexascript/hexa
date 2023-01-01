const MellowDOM = {

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
      const view = '<div class="mx-auto"><div class="h-full bg-gray-50">'
      const result = data.replace('<View>', view)
        .replace('</View>', '</div></div>')
      template.innerHTML = result
    }
    
}

export default MellowDOM