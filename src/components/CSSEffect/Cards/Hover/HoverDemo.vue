
<template>
  <div>
    <h1>Hover 示例</h1>
    <Demo :component="Hover1Demo" />
  </div>
</template>

<script lang="ts">
import Demo from "../../../Demo.vue";
import Hover1Demo from "./Hover1.demo.vue";
export default {
  components: {
    Demo
  },
  setup() {
    return {
      Hover1Demo,
    };
  },
};
</script>
