<template>
  <div>
    <h1>Tree 示例</h1>
    <Demo :component="Tree1Demo" />
  </div>
</template>

<script lang="ts">
import Demo from "../Demo.vue";
import Tree1Demo from "./Tree1.demo.vue";
export default {
  components: {
    Demo,
  },
  setup() {
    return {
      Tree1Demo,
    };
  },
};
</script>
