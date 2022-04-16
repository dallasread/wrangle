<template>
  <router-view :app="app" />
</template>

<script>
import Commands from '@/commands/index.js'
import State from '@/state/index.js'
import Queries from '@/queries/index.js'

export default {
  props: {
    state: {
      type: Object,
      default: () => new State({})
    }
  },
  data () {
    window.wrangle = this

    const queries = new Queries({
      state: this.state
    })
    const commands = new Commands({
      state: this.state,
      queries
    })

    return {
      app: this,
      queries,
      commands
    }
  }
}
</script>

<style lang="scss">
  @import "./style.scss"
</style>
