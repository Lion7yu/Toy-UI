<template>
  <div>
    <h1>Radio 示例</h1>
    <Demo :component="Radio1Demo" />
  </div>
</template>

<script lang="ts">
import Demo from "../Demo.vue";
import Radio1Demo from "./Radio1.demo.vue";
export default {
  components: {
    Demo,
  },
  setup() {
    return {
      Radio1Demo,
    };
  },
};
</script>
