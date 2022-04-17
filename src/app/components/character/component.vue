<template>
  <div
    :style="app.queries.characterPosition(level, character)"
    class="character"
    v-html="img"
  />
</template>

<script>
const dappy = '<svg width="100%" height="100%" viewBox="0 0 525 484" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><rect id="Artboard2" x="0" y="3.985" width="524.939" height="479.211" style="fill:none;"/><clipPath id="_clip1"><rect x="0" y="3.985" width="524.939" height="479.211"/></clipPath><g clip-path="url(#_clip1)"><g><path d="M437.272,420.992l-131.585,-0l23.198,62.204l90.815,-0l17.572,-62.204Z" style="fill:#90653d;"/><path d="M200.323,420.992l-131.585,-0l23.199,62.204l90.814,-0l17.572,-62.204Z" style="fill:#90653d;"/><path d="M195.548,4.487c87.16,-15.762 330.736,344.491 309.349,419.164c-14.356,50.127 -434.618,25.053 -464.629,19.651c-132.695,-23.889 113.799,-185.292 144.317,-333.146c18.981,-91.954 -85.16,-11.581 -85.16,-11.581c0,-0 8.963,-78.327 96.123,-94.088Z" style="fill:$COLOR;"/><path d="M499.378,379.167c-0.457,13.121 -4.155,22.435 -10.922,24.672c-13.083,4.323 -32.713,-19.431 -43.81,-53.011c-11.097,-33.581 -9.485,-64.354 3.597,-68.677c2.495,-0.825 5.228,-0.628 8.092,0.463c16.674,27.348 31.284,58.987 43.043,96.553Z" style="fill:#ad6c2f;"/><path d="M453.236,371.688c-0,-0 39.046,-11.723 43.845,-23.759c4.798,-12.036 35.837,-7.933 22.718,5.917c-13.118,13.851 -56.537,34.426 -56.537,34.426c-3.678,-5.048 -7.419,-10.665 -10.026,-16.584Z" style="fill:#ad1000;"/><path d="M342.093,74.093c36.973,-12.422 77.075,7.511 89.496,44.484c12.422,36.973 -7.51,77.075 -44.483,89.496c-36.973,12.422 -77.075,-7.511 -89.497,-44.484c-12.422,-36.972 7.511,-77.075 44.484,-89.496Z" style="fill:#fefefe;"/><path d="M408.303,126.4c13.928,-4.679 29.035,2.829 33.714,16.757c4.679,13.928 -2.829,29.034 -16.757,33.714c-13.928,4.679 -29.034,-2.83 -33.714,-16.757c-4.679,-13.928 2.83,-29.035 16.757,-33.714Z"/><ellipse cx="227.401" cy="302.309" rx="53.878" ry="83.902" style="fill:#845122;"/><path d="M227.401,218.407c29.736,0 53.878,37.595 53.878,83.902c0,46.308 -24.142,83.903 -53.878,83.903l0,-167.805Z" style="fill:#67411f;"/></g></g></svg>'

export default {
  props: ['app', 'level', 'character'],
  computed: {
    img () {
      return dappy.replace(/\$COLOR/, this.character.color)
    }
  }
}
</script>

<style lang="scss">
  .character {
    width: 6rem;
    position: fixed;
    transition: margin 30ms linear;
  }
</style>
