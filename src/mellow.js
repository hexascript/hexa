/* Routing Function
 * Example:
 * route('/', 'index.html');
 */
var path = 'views';
var routes = {};

function route(path, templateId, title) {
    routes[path] = {
        templateId: templateId,
        title: title
    };
}

var view = null;

function router() {
    view = view || document.getElementById('root');
    var url = location.hash.slice(1) || '/';
    var route = routes[url];
    if (view) {
        render('root', route.templateId, route.title);
    }
}

function template(data) {
    let apps = new App();
    return {
        header: apps.setHeader(data),
        alert: apps.setAlert(data),
        input: apps.setInput(data)
    };
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);


/* Load Views Function 
 * This function for load and compile template
 */
function render(id, file, title = [{}]) {
    var files = file.slice((Math.max(0, file.lastIndexOf(".")) || Infinity) + 1);
    if (files == "") {
        document.getElementById(id).innerHTML = file;
    } else {
        if (files.slice(".") == 'mellow') {
            var MellowSet = MellowSetting;
            if (MellowSet[0].maxwidth == 'auto') {
                var maxwidth = "";
            } else {
                var maxwidth = 'max-w-[' + MellowSet[0].maxwidth + ']';
            }
            if (title[0].transition == null) {
                var m_body = '<div x-data="Mellow()" class="mx-auto ' + maxwidth + '"><div class="h-full bg-gray-50">';
            } else {
                var m_body = '<div x-data="Mellow()" class="animate__animated animate__' + title[0].transition + ' animate__faster mx-auto ' + maxwidth + '"><div class="h-full bg-gray-50">';
            }
            var apps = new XMLHttpRequest();
            apps.open('GET', path + '/' + file, true);
            apps.onreadystatechange = function() {
                if (this.readyState !== 4) return;
                if (this.status !== 200) return;
                var data = this.responseText;
                document.getElementById(id).innerHTML = data.replaceAll('{{imgPath}}', MellowSet[0].imgPath)
                    .replaceAll('{{route}}', MellowSet[0].route)
                    .replaceAll('<View>', m_body)
                    .replaceAll('</View>', '</div></div>')
                    .replaceAll('<AppBar', '<div x-html="header"')
                    .replaceAll('</AppBar>', '</div>')
                    .replaceAll('<TextBox', '<div x-html="input"')
                    .replaceAll('</TextBox>', '</div>')
                    .replaceAll('<content', '<div')
                    .replaceAll('</content>', '</div>')
                    .replaceAll('<alert', '<div x-html="alert"')
                    .replaceAll('</alert>', '</div>')
                    .replaceAll('return=', 'x-text=')
                    .replaceAll('json=', 'x-data=')
                    .replaceAll('content=', 'x-data=')
                    .replaceAll('function=', 'x-init=')
                    .replaceAll('<text>', '<p class="text-sm text-slate-400"><span x-text="')
                    .replaceAll('</text>', '"></span></p>')
                    .replaceAll('<forEach="', '<template x-for="')
                    .replaceAll('</forEach>', '</template>')
                    .replaceAll('<if="', '<template x-if="')
                    .replaceAll('</if>', '</template>')
                    .replaceAll('<LoadingCircle></LoadingCircle>', '<center><div class="loader_mini"></div></center>');
            };
            apps.send();
        } else if (files.slice(".") == 'html') {
            var apps = new XMLHttpRequest();
            apps.open('GET', path + '/' + file, true);
            apps.onreadystatechange = function() {
                if (this.readyState !== 4) return;
                if (this.status !== 200) return;
                var data = this.responseText;
                document.getElementById(id).innerHTML = data;
            };
            apps.send();
        }
    }
}

String.prototype.replaceAll = function(search, replace) {
    if (replace === undefined) {
        return this.toString();
    }
    return this.split(search).join(replace);
}

function ready(func) {
    window.addEventListener('hashchange', func);
    window.addEventListener('load', func);
}

/* Template function */
class App {
    constructor() {
        this.route = location.hash.slice(1);
    }
    
    element(id) {
        if(id.charAt(0) == '#') {
            return document.getElementById(id.replace('#',""));
        }else if(id.charAt(0) == '.') {
            return document.getElementsByClassName(id.replace('.',""));
        }
    }

    redirect(url) {
        location.href = '#' + url;
    }

    getDatetime(pemisah) {
        var today = new Date();
        var date = today.getDate() + pemisah + (today.getMonth() + 1) + pemisah + today.getFullYear();
        var time = today.getHours() + ":" + today.getMinutes();
        var CurrentDateTime = date + ' ' + time;
        return CurrentDateTime;
    }

    setParam(params, views) {
        var parameter = location.hash.split("/");
        if (parameter[1] == params && parameter[2]) {
            render('root', views);
        }
    }

    setTitle(name) {
        return document.title = name;
    }

    setBackground(color) {
        return document.body.style.backgroundColor = color;
    }

    setHeader(data) {
        if (data[0].backButton == 'true') {
            var backbutton = `<div onclick="history.back()" class="hover:text-slate-500"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg></div>`;
        } else {
            var backbutton = '';
        }
        return '<div class="relative sticky top-0 rounded-b-1xl h-9 bg-' + data[0].backgroundColor + ' border-b shadow p-3 pt-11 pb-10 text-' + data[0].textColor + ' ' + data[0].class + '">' +
            '<div class="mb-4 flex items-center justify-start">' + backbutton +
            '<h2 class="font-medium ml-3 text-lg">' + data[0].text + '</h2>' +
            '</div>' +
            '<div class="space-y-2 text-center"></div>' +
            '</div>';
    }

    setAlert(data) {
        return '<div id="' + data[0].id + '" style="display:' + data[0].display + ';" class="bg-' + data[0].backgroundColor + ' border border-' + data[0].borderColor + ' text-' + data[0].textColor + ' px-4 py-3 rounded relative ' + data[0].class + '" role="alert">' +
            '<span class="block sm:inline">' + data[0].text + '</span></div>';
    }

    setInput(data) {
        if(data[0].function == null) {
            var functs = "";
        } else {
            var functs = data[0].function;
        }
        if(data[0].return == null) {
            var rets = "";
        } else {
            var rets = 'x-model="' + data[0].return + '"';
        }
        return '<label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">' + data[0].labelText + '</label>' +
        '<input type="' + data[0].type + '" id="' + data[0].id + '" ' + rets + ' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="' + data[0].placeholder + '" ' + functs + '>';
    }

}

class Http {
    constructor() {

    }
    get(id, url) {
        var apps = new XMLHttpRequest();
        apps.open('GET', url, true);
        apps.onreadystatechange = function() {
            if (this.readyState !== 4) return;
            if (this.status !== 200) return;
            document.getElementById(id).innerHTML = this.responseText;
        };
        apps.send();
    }

    post(url, params) {
        var apps = new XMLHttpRequest();
        apps.open('POST', url, true);
        apps.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        apps.onreadystatechange = function() {
            if (this.readyState !== 4) return;
            if (this.status !== 200) return;
            return this.responseText;
        };
        apps.send(params);
    }
}

class Storage {

    add(key, value) {
        localStorage.setItem(key, value);
    }

    get(key) {
        return localStorage.getItem(key);
    }

    remove(key) {
        localStorage.removeItem(key);
    }
    
    clear() {
        localStorage.clear();
    }
}

class Validator {

    email(mail) {
        var tag = mail.indexOf("@");
        var split = mail.lastIndexOf(".");
        if (tag < 1 || split < tag + 2 || split + 2 >= mail.length) {
            return false;
        } else {
            return true;
        }
    }

    number(num) {
        if (isNaN(num) || num < 1 || num > 10) {
            return false;
        } else {
            return true;
        }
    }

}