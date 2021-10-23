<template>
  <div>
    <h1>ColorPicker 示例</h1>
    <Demo :component="ColorPicker1Demo" />
  </div>
</template>

<script lang="ts">
import Demo from "../Demo.vue";
import ColorPicker1Demo from "./ColorPicker1.demo.vue";
export default {
  components: {
    Demo
  },
  setup() {
    return {
      ColorPicker1Demo,
    };
  },
};
</script>
