import HexaDOM from '../hexa/dom.js'
import { AppBar } from '../hexa/ui.js'

export default function() {
  const Header =
  AppBar({
    text: 'Example Project',
    backButton: false
  })

  const Html = `
    ${Header}
    <Content>
       <h1>Hello World</h1>
    </Content>`
  
  HexaDOM.render('#root', `<View>${Html}</View>`)
}