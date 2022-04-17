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
    let style = ''

    if (!isStatic) {
      style += `left: calc(50% + ${(character.positionX + level.offsetX - 3.5)}rem);`
    }

    style += `top: calc(50% + ${4.5 - character.positionY}rem);`

    if (character.splat) {
      style += `transform: scale(${character.reverse ? '-' : ''}1.33, 0.5); margin-top: 1rem;`
    } else if (character.reverse) {
      style += 'transform: scaleX(-1);'
    }

    return style
  }

  levelPosition (level) {
    let position = ''

    position += `left: -${level.offsetX - 2.5}rem;`

    return position
  }
}

export default Queries
