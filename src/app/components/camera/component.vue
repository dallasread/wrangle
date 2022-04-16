<template>
  <div class="camera">
    <img
      :src="character.img"
      :style="app.queries.characterPosition(level, character)"
      class="character"
    >
  </div>
</template>

<script>
export default {
  props: ['app', 'level', 'character']
}
</script>

<style lang="scss">
  .character {
    width: 5rem;
    position: fixed;
    transition: all 30ms linear;
  }

  .camera {

  }
</style>
