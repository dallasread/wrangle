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

  characterPosition (level, character) {
    let position = ''

    position += `left: calc(50% + ${character.positionX * character.quickness}px);`
    position += 'top: calc(50% + 4.5rem);'
    position += `margin-top: ${character.positionY * -2.5}rem;`

    if (character.reverse) {
      position += 'transform: scaleX(-1)'
    }

    return position
  }
}

export default Queries
