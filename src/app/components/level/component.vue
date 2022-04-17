<template>
  <div>
    <div
      class="level"
      :style="app.queries.levelPosition(level)"
    />
    <div
      class="level-ground"
    />
  </div>
</template>

<script>
export default {
  props: ['app', 'level']
}
</script>

<style lang="scss">
  .level-ground {
    background: #523922;
    position: fixed;
    top: calc(50% + 9rem);
    bottom: 0;
    left: 0;
    right: 0;
  }

  .level {
    background: #bafefc;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -9;
  }
</style>
