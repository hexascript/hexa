import HexaDOM from '../hexa/dom.js'
import {AppBar} from '../hexa/ui.js'

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
  
  HexaDOM.render("#root", Html)
}