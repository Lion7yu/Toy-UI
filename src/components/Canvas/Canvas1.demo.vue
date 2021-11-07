<demo>
基础用法
</demo>
<template>
  <div class="canvasWrapper">
    <Canvas
      :canvasWidth="canvasWidth"
      :canvasHeight="canvasHeight"
      :fillStyle="fillStyle"
      :strokeStyle="strokeStyle"
      :lineWidth="lineWidth"
      :lineCap="lineCap"
    ></Canvas>
  </div>
</template>
  
  <script lang="ts">
import { reactive, toRefs } from 'vue'
import { Canvas } from "../../lib/index"

export default {
  components: {
    Canvas
  },
  setup() {
    const state = reactive({
      canvasWidth: 500,
      canvasHeight: 300,
      fillStyle: 'black',
      strokeStyle: 'lightblue',
      lineWidth: 8,
      lineCap: 'round'
    })
    return {
      ...toRefs(state)
    }
  }
}
</script>
<style lang="scss" scoped>
.canvasWrapper {
  width: 500px;
  box-shadow: 0 0 3px #000;
  margin: auto;
}
</style>