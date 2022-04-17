import uniqId from 'uniq-id'

const generateId = uniqId.generateUUID('xxxxyxxxxyxxxxyxxxxyxxxxyxxxxyxxxxyxxxxy', 32)
const COLORS = ['red', 'blue', 'green', 'yellow', 'pink', 'purple', 'gray', 'cyan']
const getOption = (options, attr, defaultValue) => {
  return typeof options[attr] === 'undefined' ? defaultValue : options[attr]
}

class Character {
  constructor (options) {
    options = options || {}

    this.id = getOption(options, 'id', generateId())
    this.color = getOption(options, 'color', COLORS[Math.floor(Math.random() * COLORS.length)])
    this.positionX = getOption(options, 'positionX', 0)
    this.positionY = getOption(options, 'positionY', 0)
    this.reverse = getOption(options, 'reverse', false)
  }
}

export default Character
