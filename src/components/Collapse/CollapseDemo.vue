<template>
  <div>
    <h1>Collapse 示例</h1>
    <Demo :component="Collapse1Demo" />
    <Demo :component="Collapse2Demo" />
  </div>
</template>

<script lang="ts">
import Demo from "../Demo.vue";
import Collapse1Demo from "./Collapse1.demo.vue";
import Collapse2Demo from "./Collapse2.demo.vue";
export default {
  components: {
    Demo
  },
  setup() {
    return {
      Collapse1Demo,
      Collapse2Demo,
    };
  },
};
</script>
