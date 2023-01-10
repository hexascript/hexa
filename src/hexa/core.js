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
  escapeHTML(str) {
    str.replace(
      /[&<>'"]/g,
      tag =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      } [tag] || tag)
    )
  },
  redirect(url) {
    location.href = `#${url}`
  }
}

export default HexaCore