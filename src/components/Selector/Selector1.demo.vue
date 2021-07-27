<demo>
常规使用
</demo>
<template>
  <Selector >
    <Index placehodler="请选择人物"></Index>
  </Selector>
</template>

<script lang="ts">
import {Selector} from "../../lib/index"
import {Index} from "../../lib/index"
export default {
  components: {
    Selector,
    Index
  }
}
</script>

<style lang="scss" scoped>
  .buttonDemo{
    margin-bottom: 8px;
  }
</style>