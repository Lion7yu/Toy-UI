<demo>
常规使用
</demo>
<template>
  <div>
    <toy-collapse accordion selected="1">
      <toy-collapse-item title="标题1" value="1">内容一</toy-collapse-item>
      <toy-collapse-item title="标题2" value="2">内容二</toy-collapse-item>
      <toy-collapse-item title="标题3" value="3">内容三</toy-collapse-item>
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