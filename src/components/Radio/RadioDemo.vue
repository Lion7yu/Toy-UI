<template>
  <div>
    <h1>Radio 示例</h1>
    <Demo :component="Radio1Demo" />
    <Demo :component="Radio2Demo" />
  </div>
</template>

<script lang="ts">
import Demo from "../Demo.vue";
import Radio1Demo from "./Radio1.demo.vue";
import Radio2Demo from "./Radio2.demo.vue";
export default {
  components: {
    Demo,
  },
  setup() {
    return {
      Radio1Demo,
      Radio2Demo,
    };
  },
};
</script>
