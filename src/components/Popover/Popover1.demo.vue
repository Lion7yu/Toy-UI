<demo>
常规使用
</demo>
<template>
  <Popover>
    <template v-slot:content>
      <div>Popover 内容</div>
    </template>
    <Button>Click</Button>
  </Popover>
  <Popover trigger="hover">
    <template v-slot:content>
      <div>Popover 内容</div>
    </template>
    <Button>Hover</Button>
  </Popover>
</template>

<script lang="ts">
import { Popover, Button } from "../../lib/index"

export default {
  components: {
    Popover,
    Button
  }
}
</script>

<style lang="scss" scoped>
.popover {
  padding: 10px;
}
</style>