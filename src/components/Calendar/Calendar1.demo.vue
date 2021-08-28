<demo>
  常规使用
</demo>
<template>
  <Calendar v-model="date" @change="change"></Calendar>
</template>
  
  <script setup>
import { ref } from 'vue'
import { Calendar } from "../../lib/index"

let date = ref("2021-8-20")
const change = (...args) => {
  console.log(args)
}

</script>
<style lang="scss" scoped>
</style>
