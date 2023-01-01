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