<template>
  <div>
    <h1>Shutters 示例</h1>
    <Demo :component="Shutters1Demo" />
  </div>
</template>

<script lang="ts">
import Demo from "../../../Demo.vue";
import Shutters1Demo from "./Shutters1.demo.vue";
export default {
  components: {
    Demo
  },
  setup() {
    return {
      Shutters1Demo,
    };
  },
};
</script>
