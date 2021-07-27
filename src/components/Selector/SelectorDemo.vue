<template>
<div>
  <h1>Selector 示例</h1>
  <Demo :component="Selector1Demo" />
</div>
</template>

<script lang="ts">
import Demo from "../Demo.vue";
import Selector1Demo from "./Selector1.demo.vue";
export default {
  components: {
    Demo
  },
  setup() {
    return {
      Selector1Demo,
    };
  },
};
</script>
