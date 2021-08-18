<demo>
  常规使用
</demo>
<template>
  <div class="wrapper">
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
      strokeStyle: 'black',
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
.wrapper {
  border: 1px solid red;
  width: 500px;
  margin: auto;
}
</style>