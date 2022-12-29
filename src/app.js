import { route, ready } from './mellow/core.js'
import { Home } from './views/home.js'

const Mellow = function() {
  route('/', Home())
}

ready(Mellow)