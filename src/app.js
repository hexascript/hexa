import Mellow from './mellow/core.js'
import Home from './views/home.js'

const Main = function() {
    Mellow.route('/', Home)
}
Mellow.ready(Main)llow)