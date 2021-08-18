<template>
  <div>
    <h1>Canvas 示例</h1>
    <Demo :component="Canvas1Demo" />
  </div>
</template>
  
  <script lang="ts">
import Demo from "../Demo.vue";
import Canvas1Demo from "./Canvas1.demo.vue";
export default {
  components: {
    Demo
  },
  setup() {
    return {
      Canvas1Demo,
    };
  },
};
</script>
  