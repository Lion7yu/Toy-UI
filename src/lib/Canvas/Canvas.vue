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
      id="t-canvas"
      :style="{
        width: canvasWidth,
        height: canvasHeight,
        strokeStyle: strokeStyle,
        lineWidth: lineWidth,
        lineCap: lineCap
      }"
    ></canvas>
    <div class="reset">
      <button>reset</button>
    </div>
  </div>
</template>

<script>
import canvas from '../directives/canvas.js'
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
    lineWidth: {
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

<style lang="scss" scoped>
.canvas-wrapper {
  display: flex;
  align-items: center;
  .reset {
    padding: 0 8px;
    > button {
      font-size: 16px;
      width: 64px;
      height: 32px;
      border-radius: 4px;
      border: 0;
      cursor: pointer;
      background: #fff;
      border: 1px solid #d9d9d9;
      &:hover {
        border-color: lighten(#40a9ff, 10%);
        color: lighten(#40a9ff, 10%);
      }
    }
  }
}
</style>