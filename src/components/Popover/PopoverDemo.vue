<template>
  <h1>Popover 示例</h1>
  <Demo :component="Popover1Demo" />
  <Demo :component="Popover2Demo" />
</template>

<script lang="ts">
import Demo from '../Demo.vue'
import Popover1Demo from './Popover1.demo.vue'
import Popover2Demo from './Popover2.demo.vue'
export default {
  components: {
    Demo
  },
  setup() {
    return {
      Popover1Demo,
      Popover2Demo
    }
  }
}
</script>
