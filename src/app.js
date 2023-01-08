import Hexa from './hexa/core.js'
import Home from './pages/home.js'

const Main = () => {
    Hexa.route('/', Home)
}
Hexa.ready(Main)
