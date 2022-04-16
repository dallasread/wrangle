const REFRESH_RATE = 30

class Level {
  updateX (character, val) {
    character.updateX(val)
  }

  updateY (character, val) {
    // character.updateY(val)
  }

  actionA (character) {
    character.updateY(+1)
    setTimeout(() => character.updateY(+1), REFRESH_RATE)
    setTimeout(() => character.updateY(+1), REFRESH_RATE * 2)
    setTimeout(() => character.updateY(+1), REFRESH_RATE * 3)
    setTimeout(() => character.updateY(-1), REFRESH_RATE * 4)
    setTimeout(() => character.updateY(-1), REFRESH_RATE * 5)
    setTimeout(() => character.updateY(-1), REFRESH_RATE * 6)
    setTimeout(() => character.updateY(-1), REFRESH_RATE * 7)
  }
}

export default Level
