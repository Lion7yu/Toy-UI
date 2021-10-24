<template>
  <div>
    <h1>Grid 示例</h1>
    <Demo :component="Grid1Demo" />
    <Demo :component="Grid2Demo" />
    <Demo :component="Grid3Demo" />
  </div>
</template>

<script lang="ts">
import Demo from "../Demo.vue";
import Grid1Demo from "./Grid1.demo.vue";
import Grid2Demo from "./Grid2.demo.vue";
import Grid3Demo from "./Grid3.demo.vue";
export default {
  components: {
    Demo
  },
  setup() {
    return {
      Grid1Demo,
      Grid2Demo,
      Grid3Demo,
    };
  },
};
</script>
