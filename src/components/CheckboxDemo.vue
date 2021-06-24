<template>
<div>
  <h1>Checkbox 示例</h1>
  <Demo :component="Checkbox1Demo" />
</div>
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import Checkbox1Demo from "./Checkbox1.demo.vue";
export default {
  components: {
    Demo
  },
  setup() {
    return {
      Checkbox1Demo
    };
  },
};
</script>
