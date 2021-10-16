<template>
  <div>
    <h1>Poker 示例</h1>
    <Demo :component="Poker1Demo" />
  </div>
</template>

<script lang="ts">
import Demo from "../../../Demo.vue";
import Poker1Demo from "./Poker1.demo.vue";
export default {
  components: {
    Demo
  },
  setup() {
    return {
      Poker1Demo,
    };
  },
};
</script>
