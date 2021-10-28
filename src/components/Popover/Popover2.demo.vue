<demo>
支持四个方向
</demo>
<template>
  <Popover position="left" trigger="hover">
    <template v-slot:content>
      <div>弹出内容</div>
    </template>
    <Button>左侧弹出</Button>
  </Popover>
  <Popover position="top" trigger="hover">
    <template v-slot:content>
      <div>弹出内容</div>
    </template>
    <Button>上方弹出</Button>
  </Popover>
  <Popover position="right" trigger="hover">
    <template v-slot:content>
      <div>弹出内容</div>
    </template>
    <Button>右侧弹出</Button>
  </Popover>
  <Popover position="bottom" trigger="hover">
    <template v-slot:content>
      <div>弹出内容</div>
    </template>
    <Button>下方弹出</Button>
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