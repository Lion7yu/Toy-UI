<demo>
  常规使用
</demo>
<template>
  <Calendar v-model="date"></Calendar>
</template>
  
  <script setup>
import { ref } from 'vue'
import { Calendar } from "../../lib/index"

let date = ref("2021-8-20")


</script>
<style lang="scss" scoped>
</style>
