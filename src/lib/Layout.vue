<template>
  <div class="lion-layout" :class ="has-sider">
    <slot />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
export default {
  name:'LLayout',
}
</script>

<style lang="scss" >
  .lion-layout{
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    &[has-sider]{
      flex-direction: row
    }
  }
</style>