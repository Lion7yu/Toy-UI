<template>
<div>
  <h1>Checkbox 示例</h1>
  <Demo :component="Checkbox1Demo" />
  <Demo :component="Checkbox2Demo" />
</div>
</template>

<script lang="ts">
import Demo from "../Demo.vue";
import Checkbox1Demo from "./Checkbox1.demo.vue";
import Checkbox2Demo from "./Checkbox2.demo.vue";
export default {
  components: {
    Demo
  },
  setup() {
    return {
      Checkbox1Demo,
      Checkbox2Demo
    };
  },
};
</script>
