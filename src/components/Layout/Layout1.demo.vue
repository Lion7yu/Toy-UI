<demo>
布局一
</demo>
<template>
  <div>
    <Layout style="color: white;">
      <Header style="height: 50px; background:rgb(125,188,234);">header</Header>
      <Layout has-sider>
        <Sider style="height:100px;width:20%; background:rgb(59,160,233)">sider</Sider>
        <Content style="height: 100px; background:rgb(16,142,233);">content</Content>
      </Layout>
      <Footer style="height: 50px; background:rgb(125,188,234);">footer</Footer>
    </Layout>
  </div>
</template>

<script lang="ts">
import { Layout } from "../../lib/index"
import { Header } from "../../lib/index"
import { Content } from "../../lib/index"
import { Footer } from "../../lib/index"
import { Sider } from "../../lib/index"
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