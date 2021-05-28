<demo>
常规使用
</demo>
<template>
<div>
  <Button icon="good" iconPosition="right">你好</Button>
  <Button icon="settings2">你好</Button>
  <Button icon="left" iconPosition="right">你好</Button>
</div>
  <div>
  <ButtonGroup>
    <Button icon="left">上一页</Button>
    <Button>目录</Button>
    <Button icon="right" iconPosition="right">下一页</Button>
  </ButtonGroup>
  </div>
</template>

<script lang="ts">
import {Button} from "../lib/index"
import {ButtonGroup} from "../lib/index"
export default {
  components: {
    Button,
    ButtonGroup
  }
}
</script>
