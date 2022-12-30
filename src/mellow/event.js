export function onClick(id, func) {
    if(id.charAt(0) == '#') {
        var element = document.getElementById(id.replace('#',""))
    }else if(id.charAt(0) == '.') {
        var element = document.getElementsByClassName(id.replace('.',""))
    }
    element.onclick = func
}
