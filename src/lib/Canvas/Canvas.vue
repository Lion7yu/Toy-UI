<template>
  <div v-canvas class="canvas-wrapper">
    <canvas id="l-canvas"></canvas>
  </div>
</template>

<script>
import canvas from './directives/canvas'
export default {
  name: 'Canvas',
  directives: {
    canvas
  }
}
</script>

<style>
</style>