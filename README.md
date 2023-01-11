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

## 🚀 Getting Started ##
<details> 
 <summary>Installation</summary>
 
 
 <img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white">
 
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

## 👨‍💻 Build to ##

| Platform  | Compiler | Status |
| ---------- | -----------| ---------- |
| <img src="https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white">   | - | <img src="https://shields.io/badge/-progress-important">   |
| <img src="https://img.shields.io/badge/iOS-000000?style=for-the-badge&logo=ios&logoColor=white">   | - | <img src="https://shields.io/badge/-failed-critical">   |
| <img src="https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white"> | [electron-packager](https://github.com/electron/electron-packager) | <img src="https://shields.io/badge/-success-success">   |
| <img src="https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black">  | [electron-packager](https://github.com/electron/electron-packager) | <img src="https://shields.io/badge/-success-success">   |
| <img src="https://img.shields.io/badge/mac%20os-000000?style=for-the-badge&logo=apple&logoColor=white">  | [electron-packager](https://github.com/electron/electron-packager) | <img src="https://shields.io/badge/-success-success">   |


## 📚 UI Components ##
<details> 
 <summary>AppBar</summary>

<img src="https://i.ibb.co/DYF72dd/Screenshot-2023-01-10-18-06-59-34.jpg">

Attributes
* text (string)
* backButton (boolean)
* backgroundColor (string)
* textColor (string)

Import
```js
import { AppBar } from '../hexa/ui.js'
```

Usage
```js
AppBar({
  text: 'Example Project',
  backButton: 'true'
})
```
</details>

<details> 
 <summary>Alerts</summary>

<img src="https://i.ibb.co/3vNbWwQ/Screenshot-2023-01-10-18-38-25-80.jpg">

Attributes
* id (string)
* text (string)
* backgroundColor (string)
* textColor (string)
* borderColor (string)
* display (boolean)

Import
```js
import { Alerts } from '../hexa/ui.js'
```

Usage
```js
Alerts({
  text: 'Widget Alerts.',
  backgroundColor: 'red-100',
  textColor: 'red-700',
  borderColor: 'red-400'
})
```
</details>

<details> 
 <summary>Button</summary>

<img src="https://i.ibb.co/thRZHNw/Screenshot-2023-01-10-18-24-43-67.jpg">

Attributes
* id (string)
* text (string)
* backgroundColor (string)
* textColor (string)
* disabled (boolean)

Import
```js
import { Button } from '../hexa/ui.js'
```

Usage
```js
Button({
  text: 'Button'
})
```
</details>

<details> 
 <summary>Switch</summary>

<img src="https://i.ibb.co/ZWrbZwg/Screenshot-2023-01-10-19-26-03-71.jpg">

Attributes
* id (string)
* name (string)
* checked (boolean)

Import
```js
import { Switch } from '../hexa/ui.js'
```

Usage
```js
Switch({
  id: 'switch1',
  name: 'switch1',
  checked: 'true'
})
```
</details>

<details> 
 <summary>TextBox</summary>

<img src="https://i.ibb.co/g30knMR/Screenshot-2023-01-10-19-37-53-27.jpg">

Attributes
* id (string)
* type (text|password|number|textarea)
* labelText (string)
* placeHolder (string)
* name (string)
* backgroundColor (string)
* textColor (string)
* borderColor (string)
* readOnly (boolean)

Import
```js
import { TextBox } from '../hexa/ui.js'
```

Usage
```js
TextBox({
  id: 'textbox1',
  type: 'text',
  labelText: 'TextBox',
  placeHolder: 'Input TextBox'
})
```
</details>