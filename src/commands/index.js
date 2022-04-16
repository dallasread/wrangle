class Commands {
  constructor (options) {
    for (const key in options) {
      this[key] = options[key]
    }
  }

  updateX (level, character) {
    return (val) => {
      level.updateX(character, val)
    }
  }

  updateY (level, character) {
    return (val) => {
      level.updateY(character, val)
    }
  }

  actionA (level, character) {
    return (val) => {
      level.actionA(character, val)
    }
  }
}

export default Commands
