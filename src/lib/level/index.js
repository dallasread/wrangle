const REFRESH_RATE = 20
const JUMP_HEIGHT = 9
const JUMP_DELAY_AT_MAX = 3
const ACTION_A_TIMERS = []

class Level {
  constructor () {
    this.offsetX = 0
    this.bgItems = [
      // new Tree(5, 0)
    ]
  }

  updateX (character, delta, dontShiftLevel) {
    if (delta < 0 && !character.reverse) {
      character.reverse = true
    } else if (delta > 0 && character.reverse) {
      character.reverse = false
    } else {
      character.positionX += character.speed * delta
    }

    if (!dontShiftLevel) {
      this.offsetX -= delta
    }
  }

  splat (character, length) {
    character.splat = true

    setTimeout(() => {
      character.splat = false
    }, REFRESH_RATE * length)
  }

  updateY (character, delta) {
    if (delta > 0) {
      this.splat(character, 2)
      character.positionY += delta
    } else if (character.positionY + delta <= 0) {
      character.positionY = 0
      this.splat(character, 4)
    } else {
      character.positionY += delta
    }
  }

  updateFromRemote (character, data) {
    if (character.positionY !== data.positionY) {
      this.updateY(character, data.positionY - character.positionY)
    }

    if (character.positionX !== data.positionX) {
      character.positionX = data.positionX
    }

    if (character.reverse !== data.reverse) {
      character.reverse = data.reverse
    }

    if (!character.color) {
      character.color = data.color
    }
  }

  actionA (character, done) {
    const startingPosition = character.positionY + 1

    ACTION_A_TIMERS.forEach((a) => clearTimeout(a))

    for (var i = 0; i <= JUMP_HEIGHT; i++) {
      ACTION_A_TIMERS.push(setTimeout(() => done(this.updateY(character, +1)), REFRESH_RATE * i))
    }

    for (var n = 0; n < startingPosition + JUMP_HEIGHT; n++) {
      ACTION_A_TIMERS.push(setTimeout(() => done(this.updateY(character, -1)), REFRESH_RATE * (JUMP_HEIGHT + JUMP_DELAY_AT_MAX + n)))
    }
  }
}

export default Level
