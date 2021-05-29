<demo>
支持 icon
</demo>
<template>
<div>
  <div>
    <Button icon="settings2">Settings</Button>
    <Button icon="good" iconPosition="right">点赞</Button>
  </div>
  <div>
    <ButtonGroup>
      <Button icon="left">上一页</Button>
      <Button>目录</Button>
      <Button icon="right" iconPosition="right">下一页</Button>
    </ButtonGroup>
  </div>
</div>
</template>

<script lang="ts">
import {Button} from "../lib/index"
import {ButtonGroup} from "../lib/index"
export default {
  components: {
    Button,
    ButtonGroup,
  }
}
</script>
