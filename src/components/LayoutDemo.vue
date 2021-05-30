<template>
  <div>
    <h1>Layout 示例</h1>
    <Demo :component="Layout1Demo" />
  </div>
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import Layout1Demo from "./Layout1.demo.vue";
export default {
  components: {
    Demo
  },
  setup() {
    return {
      Layout1Demo,
    };
  },
};
</script>
