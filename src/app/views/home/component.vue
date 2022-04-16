<template>
  <div>
    <Camera
      :app="app"
      :level="level"
      :character="character"
    />
    <Controller
      :update-x="app.commands.updateX(level, character)"
      :update-y="app.commands.updateY(level, character)"
      :action-a="app.commands.actionA(level, character)"
      :initialized="() => {}"
    />
  </div>
</template>

<script>
import Camera from '@/app/components/camera/component.vue'
import Controller from '@/app/components/controller/component.vue'
import Character from '@/app/lib/character/index.js'
import Level from '@/app/lib/level/index.js'

export default {
  components: {
    Camera,
    Controller
  },
  props: ['app'],
  data () {
    return {
      character: new Character(),
      level: new Level()
    }
  },
  mounted () {
    this.app.commands.listen(this.character)
  }
}
</script>

<style scoped lang="scss">
</style>
