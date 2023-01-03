import Hexa from './hexa/core.js'
import Home from './views/home.js'

const Main = function() {
    Hexa.route('/', Home)
}
Hexa.ready(Main)
