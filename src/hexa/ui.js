import '../public/js/tailwind.js'

export function AppBar(data) {
  if (data.backButton == 'true') {
       var backbutton = `<div onclick="history.back()" class="hover:text-slate-500"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg></div>`
  }else{
       var backbutton = ''
  }
  return `<div class="relative sticky top-0 rounded-b-1xl h-9 bg-${data.backgroundColor} border-b shadow p-3 pt-11 pb-10 text-${data.textColor} ${data.class}">
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
  if(data.readOnly == "true") {
       var readonly = "readonly"
  }else{
       var readonly = ""
  }
  if(data.labelText == null) {
    var labelText = ""
  }else{
    var labelText = `<label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">${data.labelText}</label>`
  }
  if(data.backgroundColor == null) {
    var backgroundColor = "gray-50"
  }else{
    var backgroundColor = data.backgroundColor
  }
  if(data.textColor == null) {
    var textColor = "gray-900"
  } else {
    var textColor = data.textColor
  }
  if (data.borderColor == null) {
    var borderColor = "gray-300"
  } else {
    var borderColor = data.borderColor
  }
  return `${labelText}
        <input type="${data.type}" id="${data.id}" class="bg-${backgroundColor} border border-${borderColor} text-${textColor} text-sm rounded-lg block w-full p-2.5" placeholder="${data.placeHolder}" ${data.readonly}>`
}