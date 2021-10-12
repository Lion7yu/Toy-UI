<demo>
常规使用
</demo>
<template>
  <Menu>
    <MenuItem></MenuItem>
    <MenuGroup></MenuGroup>
  </Menu>
  <SubMenu></SubMenu>

  <MenuItem></MenuItem>
  <MenuGroup></MenuGroup>
</template>

<script lang="ts">
import { Menu } from "../../lib/index"
import { MenuItem } from "../../lib/index"
import { SubMenu } from "../../lib/index"
import { MenuGroup } from "../../lib/index"



export default {
  components: {
    Menu,
    MenuGroup,
    MenuItem,
    SubMenu
  }
}
</script>

<style lang="scss" scoped>
</style>