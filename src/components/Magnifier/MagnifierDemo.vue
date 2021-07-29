<template>
  <div>
    <h1>Magnifier 示例</h1>
    <Demo :component="Magnifier1Demo" />
  </div>
</template>

<script lang="ts">
import Demo from "../Demo.vue";
import Magnifier1Demo from "./Magnifier1.demo.vue";
export default {
  components: {
    Demo,
  },
  setup() {
    return {
      Magnifier1Demo,
    };
  },
};
</script>
