import Hexa from './hexa/core.js'
import Home from './views/home.js'

const Main = () => {
    Hexa.route('/', Home)
}
Hexa.ready(Main)
