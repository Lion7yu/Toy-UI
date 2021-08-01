<template>
  <SubMenu>
    <template #title>{{data.title}}</template>
    <template v-for="c of data.children">
      <MenuItem 
        :key="c.id"
        v-if="!c.children"
        >
        {{c.title}}
      </MenuItem>
      <ReSubMenu v-else 
      :key="c.id"
      :data="c"
      ></ReSubMenu>
    </template>
  </SubMenu>
</template>

<script>
import {MenuItem} from "../../lib/index"
import {SubMenu} from "../../lib/index"
export default {
  name: 'ReSubMenu',
  components: {
    MenuItem,
    SubMenu,
  },
  props: {
    data: Object
  }
}
</script>

<style>

</style>