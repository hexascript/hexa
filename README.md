<img src="https://i.ibb.co/LSQwZW3/IMG-20230101-181058.jpg">

<img src="https://img.shields.io/badge/node-v10.15.3-green"> <img src="https://img.shields.io/badge/lang-javascript-yellow"> <img src="https://img.shields.io/badge/license-MIT-success"> 
![Repository Size](https://img.shields.io/github/repo-size/hexascript/hexa) 
![Lines of Codes](https://img.shields.io/tokei/lines/github.com/hexascript/hexa)

[Hexa](https://github.com/hexascript/hexa) is a cross-platform framework for creating mobile, desktop, and progressive web app with ES6+ JavaScript. You can develop apps that can run on Android, iOS, Linux, macOS, Windows and Web from a single shared codebase.

[Hexa](https://github.com/hexascript/hexa) is under development and still update every day.

* **100% JavaScript.** You only write JavaScript code.
* **Structured.** All code and packages are structured, making it easy to find the libraries you needed.
* **Router.** Make your render multiple pages easily with route function.
* **Widget.** Library UI to make your apps beautiful and easier with [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss)
* **Simple.** Make your work easier and faster with bundling library.
* **Cross-Platform.** Your apps can run on Android, iOS, Linux, MacOS, Windows, and Web Apps.

## Documentation ##
<details> 
 <summary>Installation</summary>
 
 ```bash
 $ git clone https://github.com/hexascript/hexa
 $ cd hexa
 $ npm run build
 ```
</details>

<details> 
 <summary>Create New Project</summary>
 
 ```bash
 $ hexa --create helloworld
 $ cd helloworld
 $ hexa --server
 ```
</details>

<details> 
 <summary>Build & Compile</summary>
 
```bash
 $ hexa --build [android|windows|web]
 ```
</details>

<details> 
 <summary>Examples</summary>
 
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
</details>