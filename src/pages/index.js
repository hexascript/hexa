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
    <View>
       <h1>Hello World</h1>
    </View>`
  
  HexaDOM.render('#root', Html)
}