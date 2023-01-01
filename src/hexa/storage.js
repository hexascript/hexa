const HexaStorage = {
      add(key, value) {
        localStorage.setItem(`storage_${key}`, value)
      },
    
      get(key) {
        return localStorage.getItem(`storage_${key}`)
      },
    
      remove(key) {
        localStorage.removeItem(`storage_${key}`)
      }
}

export default HexaStorage