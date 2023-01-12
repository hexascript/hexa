import '../public/js/tailwind.js'

function isWebview() {
  const browser = window.navigator.standalone
  const userAgent = window.navigator.userAgent.toLowerCase()
  const safari = /safari/.test(userAgent)
  const ios = /iphone|ipod|ipad/.test(userAgent)

  if(ios) {
    if(!standalone && safari) {
      return false
    }else if(!standalone && !safari) {
      return true
    }
  }else{
    if(userAgent.includes('wv')) {
      return true
    }else{
      return false
    }
  }
}

export function AppBar(data) {
  if(isWebview() == true) {
    var paddingtop = '11'
  }else{
    var paddingtop = '4'
  }
  if(data.backgroundColor == null) {
    var backgroundColor = 'bg-slate-50'
  } else {
    var backgroundColor = `bg-${data.backgroundColor}`
  }
  if(data.textColor == null) {
    var textColor = 'text-slate-800'
  } else {
    var textColor = `text-${data.textColor}`
  }
  if (data.text == null) {
    var text = 'AppBar'
  } else {
    var text = data.text
  }
  if(data.backButton == true) {
       var backbutton = `<div onclick="history.back()" class="hover:text-slate-500"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg></div>`
  }else{
       var backbutton = ''
  }
  return `<div class="relative sticky top-0 rounded-b-1xl h-9 ${backgroundColor} border-b shadow p-3 pt-${paddingtop} pb-10 ${textColor} ${data.class}">
         <div class="mb-4 flex items-center justify-start">${backbutton}
         <h2 class="font-medium ml-3 text-lg">${text}</h2>
         </div>
         <div class="space-y-2 text-center"></div>
         </div>`
}

export function Alerts(data) {
  return `<div id="${data.id}" style="display:${data.display};" class="bg-${data.backgroundColor} border border-${data.borderColor} text-${data.textColor} px-4 py-3 rounded relative ${data.class}" role="alert">
       <span class="block sm:inline">${data.text}</span></div>`
}

export function TextBox(data) {
  if(data.backgroundColor == null) {
    var backgroundColor = 'bg-gray-50'
  } else {
    var backgroundColor = `bg-${data.backgroundColor}`
  }
  if(data.textColor == null) {
    var textColor = 'text-gray-900'
  } else {
    var textColor = `text-${data.textColor}`
  }
  if(data.borderColor == null) {
    var borderColor = 'border border-gray-300'
  } else {
    var borderColor = `border border-${data.borderColor}`
  }
  if(data.placeHolder == null) {
    var placeHolder = ''
  } else {
    var placeHolder = data.placeHolder
  }
  if(data.readOnly == true) {
       var readonly = 'readonly'
  }else{
       var readonly = ''
  }
  if(data.labelText == null) {
    var labelText = ''
  }else{
    var labelText = `<label class="block mb-2 text-sm font-medium ${textColor} dark:text-gray-300">${data.labelText}</label>`
  }
  if(data.type == 'textarea') {
    return `${labelText}
    <textarea name="${data.name}" id="${data.id}" rows="4" class="block p-2.5 w-full text-sm ${backgroundColor} ${textColor} rounded-lg ${borderColor}" placeholder="${placeHolder}"></textarea>`
  }else{
    return `${labelText}
        <input name="${data.name}" type="${data.type}" id="${data.id}" class="${backgroundColor} ${borderColor} ${textColor} text-sm rounded-lg block w-full p-2.5" placeholder="${placeHolder}" ${readonly}>`
  }
}

export function Switch(data) {
  if (data.checked == true) {
    var checked = 'checked'
  } else {
    var checked = ''
  }
  return ` <dh-component>
                      <div class="w-16 h-8 cursor-pointer rounded-full relative shadow-sm">
                              <input aria-label="switchbox" type="checkbox" name="${data.name}" id="${data.id}" class="mt-2 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:bg-blue-600 focus:outline-none checkbox w-4 h-4 rounded-full bg-white absolute m-1 shadow-sm appearance-none cursor-pointer" ${checked}/>
                              <label for="${data.id}" class="toggle-label bg-gray-200 block w-16 h-8 overflow-hidden rounded-full bg-gray-300 cursor-pointer"></label>
                          </div>
                          <style>
                              .checkbox:checked {
                                  /* Apply class right-0*/
                                  right: 0;
                              }
                              .checkbox:checked + .toggle-label {
                                  /* Apply class bg-indigo-700 */
                                  background-color: #2F68FF;
                              }
                          </style>
                  </dh-component>`
}

export function Button(data) {
  if(data.backgroundColor == null) {
    var backgroundColor = 'bg-blue-500'
  }else{
    var backgroundColor = `bg-${data.backgroundColor}`
  }
  if(data.textColor == null) {
    var textColor = 'text-white'
  }else{
    var textColor = `text-${data.textColor}`
  }
  if (data.disabled == true) {
    var disabled = 'disabled'
  } else {
    var disabled = ''
  }
  return `<button id="${data.id}" class="w-full ${backgroundColor} ${textColor} font-bold py-2 px-4 rounded-2xl" ${disabled}>
    ${data.text}
  </button>`
}

export function MenuList(data) {
  if (data.text == null) {
    var text = 'Menu List'
  } else {
    var text = data.text
  }
  if (data.description == null) {
    var description = 'Menu List Description'
  } else {
    var description = data.description
  }
  if (data.backgroundColor == null) {
    var backgroundColor = 'bg-white'
  } else {
    var backgroundColor = `bg-${data.backgroundColor}`
  }
  if (data.textColor == null) {
    var textColor = 'text-white'
  } else {
    var textColor = `text-${data.textColor}`
  }
  return `<div class="${backgroundColor} p-3 rounded-xl shadow-xl flex items-center justify-between mt-4">
                 <div class="flex space-x-6 items-center">
                   <img src="${data.image}" class="w-auto w-16 h-16 rounded-lg">
                   <a href="#${data.location}">
                     <div>
                       <h3 class="font-semibold text-base">${text}</h3>
                       <p class="font-normal text-sm text-gray-400">${description}</p>
                     </div>
                   </a>
                 </div>
               </div>`
}

export function SplashScreen(data) {
  if(isWebview() == true) {
    var paddingtop = '11'
  } else {
    var paddingtop = '4'
  }
  if(data.backgroundColor == null) {
    var backgroundColor = 'bg-gray-50'
  } else {
    var backgroundColor = `bg-${data.backgroundColor}`
  }
  if(data.textColor == null) {
    var textColor = 'text-gray-900'
  }else{
    var textColor = `text-${data.textColor}`
  }
  window.setTimeout(() => {
    location.href = `#${data.redirect}`
  }, 3000)
  return `<style>.loading{display:grid;text-transform:uppercase;font-family:Roboto,sans-serif;font-size:1.5em;text-shadow:2px 2px 10px rgba(0,0,0,.2);padding:100px;}@keyframes dots{50%{transform:translateY(-.4rem)}100%{transform:translateY(0)}}@keyframes rotation{from{transform:rotate(0)}to{transform:rotate(359deg)}}.spinner{transform-origin:50% 50%;animation:2s linear infinite rotation}.d{animation:1.5s ease-out infinite dots}.d-2{animation-delay:.5s}.d-3{animation-delay:1s}span{display:inline-block}</style><div class="pt-${paddingtop} ${backgroundColor} ${textColor} text-center loading">
  <center>
              <img style="float:center;text-align:center;width:100px;height:100px;" src="${data.image}">
              <p class="p-2">${data.text}<span class="d">.</span><span class="d d-2">.</span><span class="d d-3">.</span></p></center>`
}