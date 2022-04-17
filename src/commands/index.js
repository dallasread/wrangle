import Character from '@/lib/character/index.js'

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

  addCharacter (data) {
    return this.state.add('characters', [new Character(data)])[0]
  }

  listen (level) {
    this.wire.socket.on('move', (data) => {
      const character = this.queries.findCharacter(data.id)

      if (character) {
        return level.updateFromRemote(character, data)
      }

      this.addCharacter(data)
    })
  }
}

export default Commands
