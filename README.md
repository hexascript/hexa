# Mellow.js

<p><img src="https://img.shields.io/badge/node-v10.15.3-green"> <img src="https://img.shields.io/badge/lang-javascript-yellow"> <img src="https://img.shields.io/badge/license-MIT-success"></p>

[Mellow.js](https://github.com/mellow-js/mellow.js) is a cross-platform framework for creating mobile, desktop, and progressive web app with ES6+ JavaScript. You can develop apps that can run on Android, iOS, Linux, macOS, Windows and Web from a single shared codebase.

[Mellow.js](https://github.com/mellow-js/mellow.js) is under development and still update.

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
$ git clone https://github.com/mellow-js/mellow.js
$ cd mellow.js
$ npm install
$ npm install -g .
```

## Create App ##
```bash
$ mellow --create helloworld
$ cd helloworld
$ mellow --server
```

## Examples ##

### app.js ###
```js
import Mellow from './mellow/core.js'
import Home from './views/home.js'

const Main = function() {
    Mellow.route('/', Home)
}

Mellow.ready(Main)

```

### views/home.js ###
```js
import DOM from '../mellow/dom.js'
import { AppBar } from '../mellow/ui.js'

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
          <h1 id="hello">Hello World</h1>
       </div>
    </View>`
  
  DOM.render("#root", Html)
}
```