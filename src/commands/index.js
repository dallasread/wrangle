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
    return () => {
      level.actionA(character, () => {
        this.wire.emit('move', character)
      })
    }
  }

  updateCharacter (character, data) {
    character.updateAbsoluteX(data.positionX)
    character.updateAbsoluteY(data.positionY)
    character.updateReverse(data.reverse)
  }

  listen (character) {
    this.wire.socket.on('move', (data) => {
      this.updateCharacter(character, data)
    })
  }
}

export default Commands
