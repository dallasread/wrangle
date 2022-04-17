<template>
  <div
    class="level"
  />
  <div
    class="level-ground"
  />
</template>

<script>
export default {
}
</script>

<style lang="scss">
  .level-ground {
    background: #523922;
    position: absolute;
    top: calc(50% + 9rem);
    bottom: 0;
    left: 0;
    right: 0;
  }

  .level {
    background: #bafefc;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -9;
  }
</style>
