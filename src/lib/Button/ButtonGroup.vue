<template>
  <div class="lion-button-group">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  mounted(){
    for (let node of this.$el.children){
      let name = node.nodeName.toLowerCase()
      if (name !== 'button'){
        console.warn(`lion-button-group 的子元素应为 <Button> ，您输入的子元素为 ${name}`)
      }
    }
  }
}
</script>

<style lang="scss">
$border-radius:4px;
  .lion-button-group{
    display: inline-flex;
    vertical-align: middle;
    > .lion-button{
      border-radius: 0;
      &:not(:first-child){
        margin-left: -1px;
      }
      &:first-child{
        border-top-left-radius: $border-radius;
        border-bottom-left-radius: $border-radius;
      }
      &:last-child{
        border-top-right-radius: $border-radius;
        border-bottom-right-radius: $border-radius;
      }
      &:hover{
        position: relative;
        z-index: 1;
      }
    }
  }
</style>