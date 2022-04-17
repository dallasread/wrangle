class Queries {
  constructor (options) {
    for (const key in options) {
      this[key] = options[key]
    }
  }

  findCharacter (id) {
    return this.state.findById('characters', id)
  }

  findAllCharacters () {
    return this.state.findAll('characters')
  }

  findAllCPUs () {
    return this.state.findAll('cpus')
  }

  characterPosition (level, character, isStatic) {
    let position = ''

    if (!isStatic) {
      position += `left: calc(50% + ${(character.positionX + level.offsetX - 3.5)}rem);`
    }

    position += `margin-top: ${character.positionY * -2.5}rem;`

    if (character.reverse) {
      position += 'transform: scaleX(-1)'
    }

    return position
  }

  levelPosition (level) {
    let position = ''

    position += `left: -${level.offsetX - 2.5}rem;`

    return position
  }
}

export default Queries
