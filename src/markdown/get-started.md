# 开始使用
请先[安装](#/doc/install)本组件库。

选择你需要的组件，在你的项目中写入下面的代码

```
import { Button } from "toy-ui-1"
```

就可以使用我提供的组件了。

## Vue 单文件组件

代码示例：

```
<template>
  <div>
    <Button>按钮</Button>
  </div>
</template>
<script>
import { Button } from "toy-ui-1"
export default {
  components: { Button }
}
</script>
```