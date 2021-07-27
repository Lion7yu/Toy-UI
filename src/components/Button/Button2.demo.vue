<demo>
支持 icon
</demo>
<template>
<div>
  <div >
    <Button icon="settings2">Settings</Button>
    <Button icon="search" iconPosition="left">搜索</Button>
    <Button icon="good" iconPosition="right">点赞</Button>
    <Button icon="heart" iconPosition="right">点赞</Button>
  </div>
  <div>

  </div>
</div>
</template>

<script lang="ts">
import {Button} from "../../lib/index"
import {ButtonGroup} from "../../lib/index"
export default {
  components: {
    Button,
    ButtonGroup,
  }
}
</script>
