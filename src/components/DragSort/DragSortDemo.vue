
<template>
  <div>
    <h1>DragSort 示例</h1>
    <Demo :component="DragSort1Demo" />
  </div>
</template>
  
  <script lang="ts">
import Demo from "../Demo.vue";
import DragSort1Demo from "./DragSort1.demo.vue";
export default {
  components: {
    Demo
  },
  setup() {
    return {
      DragSort1Demo,
    };
  },
};
</script>
  