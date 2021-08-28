<demo>
  常规用法
</demo>
  
<template>
  <Radio label="1" v-model:value="labelVal">男</Radio>
  <Radio label="0" v-model:value="labelVal">女</Radio>
  <div class="picked">Picked:{{ labelVal }}</div>
</template>
  
  <script lang="ts">
import { ref } from 'vue'

import { Radio } from "../../lib/index"

export default {
  components: {
    Radio,
  },
  setup() {
    const labelVal = ref('1')
    return { labelVal }
  }
}
</script>

<style lang="scss" scoped>
.picked {
  padding: 10px 0;
}
</style>
  