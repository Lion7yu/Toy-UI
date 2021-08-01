<demo>
常规用法
</demo>

<template>
  <Rate
    :num="3"
    :size="30"
    @getRateNum="getRateNum"
  />
</template>

<script lang="ts">
import {Rate} from "../../lib/index"
export default {
  components: {
    Rate,
  },
  setup(){
    const getStartNum = (num) =>{
      console.log(num)
    }

    return {
      getStartNum
    }
  }

}
</script>
