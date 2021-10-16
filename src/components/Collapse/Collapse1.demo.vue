<demo>
常规使用
</demo>
<template>
  <div>
    <Collapse direction="vertical">
      <ul>
        <Collapse-item title="标题1" name="1">1</Collapse-item>
        <Collapse-item title="标题2" name="2">2</Collapse-item>
        <Collapse-item title="标题3" name="3">3</Collapse-item>
      </ul>
    </Collapse>
  </div>
</template>

<script lang="ts">
import { Collapse } from "../../lib/index"
import { CollapseItem } from "../../lib/index"

export default {
  components: {
    Collapse,
    CollapseItem
  }
}
</script>

<style lang="scss" scoped>
</style>