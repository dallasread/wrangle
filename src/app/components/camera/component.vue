<template>
  <div class="camera">
    <Character
      v-for="character in characters"
      :key="`character-${character.id}`"
      :app="app"
      :level="level"
      :character="character"
    />
  </div>
</template>

<script>
import Character from '@/app/components/character/component.vue'

export default {
  components: {
    Character
  },
  props: ['app', 'level', 'characters']
}
</script>
