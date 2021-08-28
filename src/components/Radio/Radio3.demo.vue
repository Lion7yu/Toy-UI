<demo>
  常规用法
</demo>
  
<template>
  <RadioGroup v-model="gender">
    <Radio label="1">男</Radio>
    <Radio label="0">女</Radio>
  </RadioGroup>
</template>
  
  <script lang="ts">
import { reactive, toRefs } from 'vue'

import { Radio } from "../../lib/index"
import { RadioGroup } from "../../lib/index"

export default {
  components: {
    Radio,
    RadioGroup,
  },
  data() {
    return {
      gender: '1'
    }
  }
}
</script>
  