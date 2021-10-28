<demo>
常规使用
</demo>
<template>
  <Popover>
    <template v-slot:content>
      <div>popover内容</div>
    </template>
    <Button>点我</Button>
  </Popover>
  <Popover position="bottom">
    <template v-slot:content>
      <div>弹出内容</div>
    </template>
    <Button>下方弹出</Button>
  </Popover>
  <Popover position="left" trigger="hover">
    <template v-slot:content>
      <div>弹出内容</div>
    </template>
    <Button>下方弹出</Button>
  </Popover>
  <Popover position="right" trigger="hover">
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