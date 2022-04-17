<template>
  <div>
    <Camera
      :app="app"
      :level="level"
      :characters="characters"
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
import Level from '@/lib/level/index.js'

export default {
  components: {
    Camera,
    Controller
  },
  props: ['app'],
  data () {
    return {
      characters: this.app.queries.findAllCharacters(),
      level: new Level(),
      character: null
    }
  },
  mounted () {
    this.character = this.app.commands.addCharacter()
    this.app.commands.listen(this.level)
  }
}
</script>

<style scoped lang="scss">
</style>
