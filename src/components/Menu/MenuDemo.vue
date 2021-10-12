<template>
  <h1>Menu 示例</h1>
  <Demo :component="Menu1Demo" />
</template>

<script lang="ts">
import Demo from '../Demo.vue'
import Menu1Demo from './Menu1.demo.vue'
export default {
  components: {
    Demo
  },
  setup() {
    return {
      Menu1Demo
    }
  }
}
</script>
