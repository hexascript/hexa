const MellowSession = {
  add(key, value) {
    localStorage.setItem(`session_${key}`, value)
  },

  get(key) {
    return localStorage.getItem(`session_${key}`)
  },

  remove(key) {
    localStorage.removeItem(`session_${key}`)
  }
}

export default MellowSession