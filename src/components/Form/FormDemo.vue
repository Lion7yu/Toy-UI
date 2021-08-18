<template>
  <div>
    <h1>Form 示例</h1>
    <Demo :component="Form1Demo" />
  </div>
</template>
  
  <script lang="ts">
import Demo from "../Demo.vue";
import Form1Demo from "./Form1.demo.vue";
export default {
  components: {
    Demo
  },
  setup() {
    return {
      Form1Demo,
    };
  },
};
</script>
  