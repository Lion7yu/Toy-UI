<template>
  <div
    v-canvas
    class="canvas-wrapper"
    :style="{
      width: canvasWidth + 'px',
      height: canvasHeight + 'px'
    }"
  >
    <canvas
      id="l-canvas"
      :style="{
        width: canvasWidth,
        height: canvasHeight,
        fillStyle: 'black',
      }"
    ></canvas>
  </div>
</template>

<script>
import canvas from './directives/canvas'
export default {
  name: 'Canvas',
  props: {
    canvasWidth: {
      type: Number,
      default: 500
    },
    canvasHeight: {
      type: Number,
      default: 300
    },
    fillStyle: {
      type: String,
      default: "black"
    },
    strokeStyle: {
      type: String,
      default: "black"
    },
    lineWdith: {
      type: Number,
      default: 8
    },
    lineCap: {
      type: String,
      default: "round"
    }


  },
  directives: {
    canvas
  }
}
</script>

<style>
</style>