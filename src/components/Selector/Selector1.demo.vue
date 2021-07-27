<demo>
常规使用
</demo>
<template>
  <Selector >
    <Index
    :data="selectorData" 
    placehodler="请选择人物" 
    @setItemValue="setItemValue"
    ></Index>
  </Selector>
</template>

<script lang="ts">
import {Selector} from "../../lib/index"
import {Index} from "../../lib/index"
import selectorData from '../../lib/Selector/selector'
export default {
  components: {
    Selector,
    Index
  },
  setup(){
    const setItemValue = (value) =>{
      console.log(value)
    }
    return{
      selectorData,
      setItemValue
    }
  }
}
</script>

<style lang="scss" scoped>
  .buttonDemo{
    margin-bottom: 8px;
  }
</style>