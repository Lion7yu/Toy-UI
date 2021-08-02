<template>
<div>
  <h1>Carousel 示例</h1>
  <Demo :component="Carousel1Demo" />
</div>
</template>

<script lang="ts">
import Demo from "../Demo.vue";
import Carousel1Demo from "./Carousel1.demo.vue";
export default {
  components: {
    Demo
  },
  setup() {
    return {
      Carousel1Demo,
    };
  },
};
</script>
