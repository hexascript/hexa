const HexaCore = {
  ready(func) {
    window.addEventListener('hashchange', func)
    window.addEventListener('load', func)
  },
  route(params, func) {
    const url = location.hash.slice(1);
    if(params == '/') {
      params = ''
    }
    if(url == params) {
      func.call()
    }
  },
  redirect(url) {
    location.href = `#${url}`
  }
}

export default HexaCore