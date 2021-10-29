<demo>
常规使用
</demo>
<template>
  <div>
    <toy-collapse>
      <toy-collapse-item title="标题1">内容一</toy-collapse-item>
      <toy-collapse-item title="标题2">内容二</toy-collapse-item>
      <toy-collapse-item title="标题3">内容三</toy-collapse-item>
    </toy-collapse>
  </div>
</template>

<script lang="ts">
import { Collapse } from "../../lib/index"
import { CollapseItem } from "../../lib/index"

export default {
  components: {
    "toy-collapse": Collapse,
    "toy-collapse-item": CollapseItem
  }
}
</script>

<style lang="scss" scoped>
</style>