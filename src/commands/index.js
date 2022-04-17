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

  buildCharacter (data) {
    return new Character(data)
  }

  addCharacter (data) {
    return this.state.add('characters', [this.buildCharacter(data)])[0]
  }

  listen (level) {
    this.wire.socket.on('move', (data) => {
      const character = this.queries.findCharacter(data.id)

      if (character) {
        return level.updateFromRemote(character, data)
      }

      this.addCharacter(data)
    })

    this.wire.socket.on('remove', (data) => {
      const character = this.queries.findCharacter(data.id)

      this.state.removeAll('characters', [character])
    })
  }

  buildCPU (positionX) {
    return new Character({ color: '#0d003d', positionX, speed: 0.2 })
  }

  buildCPUs () {
    this.state.add('cpus', [this.buildCPU(30)])
    this.state.add('cpus', [this.buildCPU(-30)])
    this.state.add('cpus', [this.buildCPU(70)])
    this.state.add('cpus', [this.buildCPU(-70)])
    this.state.add('cpus', [this.buildCPU(100)])
    this.state.add('cpus', [this.buildCPU(-100)])
    this.state.add('cpus', [this.buildCPU(125)])
    this.state.add('cpus', [this.buildCPU(-125)])
  }

  paceCPU (level, cpu, delta, direction) {
    delta += 1 * direction
    level.updateX(cpu, 1 * direction, true)

    if (delta > 40 || delta < -40) {
      direction *= -1
    }

    setTimeout(() => {
      this.paceCPU(level, cpu, delta, direction)
    }, 30)
  }
}

export default Commands
