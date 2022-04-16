class Commands {
  constructor (options) {
    for (const key in options) {
      this[key] = options[key]
    }
  }

  updateX (level, character) {
    return (val) => {
      level.updateX(character, val)
      this.wire.emit('move', character)
    }
  }

  updateY (level, character) {
    return (val) => {
      level.updateY(character, val)
      this.wire.emit('move', character)
    }
  }

  actionA (level, character) {
    return (val) => {
      level.actionA(character, val)
      this.wire.emit('move', character)
    }
  }

  updateCharacter (character, data) {
    character.updateX(data.positionX, true)
    character.updateY(data.positionY, true)
  }

  listen (character) {
    this.wire.socket.on('move', (data) => {
      this.updateCharacter(character, data)
    })
  }
}

export default Commands
