<demo>
常规使用
</demo>
<template>
<div>
<Popover trigger="hover">
  <Button>上方弹出</Button>
  <template slot="content">
    弹出内容
  </template>
</Popover>
<Popover position="bottom" trigger="hover">
  <Button>下方弹出</Button>
  <template slot="content">
    弹出内容
  </template>
</Popover>
<Popover position="left" trigger="hover">
  <Button>左边弹出</Button>
  <template slot="content">
    弹出内容
  </template>
</Popover>
<Popover position="right" trigger="hover">
  <Button>右边弹出</Button>
  <template slot="content">
    弹出内容
  </template>
</Popover>
</div>
</template>

<script lang="ts">
import {Popover} from "../lib/index"
import {Button} from "../lib/index"

export default {
  components: {
    Popover,
    Button
  }
}
</script>

<style lang="scss" scoped>

</style>