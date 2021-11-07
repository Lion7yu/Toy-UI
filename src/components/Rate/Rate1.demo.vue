<demo>
基础用法
</demo>

<template>
  <Rate :num="num" :size="size" />
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


    return {
      ...toRefs(state),
    }
  }

}
</script>
