
export function element(id) {
  if(id.charAt(0) == '#') {
    return document.getElementById(id.replace('#',""));
  }else if(id.charAt(0) == '.') {
    return document.getElementsByClassName(id.replace('.',""));
  }
}

export function ready(func) {
  window.addEventListener('hashchange', func)
  window.addEventListener('load', func)
}

export function route(params, func) {
  var url = location.hash.slice(1)
  if(params == '/') {
     params = ''
  }
  if(url == params) {
     func.call()
  }
}

export function render(id, data) {
  const view = '<div class="mx-auto"><div class="h-full bg-gray-50">'
  const result = data.replace('<View>', view)
                    .replace('</View>', '</div></div>')
  document.getElementById(id).innerHTML = result
}

export function redirect(url) {
  location.href = '#' + url;
}
