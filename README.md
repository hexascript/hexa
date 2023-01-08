<img src="https://i.ibb.co/LSQwZW3/IMG-20230101-181058.jpg">

<img src="https://img.shields.io/badge/node-v10.15.3-green"> <img src="https://img.shields.io/badge/lang-javascript-yellow"> <img src="https://img.shields.io/badge/license-MIT-success"> 
![Repository Size](https://img.shields.io/github/repo-size/hexascript/hexa) 
![Lines of Codes](https://img.shields.io/tokei/lines/github.com/hexascript/hexa)

[Hexa](https://github.com/hexascript/hexa) is a cross-platform framework for creating mobile, desktop, and progressive web app with ES6+ JavaScript. You can develop apps that can run on Android, iOS, Linux, macOS, Windows and Web from a single shared codebase.

[Hexa](https://github.com/hexascript/hexa) is under development and still update.

* **Structured.** All code and packages are structured, making it easy to find the libraries you need.
* **Route.** Make your render multiple pages easily.
* **Widget.** Bundled widgets UI to make it easier with [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss)
* **Simple.** Make your work easier and faster.
* **Cross-Platform.** Your apps can run on Android, iOS, Linux, MacOS, Windows, and Web Apps.

## Getting Started ##

* [Installation]()
* [Documentation]()
* [Examples]()
* [Development Guide]()

## Installation
```bash
$ git clone https://github.com/hexascript/hexa
$ cd hexa
$ npm run build
```

## Create New Project ##
```bash
$ hexa --create helloworld
$ cd helloworld
$ hexa --server
```

## Build & Compile
```bash
$ hexa --build [android|windows|web]
```

## Examples ##

#### app.js ####
```js
import Hexa from './hexa/core.js'
import Home from './pages/home.js'

const Main = () => {
    Hexa.route('/', Home)
}

Hexa.ready(Main)

```

#### pages/home.js ####
```js
import HexaDOM from '../hexa/dom.js'
import { AppBar } from '../hexa/ui.js'

export default function() {
  const Header =
  AppBar({
    text: 'Example Project',
    backButton: 'false'
  })

  const Html = `
    <View>
       ${Header}
       <Content>
          <h1>Hello World</h1>
       </Content>
    </View>`
  
  HexaDOM.render('#root', Html)
}
```