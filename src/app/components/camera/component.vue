<template>
  <div class="camera">
    <Character
      :app="app"
      :level="level"
      :character="character"
      :is-static="true"
    />
    <div>
      <Character
        v-for="character in characters"
        :key="`character-${character.id}`"
        :app="app"
        :level="level"
        :character="character"
      />
    </div>
    <div>
      <Character
        v-for="cpu in cpus"
        :key="`cpu-${cpu.id}`"
        :app="app"
        :level="level"
        :character="cpu"
      />
    </div>
    <div>
      <Level
        :app="app"
        :level="level"
      />
    </div>
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
  props: ['app', 'level', 'characters', 'character'],
  computed: {
    cpus () {
      return this.app.queries.findAllCPUs()
    }
  },
  mounted () {
    this.app.commands.buildCPUs()

    this.cpus.forEach((cpu, index) => {
      this.app.commands.paceCPU(this.level, cpu, 1, index % 2 === 0 ? -1 : 1)
    })
  }
}
</script>
