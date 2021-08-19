<demo>
  常规使用
</demo>
<template>
  <Calendar v-model="date" @change="change"></Calendar>
</template>
  
  <script lang="ts">
import { ref } from 'vue'
import { Calendar } from "../../lib/index"

export default {
  components: {
    Calendar
  },
  setup() {
    let date = ref("2021/8/19")
    const change = (...args) => {
      console.log(args)
    }
    return {
      date,
      change
    }
  }

}
</script>
<style lang="scss" scoped>
</style>