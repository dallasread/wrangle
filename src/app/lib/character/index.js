import dappy from './dappy.svg'
import uniqId from 'uniq-id'

const generateId = uniqId.generateUUID('xxxxyxxxxyxxxxyxxxxyxxxxyxxxxyxxxxyxxxxy', 32)

class Character {
  constructor () {
    this.id = generateId()
    this.img = dappy
    this.positionX = 0
    this.positionY = 0
    this.quickness = 20
    this.reverse = false
  }

  updateX (val) {
    this.positionX += val

    if (val < 0 && !this.reverse) {
      this.reverse = true
    } else if (val > 0 && this.reverse) {
      this.reverse = false
    }
  }

  updateY (val) {
    this.positionY += val
  }

  updateAbsoluteX (val) {
    this.positionX = val
  }

  updateAbsoluteY (val) {
    this.positionY = val
  }

  updateReverse (val) {
    this.reverse = val
  }

  actionA (val) {
    console.log('action A')
  }
}

export default Character
