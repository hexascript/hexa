import { render } from '../mellow/core.js'
import { AppBar } from '../mellow/ui.js'

export function Home() {

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
  
  render("root", Html)
  
}