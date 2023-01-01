import App from './hexa/core.js'
import Home from './views/home.js'

const Main = function() {
    App.route('/', Home)
}
App.ready(Main)
