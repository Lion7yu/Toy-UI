<demo>
基础用法
</demo>
<template>
  <LongList :data="data" :buffBottom="5" :buffTop="3"></LongList>
</template>
  
<script lang="ts">
import { LongList } from "../../lib/index"

export default {
  components: {
    LongList,
  },
  setup() {
    let data = Array(10000).fill(0).map((v, i) => `item-${i}`)
    return {
      data
    }
  }
}
</script>
  
  <style lang="scss" scoped>
</style>