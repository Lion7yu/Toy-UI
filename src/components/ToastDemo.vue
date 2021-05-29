<template>
<h1>Tabs 示例</h1>
<Demo :component="Toast1Demo" />
</template>

<script lang="ts">
import Demo from './Demo.vue'
import Toast1Demo from './Toast1.demo.vue'
export default {
  components: {
    Demo
  },
  setup() {
    return {
      Toast1Demo
    }
  }
}
</script>
