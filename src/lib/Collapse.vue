<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
import {createApp} from 'vue'
export default {
  name:"LCollapse",
  props:{
    single:{
      type:Boolean,
      default:false
    },
    selected:{
      type:Array,
    }
  },
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