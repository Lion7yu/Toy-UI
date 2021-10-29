<demo>
常规使用
</demo>
<template>
  <toy-popover>
    <template v-slot:content>
      <div>Popover 内容</div>
    </template>
    <toy-button>Click</toy-button>
  </toy-popover>
  <toy-popover trigger="hover">
    <template v-slot:content>
      <div>Popover 内容</div>
    </template>
    <toy-button>Hover</toy-button>
  </toy-popover>
</template>

<script lang="ts">
import { Popover, Button } from "../../lib/index"

export default {
  components: {
    "toy-popover": Popover,
    "toy-button": Button
  }
}
</script>

<style lang="scss" scoped>
.popover {
  padding: 10px;
}
</style>