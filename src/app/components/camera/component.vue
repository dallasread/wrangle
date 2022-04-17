<template>
  <div class="camera">
    <Character
      v-for="character in characters"
      :key="`character-${character.id}`"
      :app="app"
      :level="level"
      :character="character"
    />
    <Level />
  </div>
</template>

<script>
import Character from '@/app/components/character/component.vue'
import Level from '@/app/components/level/component.vue'

export default {
  components: {
    Character,
    Level
  },
  props: ['app', 'level', 'characters']
}
</script>
