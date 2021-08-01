<template>
  <div>
    <h1>Rate 示例</h1>
    <Demo :component="Rate1Demo" />
  </div>
</template>

<script lang="ts">
import Demo from "../Demo.vue";
import Rate1Demo from "./Rate1.demo.vue";
export default {
  components: {
    Demo,
  },
  setup() {
    return {
      Rate1Demo,
    };
  },
};
</script>
