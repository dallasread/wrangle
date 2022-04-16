<template>
  <router-view :app="app" />
</template>

<script>
import Commands from '@/commands/index.js'
import State from '@/state/index.js'
import Queries from '@/queries/index.js'
import Wire from '@/app/lib/wire/index.js'
import uniqId from 'uniq-id'

const generateId = uniqId.generateUUID('xxxxyxxxxyxxxxyxxxxyxxxxyxxxxyxxxxyxxxxy', 32)

export default {
  props: {
    state: {
      type: Object,
      default: () => new State({})
    },
    wire: {
      type: Object,
      default: () => new Wire({ id: generateId() })
    }
  },
  data () {
    window.wrangle = this

    const queries = new Queries({
      state: this.state
    })
    const commands = new Commands({
      state: this.state,
      queries,
      wire: this.wire
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
