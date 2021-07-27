<template>
<h1>Popover 示例</h1>
<Demo :component="Popover1Demo" />
</template>

<script lang="ts">
import Demo from '../Demo.vue'
import Popover1Demo from './Popover1.demo.vue'
export default {
  components: {
    Demo
  },
  setup() {
    return {
      Popover1Demo
    }
  }
}
</script>
