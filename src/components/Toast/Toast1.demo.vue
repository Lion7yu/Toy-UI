<demo>
常规使用
</demo>
<template>
<div>
<Button @click="$toast('点击弹出提示')">上方弹出</Button>
<Button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</Button>
<Button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</Button>
</div>
</template>

<script lang="ts">
import {Toast} from "../../lib/index"
import {Button} from "../../lib/index"
export default {
  components: {
    Toast,
    Button
  }
}
</script>

<style lang="scss" scoped>
  .Toast{
    z-index: 30;
  }
</style>