const REFRESH_RATE = 30

class Level {
  updateX (character, val) {
    character.updateX(val)
  }

  updateY (character, val) {
    // character.updateY(val)
  }

  actionA (character, done) {
    done(character.updateY(+1))
    setTimeout(() => done(character.updateY(+1)), REFRESH_RATE)
    setTimeout(() => done(character.updateY(+1)), REFRESH_RATE * 2)
    setTimeout(() => done(character.updateY(+1)), REFRESH_RATE * 3)
    setTimeout(() => done(character.updateY(-1)), REFRESH_RATE * 4)
    setTimeout(() => done(character.updateY(-1)), REFRESH_RATE * 5)
    setTimeout(() => done(character.updateY(-1)), REFRESH_RATE * 6)
    setTimeout(() => done(character.updateY(-1)), REFRESH_RATE * 7)
  }
}

export default Level
