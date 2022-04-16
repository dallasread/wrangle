import { io } from 'socket.io-client'

class Wire {
  constructor () {
    this.socket = io('https://wrangle-server.herokuapp.com')
    // this.socket = io('http://localhost:3000')
    this.listen()
  }

  emit (event, data) {
    this.socket.emit(event, data)
  }

  listen () {
    // this.socket.onAny(console.log)
  }
}

export default Wire
