<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
import {createApp} from 'vue'
import mitt from 'mitt'
export default {
  name:"LCollapse",
}
</script>

<style scoped lang="scss">
  $grey: #ddd;
  $border-radius: 4px;
  .collapse {
    border: 1px solid $grey;
    border-radius: $border-radius;
  }
</style>