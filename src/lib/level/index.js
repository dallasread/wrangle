const REFRESH_RATE = 30

class Level {
  constructor () {
    this.offsetX = 0
    this.bgItems = [
      // new Tree(5, 0)
    ]
  }

  updateX (character, val) {
    if (val < 0 && !character.reverse) {
      character.reverse = true
    } else if (val > 0 && character.reverse) {
      character.reverse = false
    } else {
      character.positionX += val
    }

    this.offsetX -= val
  }

  updateY (character, val) {
    character.positionY += val
  }

  updateFromRemote (character, data) {
    character.positionX = data.positionX
    character.positionY = data.positionY
    character.reverse = data.reverse
    character.color = data.color
  }

  actionA (character, done) {
    done(this.updateY(character, +1))
    setTimeout(() => done(this.updateY(character, +1)), REFRESH_RATE)
    setTimeout(() => done(this.updateY(character, +1)), REFRESH_RATE * 2)
    setTimeout(() => done(this.updateY(character, +1)), REFRESH_RATE * 3)
    setTimeout(() => done(this.updateY(character, -1)), REFRESH_RATE * 6)
    setTimeout(() => done(this.updateY(character, -1)), REFRESH_RATE * 7)
    setTimeout(() => done(this.updateY(character, -1)), REFRESH_RATE * 8)
    setTimeout(() => done(this.updateY(character, -1)), REFRESH_RATE * 9)
  }
}

export default Level
