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
    const MIDLINE_X = window.outerWidth / 2.5
    const MIDLINE_Y = window.outerHeight / 2

    let position = ''

    position += `left: ${MIDLINE_X + (character.positionX * character.quickness)}px;`
    position += `top: ${MIDLINE_Y}px;`
    position += `margin-top: ${character.positionY * -(character.quickness / 7.5)}rem;`

    if (character.reverse) {
      position += 'transform: scaleX(-1)'
    }

    return position
  }
}

export default Queries
