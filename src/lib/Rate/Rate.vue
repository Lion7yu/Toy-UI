<template>
  <div class="rate-wrapper">
    <span
      v-for="num in 5"
      :key="num" 
      :class="[
        'iconfont i-start',
        num <= rateNum? 'active' : ''
      ]"
      :style="{fontSize: size + 'px' }"
      @click="setRateNum(num)"
    ></span>
  </div>
</template>

<script>

import { rate } from "./hooks/rate"

export default {
  name: 'Rate',
  props:{
    num:{
      type: Number,
      default: 0
    },
    size:{
      type: Number,
      default: 30
    } 
  },
  setup(props, ctx) {
    const [ rateNum, setRateNum ] = rate(props.num, ()=>{
      ctx.emit('getRateNum', rateNum.value)
    })

    return{
      rateNum,
      setRateNum
    }
  }
}
</script>

<style lang="scss" scoped>
  .iconfont{
    font-size: 16px;
    color: #999;
    cursor: pointer;

    &.i-start{
      transition: color .3s;
    }

    &.active{
      color: #FBAB06;
    }
  }
</style>