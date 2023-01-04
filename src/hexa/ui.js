import '../public/js/tailwind.js'

export function AppBar(data) {
  var browser = window.navigator.standalone,
    userAgent = window.navigator.userAgent.toLowerCase(),
    safari = /safari/.test(userAgent),
    ios = /iphone|ipod|ipad/.test(userAgent)
  
  if (ios) {
    if (!standalone && safari) {
      var paddingtop = "4"
    } else if (!standalone && !safari) {
      var paddingtop = "11"
    }
  } else {
    if (userAgent.includes('wv')) {
      var paddingtop = "11"
    } else {
      var paddingtop = "4"
    }
  }
  if (data.backgroundColor == null) {
    var backgroundColor = "bg-slate-50"
  } else {
    var backgroundColor = `bg-${data.backgroundColor}`
  }
  if (data.textColor == null) {
    var textColor = "text-slate-800"
  } else {
    var textColor = `text-${data.textColor}`
  }
  if (data.backButton == 'true') {
       var backbutton = `<div onclick="history.back()" class="hover:text-slate-500"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg></div>`
  }else{
       var backbutton = ''
  }
  return `<div class="relative sticky top-0 rounded-b-1xl h-9 ${backgroundColor} border-b shadow p-3 pt-${paddingtop} pb-10 ${textColor} ${data.class}">
         <div class="mb-4 flex items-center justify-start">${backbutton}
         <h2 class="font-medium ml-3 text-lg">${data.text}</h2>
         </div>
         <div class="space-y-2 text-center"></div>
         </div>`
}

export function Alerts(data) {
  return `<div id="${data.id}" style="display:${data.display};" class="bg-${data.backgroundColor} border border-${data.borderColor} text-${data.textColor} px-4 py-3 rounded relative ${data.class}" role="alert">
       <span class="block sm:inline">${data.text}</span></div>`
}

export function TextBox(data) {
  if (data.backgroundColor == null) {
    var backgroundColor = "bg-gray-50"
  } else {
    var backgroundColor = `bg-${data.backgroundColor}`
  }
  if (data.textColor == null) {
    var textColor = "text-gray-900"
  } else {
    var textColor = `text-${data.textColor}`
  }
  if (data.borderColor == null) {
    var borderColor = "border border-gray-300"
  } else {
    var borderColor = `border border-${data.borderColor}`
  }
  if(data.readOnly == "true") {
       var readonly = "readonly"
  }else{
       var readonly = ""
  }
  if(data.labelText == null) {
    var labelText = ""
  }else{
    var labelText = `<label class="block mb-2 text-sm font-medium ${textColor} dark:text-gray-300">${data.labelText}</label>`
  }
  return `${labelText}
        <input name="${data.name}" type="${data.type}" id="${data.id}" class="${backgroundColor} ${borderColor} ${textColor} text-sm rounded-lg block w-full p-2.5" placeholder="${data.placeHolder}" ${readonly}>`
}

export function SplashScreen(data) {
  if (data.backgroundColor == null) {
    var backgroundColor = "bg-gray-50"
  } else {
    var backgroundColor = `bg-${data.backgroundColor}`
  }
  if (data.textColor == null) {
    var textColor = "text-gray-900"
  } else {
    var textColor = `text-${data.textColor}`
  }
  window.setTimeout(function() {
    location.href = '#' + data.redirect
  }, 3000)
  return `<style>.loading svg{margin:auto}.loading{display:grid;text-transform:uppercase;font-family:Roboto,sans-serif;font-size:1.5em;text-shadow:2px 2px 10px rgba(0,0,0,.2);padding:100px;}@keyframes dots{50%{transform:translateY(-.4rem)}100%{transform:translateY(0)}}@keyframes rotation{from{transform:rotate(0)}to{transform:rotate(359deg)}}.spinner{transform-origin:50% 50%;animation:2s linear infinite rotation}.d{animation:1.5s ease-out infinite dots}.d-2{animation-delay:.5s}.d-3{animation-delay:1s}span{display:inline-block}</style><div class="bg-${backgroundColor} text-${textColor} loading">
              <svg width="114px" height="114px" xmlns="http://www.w3.org/2000/svg">
                        <g fill="#1684D5" fill-rule="nonzero">
                            <path d="M89.563 72.011c-2.319 0-7.352-.438-26.297 4.189s-24.969 7.93-26.881 8.932c-2.636 1.384-2.378 2.368-2.378 2.368 9.321 6.832 21.285 9.153 32.547 6.316C77.817 90.978 87.17 83.286 92 72.888c-.02-.03-.258-.887-2.437-.877zM93.88 48.648c-1.572-1.12-4.371-3.963-32.672 2.12-28.3 6.083-38.998 14.138-39.656 14.634A3.965 3.965 0 0 0 20 67.76 38.59 38.59 0 0 0 30.982 86a2.133 2.133 0 0 1 .904-1.486 39.347 39.347 0 0 1 6.935-3.716 68.138 68.138 0 0 1 8.163-2.744s2.377-5.548 2.662-6.252c.25-.568.531-1.12.845-1.654a4.275 4.275 0 0 1 1.965-1.17c.854-.317 11.355-3.12 17.682-4.28 6.326-1.159 14.646-2.556 19.312-2.724 4.47-.149 5.108 1.12 5.157 1.228a38.555 38.555 0 0 0-.688-14.554h-.039z"/>
                            <path d="M30.35 56.616a152.469 152.469 0 0 1 14.451-5.19s2.688-5.287 3.495-6.71c.807-1.424 4.135-2.63 20.673-5.516 18.507-3.232 21.598-.396 22.031.227a38.724 38.724 0 0 0-9.844-12.02c-.827-.543-6.891-3.726-29.07 1.78-20.673 5.15-27.672 10.378-29.818 12.602A38.397 38.397 0 0 0 19.591 64c.423-1.937 4.36-4.626 10.76-7.384z"/>
                            <path d="M30.843 33.394a120.343 120.343 0 0 1 12.143-4.461l2.657-3.948c1.377-2.033 3.591-2.902 11.533-4.007 6.376-.878 9.515-.494 10.824-.207C50.584 15.274 31.725 22.913 23 39c.05-.109 1.722-2.734 7.843-5.606z"/>
                            <g>
                                <path class="spinner" d="M57.88 106.506c-24.417.002-45.146-17.978-48.71-42.249a44.568 44.568 0 0 1-.386-3.289 5.13 5.13 0 0 0 3.366-5.597 5.111 5.111 0 0 0-4.845-4.367 5.107 5.107 0 0 0-5.173 3.968 5.134 5.134 0 0 0 2.914 5.847C7.103 87.997 29.647 108.995 56.772 109c.692 0 1.374 0 2.057-.05C78.49 107.74 95.695 95.24 103 76.856c-7.846 18.01-25.555 29.647-45.12 29.65zM56.12 7.494c24.417-.002 45.146 17.978 48.71 42.249.169 1.083.297 2.176.386 3.289a5.13 5.13 0 0 0-3.366 5.597 5.111 5.111 0 0 0 4.845 4.367 5.107 5.107 0 0 0 5.173-3.968 5.134 5.134 0 0 0-2.914-5.847C106.897 26.003 84.353 5.005 57.228 5c-.692 0-1.374 0-2.057.05C35.51 6.26 18.305 18.76 11 37.144c7.846-18.01 25.555-29.647 45.12-29.65z"/>
                            </g>
                        </g>
                    </svg>
              <p style="text-align:center;">${data.text}<span class="d">.</span><span class="d d-2">.</span><span class="d d-3">.</span></p>`
}