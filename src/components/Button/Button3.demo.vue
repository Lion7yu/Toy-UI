<demo>
ButtonGroup
</demo>
<template>
  <ButtonGroup>
    <Button icon="left">上一页</Button>
    <Button>目录</Button>
    <Button icon="right" iconPosition="right">下一页</Button>
  </ButtonGroup>
</template>

<script lang="ts">
import { Button } from "../../lib/index"
import { ButtonGroup } from "../../lib/index"
export default {
  components: {
    Button,
    ButtonGroup
  }
}
</script>
