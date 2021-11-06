<demo>
基础用法
</demo>

<template>
  <Rate :num="num" :size="size" @getRateNum="getRateNum" />
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue'
import { Rate } from "../../lib/index"

export default {
  components: {
    Rate,
  },
  setup() {

    const state = reactive({
      num: 3,
      size: 30
    })

    const getRateNum = (num) => {
      console.log(num)
    }

    return {
      ...toRefs(state),
      getRateNum
    }
  }

}
</script>
