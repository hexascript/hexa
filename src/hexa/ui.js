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
  var paddingtop = (isWebview() == true) ? '11' : '4'
  var backgroundColor = (data.backgroundColor == null) ? 'bg-slate-50' : `bg-${data.backgroundColor}`
  var textColor = (data.textColor == null) ? 'text-slate-800' : `bg-${data.textColor}`
  var text = (data.text == null) ? 'AppBar' : data.text
  var backButton = (data.backButton == true) ? `<div onclick="history.back()" class="hover:text-slate-500"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg></div>` : ''
  return `<div class="relative sticky top-0 rounded-b-1xl h-9 ${backgroundColor} border-b shadow p-3 pt-${paddingtop} pb-10 ${textColor} ${data.class}">
         <div class="mb-4 flex items-center justify-start">${backButton}
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
  var backgroundColor = (data.backgroundColor == null) ? 'bg-gray-50' : `bg-${data.backgroundColor}`
  var textColor = (data.textColor == null) ? 'text-gray-900' : `text-${data.textColor}`
  var borderColor = (data.borderColor == null) ? 'border border-gray-300' : `border border-${data.borderColor}`
  var placeHolder = (data.placeHolder == null) ? '' : data.placeHolder
  var readonly = (data.readOnly == true) ? 'readonly' : ''
  var labelText = (data.labelText == null) ? '' : `<label class="block mb-2 text-sm font-medium ${textColor} dark:text-gray-300">${data.labelText}</label>`
  if(data.type == 'textarea') {
    return `${labelText}
    <textarea name="${data.name}" id="${data.id}" rows="4" class="block p-2.5 w-full text-sm ${backgroundColor} ${textColor} rounded-lg ${borderColor}" placeholder="${placeHolder}"></textarea>`
  }else{
    return `${labelText}
        <input name="${data.name}" type="${data.type}" id="${data.id}" class="${backgroundColor} ${borderColor} ${textColor} text-sm rounded-lg block w-full p-2.5" placeholder="${placeHolder}" ${readonly}>`
  }
}

export function Switch(data) {
  var checked = (data.checked == true) ? 'checked' : ''
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

export function ProgressBar(data) {
  var gradient = (data.gradientFrom == null && data.gradientTo == null) ? { from:'blue-400', to:'indigo-500' } : { from: data.gradientFrom, to: data.gradientTo }
  var textColor = (data.textColor == null) ? 'text-white' : `text-${data.textColor}`
  var value = (data.value == null) ? '0%' : data.value
  return `<div class="h-4 w-full overflow-hidden rounded-full bg-slate-100 shadow"><div style="width:${value}" class="h-full rounded-full bg-gradient-to-r from-${gradient.from} to-${gradient.to}"></div></div>`
}

export function Button(data) {
  var backgroundColor = (data.backgroundColor == null) ? 'bg-blue-500' : `bg-${data.backgroundColor}`
  var textColor = (data.textColor == null) ? 'text-white' : `text-${data.textColor}`
  var disabled = (data.disabled == true) ? 'disabled' : ''
  return `<button id="${data.id}" class="w-full ${backgroundColor} ${textColor} font-bold py-2 px-4 rounded-2xl" ${disabled}>
    ${data.text}
  </button>`
}

export function MenuList(data) {
  var text = (data.text == null) ? 'Menu List' : data.text
  var description = (data.description == null) ? 'Menu List Description' : data.description
  var backgroundColor = (data.backgroundColor == null) ? 'bg-white' : `bg-${data.backgroundColor}`
  var textColor = (data.textColor == null) ? 'text-white' : `text-${data.textColor}`
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
  var paddingtop = (isWebview() == true) ? '11' : '4'
  var backgroundColor = (data.backgroundColor == null) ? 'bg-gray-50' : `bg-${data.backgroundColor}`
  var textColor = (data.textColor == null) ? 'text-gray-900' : `text-${data.textColor}`
  window.setTimeout(() => {
    location.href = `#${data.redirect}`
  }, 3000)
  return `<style>.loading{display:grid;text-transform:uppercase;font-family:Roboto,sans-serif;font-size:1.5em;text-shadow:2px 2px 10px rgba(0,0,0,.2);padding:100px;}@keyframes dots{50%{transform:translateY(-.4rem)}100%{transform:translateY(0)}}@keyframes rotation{from{transform:rotate(0)}to{transform:rotate(359deg)}}.spinner{transform-origin:50% 50%;animation:2s linear infinite rotation}.d{animation:1.5s ease-out infinite dots}.d-2{animation-delay:.5s}.d-3{animation-delay:1s}span{display:inline-block}</style><div class="pt-${paddingtop} ${backgroundColor} ${textColor} text-center loading">
  <center>
              <img style="float:center;text-align:center;width:100px;height:100px;" src="${data.image}">
              <p class="p-2">${data.text}<span class="d">.</span><span class="d d-2">.</span><span class="d d-3">.</span></p></center>`
}