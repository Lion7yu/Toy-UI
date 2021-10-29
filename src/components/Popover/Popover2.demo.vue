<demo>
支持四个方向
</demo>
<template>
  <toy-popover position="left" trigger="hover">
    <template v-slot:content>
      <div>弹出内容</div>
    </template>
    <toy-button>左侧弹出</toy-button>
  </toy-popover>
  <toy-popover position="top" trigger="hover">
    <template v-slot:content>
      <div>弹出内容</div>
    </template>
    <toy-button>上方弹出</toy-button>
  </toy-popover>
  <toy-popover position="right" trigger="hover">
    <template v-slot:content>
      <div>弹出内容</div>
    </template>
    <toy-button>右侧弹出</toy-button>
  </toy-popover>
  <toy-popover position="bottom" trigger="hover">
    <template v-slot:content>
      <div>弹出内容</div>
    </template>
    <toy-button>下方弹出</toy-button>
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