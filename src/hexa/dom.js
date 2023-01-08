const HexaDOM = {
    element(id) {
      if(id.startsWith('#') == true) {
        return document.getElementById(id.replace('#', ""))
      } else if(id.startsWith('.') == true) {
        return document.getElementsByClassName(id.replace('.', ""))
      }
    },
    addEvent(event, id, func) {
        const element = this.element(id)
        element.addEventListener(event, func)
    },
    render(id, data) {
        const template = this.element(id)
        const result = data.replace(/<view>(.*?)<\/view>/gis, '<div class="mx-auto"><div class="h-full bg-gray-50">$1</div></div>')
        .replace(/<content>(.*?)<\/content>/gis, '<div class="p-6">$1</div>')
        
        template.innerHTML = result
    }
}

export default HexaDOM