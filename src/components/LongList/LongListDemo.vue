<template>
  <div>
    <h1>LongList 示例</h1>
    <Demo :component="LongList1Demo" />
  </div>
</template>
  
  <script lang="ts">
import Demo from "../Demo.vue";
import LongList1Demo from "./LongList1.demo.vue";
export default {
  components: {
    Demo
  },
  setup() {
    return {
      LongList1Demo,
    };
  },
};
</script>
  