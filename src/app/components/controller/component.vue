<template>
  <div class="controller">
    <div
      ref="dpad"
      class="d-pad"
    >
      <div
        v-if="dPadCenter"
        class="circle"
        :style="dPadCircleStyle"
      />
    </div>
    <a
      ref="buttonA"
      class="button-a"
    />
  </div>
</template>

<script>
const isKeyActive = (keys, key) => {
  return keys.indexOf(key) !== -1
}

const PIXEL_SIZE = 10
// const UP = 38
// const DOWN = 40
const LEFT = 37
const RIGHT = 39
const SPACE = 32
const REFRESH_RATE = 30

export default {
  props: ['updateX', 'updateY', 'actionA', 'initialized'],
  data () {
    return {
      isInitialized: false,
      keydownInterval: undefined,
      dPadCenter: null
    }
  },
  computed: {
    dPadCircleStyle () {
      const left = Math.max(this.dPadCenter.x - (PIXEL_SIZE * 5), 5)
      const bottom = Math.max(window.outerHeight - this.dPadCenter.y - (PIXEL_SIZE * 5), 5)
      return `left: ${left}px; bottom: ${bottom}px;`
    }
  },
  mounted () {
    const currentKeys = []
    const onceler = {}

    this.run(currentKeys)

    document.addEventListener('keydown', (event) => {
      this.isInitialized = this.isInitialized ? this.isInitialized : this.initialized() || true
      const keycode = event.which || event.keyCode || 0
      onceler[keycode] = onceler[keycode] ? onceler[keycode] : this.addKey(currentKeys, keycode) || 1
    })

    document.addEventListener('keyup', (event) => {
      const keycode = event.which || event.keyCode || 0
      this.removeKey(currentKeys, keycode)
      delete onceler[keycode]
    })

    this.$refs.dpad.addEventListener('touchstart', (event) => {
      if (!event.touches) {
        return
      }

      this.dPadCenter = {
        x: event.touches[0].clientX,
        y: event.touches[0].clientY
      }
    })

    this.$refs.dpad.addEventListener('touchend', () => {
      this.dPadCenter = null
      currentKeys.splice(0, currentKeys.length)
    })

    this.$refs.dpad.addEventListener('touchmove', (event) => {
      if (!event.touches) {
        return
      }

      currentKeys.splice(0, currentKeys.length)

      if (event.touches[0].clientX < this.dPadCenter.x) {
        this.addKey(currentKeys, LEFT)
      } else if (event.touches[0].clientX > this.dPadCenter.x) {
        this.addKey(currentKeys, RIGHT)
      }
    })

    this.$refs.buttonA.addEventListener('touchstart', () => {
      this.actionA()
    })
  },
  methods: {
    addKey (currentKeys, keycode) {
      if (currentKeys.indexOf(keycode) === -1) {
        currentKeys.push(keycode)
      }
    },

    removeKey (currentKeys, keycode) {
      if (currentKeys.indexOf(keycode) !== -1) {
        currentKeys.splice(currentKeys.indexOf(keycode), 1)
      }
    },

    run (currentKeys) {
      this.keydownInterval = setInterval(() => {
        // if (isKeyActive(currentKeys, UP)) {
        //   this.updateY(+1)
        // } else if (isKeyActive(currentKeys, DOWN)) {
        //   this.updateY(-1)
        // }

        if (isKeyActive(currentKeys, LEFT)) {
          this.updateX(-1)
        } else if (isKeyActive(currentKeys, RIGHT)) {
          this.updateX(+1)
        }

        if (isKeyActive(currentKeys, SPACE)) {
          this.removeKey(currentKeys, SPACE)
          this.actionA()
        }
      }, REFRESH_RATE)
    },

    stop () {
      clearInterval(this.keydownInterval)
    }
  }
}
</script>

<style lang="sass">
@import "style.scss"
</style>
