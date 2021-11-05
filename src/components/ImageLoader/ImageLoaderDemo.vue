<template>
  <div>
    <h1>ImageLoader 示例</h1>
    <Demo :component="ImageLoader1Demo" />
  </div>
</template>
  
  <script lang="ts">
import Demo from "../Demo.vue";
import ImageLoader1Demo from "./ImageLoader1.demo.vue";
export default {
  components: {
    Demo
  },
  setup() {
    return {
      ImageLoader1Demo,
    };
  },
};
</script>
  