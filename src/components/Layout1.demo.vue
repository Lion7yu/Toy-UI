<demo>
常规使用
</demo>
<template>
<div>
<Layout style="color: white; margin-bottom:50px;">
  <Header style="height: 50px; background:lightskyblue;">
    header
  </Header>
  <Content style="height: 100px; background:deepskyblue;">
    content
  </Content>
  <Footer style="height: 50px; background:lightskyblue;">
    footer
  </Footer>
</Layout>
</div>
</template>

<script lang="ts">
import {Header} from "../lib/index"
import {Content} from "../lib/index"
import {Footer} from "../lib/index"
export default {
  components: {
    Header,
    Content,
    Footer
  }
}
</script>

<style lang="scss" scoped>

</style>