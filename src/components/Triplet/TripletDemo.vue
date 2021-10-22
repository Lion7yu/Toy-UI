<template>
  <h1>Triplet 示例</h1>
  <Demo :component="Triplet1Demo" />
</template>

<script lang="ts">
import Demo from '../Demo.vue'
import Triplet1Demo from './Triplet1.demo.vue'
export default {
  components: {
    Demo
  },
  setup() {
    return {
      Triplet1Demo
    }
  }
}
</script>
