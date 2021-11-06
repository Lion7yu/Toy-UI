<demo>
基础用法
</demo>

<template>
  <div class="side-bar">
    <Tree>
      <template v-for="item of menuData">
        <TreeMenuItem v-if="!item.children" :key="item.id">{{ item.title }}</TreeMenuItem>
        <ReSubMenu :key="item.id" :data="item" v-else></ReSubMenu>
      </template>
    </Tree>
  </div>
</template>

<script lang="ts">
import { Tree } from "../../lib/index"
import { TreeMenuItem } from "../../lib/index"
import { TreeSubMenu } from "../../lib/index"
import { ReSubMenu } from "../../lib/index"
import menuData from "../../lib/Tree/menuData"

export default {
  components: {
    Tree,
    TreeMenuItem,
    TreeSubMenu,
    ReSubMenu
  },
  setup() {
    return {
      menuData
    }
  }
}
</script>

<style lang="scss" scoped>
.side-bar {
  width: 150px;
}
</style>