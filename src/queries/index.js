const MIDLINE = window.outerHeight / 2

class Queries {
  constructor (options) {
    for (const key in options) {
      this[key] = options[key]
    }
  }

  characterPosition (level, character) {
    let position = ''

    position += `left: ${character.positionX * character.quickness}px;`
    position += `top: ${MIDLINE + (character.positionY * -character.quickness)}px;`

    if (character.reverse) {
      position += 'transform: scaleX(-1)'
    }

    return position
  }
}

export default Queries
