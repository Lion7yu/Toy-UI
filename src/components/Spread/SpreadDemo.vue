<template>
  <h1>Spread 示例</h1>
  <Demo :component="Spread1Demo" />
</template>

<script lang="ts">
import Demo from '../Demo.vue'
import Spread1Demo from './Spread1.demo.vue'
export default {
  components: {
    Demo
  },
  setup() {
    return {
      Spread1Demo
    }
  }
}
</script>
