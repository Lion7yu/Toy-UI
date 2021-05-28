<template>
  <div>
    <h1>Input 示例</h1>
    <Demo :component="Input1Demo" />
  </div>
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import Input1Demo from "./Input1.demo.vue";
export default {
  components: {
    Demo
  },
  setup() {
    return {
      Input1Demo,
    };
  },
};
</script>
