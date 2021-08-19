<template>
  <div>
    <h1>Calendar 示例</h1>
    <Demo :component="Calendar1Demo" />
  </div>
</template>
  
  <script lang="ts">
import Demo from "../Demo.vue";
import Calendar1Demo from "./Calendar1.demo.vue";
export default {
  components: {
    Demo
  },
  setup() {
    return {
      Calendar1Demo,
    };
  },
};
</script>
  