<demo>
常规用法
</demo>

<template>
  <div class="side-bar">
    <Tree>
        <MenuItem
          v-for="item of menuData"
          :key="item.id"
        >{{item.title}}
        </MenuItem>
    </Tree>
  </div>
</template>

<script lang="ts">
import {Tree} from "../../lib/index"
import {MenuItem} from "../../lib/index"
import menuData from "../../lib/Tree/menuData"

export default {
  components: {
    Tree,
    MenuItem
  },
  setup() {
    return{
      menuData
    }
  }
}
</script>

<style lang="scss" scoped>
  .side-bar{
    width: 150px;
  }
</style>