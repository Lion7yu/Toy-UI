<template>
  <div class="rate-wrapper">
    <span
      v-for="rateNum in 5"
      :key="rateNum" 
      :class="[
        'iconfont i-start',
        rateNum <= num? 'active' : ''
      ]"
      :style="{fontSize: size + 'px' }"
    ></span>
  </div>
</template>

<script>
export default {
  name: 'Rate',
  props:{
    num:{
      type: Number,
      defaule: 0
    },
    size:{
      type: Number,
      default:30
    } 
  }
}
</script>

<style lang="scss" scoped>
  .iconfont{
    font-size: 16px;
    color: #999;

    &.i-start{
      transition: color .3s;
    }

    &.active{
      color: #FBAB06;
    }
  }
</style>