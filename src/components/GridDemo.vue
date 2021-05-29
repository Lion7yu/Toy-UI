<template>
  <div>
    <h1>Grid 示例</h1>
    <Demo :component="Grid1Demo" />
  </div>
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import Grid1Demo from "./Grid1.demo.vue";
export default {
  components: {
    Demo
  },
  setup() {
    return {
      Grid1Demo,
    };
  },
};
</script>
