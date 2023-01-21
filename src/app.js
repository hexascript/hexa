import Hexa from './hexa/core.js'
import Index from './pages/index.js'

const Main = () => {
    Hexa.route('/', Index)
}
Hexa.ready(Main)
