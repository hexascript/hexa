<img src="https://i.ibb.co/LSQwZW3/IMG-20230101-181058.jpg">

<p><img src="https://img.shields.io/badge/node-v10.15.3-green"> <img src="https://img.shields.io/badge/lang-javascript-yellow"> <img src="https://img.shields.io/badge/license-MIT-success"></p>

[Hexa](https://github.com/hexascript/hexa) is a cross-platform framework for creating mobile, desktop, and progressive web app with ES6+ JavaScript. You can develop apps that can run on Android, iOS, Linux, macOS, Windows and Web from a single shared codebase.

[Hexa](https://github.com/hexascript/hexa) is under development and still update.

## Getting Started ##

* [Installation]()
* [Documentation]()
* [Examples]()
* [Development Guide]()

## Features ##

* Structured
* Routing
* Views
* Fast & Reliable
* Libraries

## Installation
```bash
$ git clone https://github.com/hexascript/hexa
$ cd hexa
$ npm install
$ npm install -g .
```

## Create App ##
```bash
$ hexa --create helloworld
$ cd helloworld
$ hexa --server
```

## Examples ##

### app.js ###
```js
import App from './hexa/core.js'
import Home from './views/home.js'

const Main = function() {
    App.route('/', Home)
}

App.ready(Main)

```

### views/home.js ###
```js
import DOM from '../hexa/dom.js'
import { AppBar } from '../hexa/ui.js'

export default function() {
  const Header =
  AppBar({
    text: 'Example Project',
    backgroundColor: 'slate-50',
    textColor: 'slate-800',
    backButton: 'false'
  })

  const Html = `
    <View>
       ${Header}
       <div class="p-5">
          <h1>Hello World</h1>
       </div>
    </View>`
  
  DOM.render("#root", Html)
}
```