<demo>
基础用法
</demo>
<template>
  <Tabs v-model:selected="selected">
    <Tab title="导航1">内容1</Tab>
    <Tab title="导航2">内容2</Tab>
  </Tabs>
</template>

<script lang="ts">
import { Tabs } from "../../lib/index"
import { Tab } from "../../lib/index"
import {
  ref
} from 'vue'
export default {
  components: {
    Tabs,
    Tab
  },
  setup() {
    const selected = ref('导航2')
    return {
      selected
    }
  }
}
</script>
