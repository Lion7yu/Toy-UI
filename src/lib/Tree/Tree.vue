<template>
  <div class="tree-menu">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TreeMenu'
}
</script>

<style lang="scss" scoped>
  .tree-menu{
    width: 100%;
    background-color: #fff;
    box-shadow: 0 0 10px 1px #ddd;
  }
</style>