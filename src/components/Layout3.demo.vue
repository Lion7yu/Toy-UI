<demo>
常规使用
</demo>
<template>
<div>
<Layout style="color: white;">
  <Header style="height: 50px; background:rgb(125,188,234);">
    header
  </Header>
  <Layout has-sider>
    <Sider style="width:20%; background:rgb(59,160,233)">sider</Sider>
    <Layout>
      <Content style="height: 100px; background:rgb(16,142,233);">
        content
      </Content>
      <Footer style="height: 50px; background:rgb(125,188,234);">
        footer
      </Footer>
    </Layout>
  </Layout>
</Layout>
</div>
</template>

<script lang="ts">
import {Layout} from "../lib/index"
import {Header} from "../lib/index"
import {Content} from "../lib/index"
import {Footer} from "../lib/index"
import {Sider} from "../lib/index"
export default {
  components: {
    Layout,
    Header,
    Content,
    Footer,
    Sider
  }
}
</script>

<style lang="scss" scoped>

</style>