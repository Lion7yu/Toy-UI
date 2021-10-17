<template>
  <div class="toy-layout" :class="has - sider">
    <slot />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
export default {
  name: 'LLayout',
}
</script>

<style lang="scss" >
.toy-layout {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  &[has-sider] {
    flex-direction: row;
  }
}
</style>