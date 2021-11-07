<demo>
基础用法
</demo>
<template>
  <Selector>
    <Index :data="selectorData" placeholder="请选择人物"></Index>
  </Selector>
</template>

<script lang="ts">
import { Selector } from "../../lib/index"
import { Index } from "../../lib/index"
import selectorData from '../../lib/Selector/selector'
export default {
  components: {
    Selector,
    Index
  },
  setup() {
    return {
      selectorData,
    }
  }
}
</script>

<style lang="scss" scoped>
.buttonDemo {
  margin-bottom: 8px;
}
</style>