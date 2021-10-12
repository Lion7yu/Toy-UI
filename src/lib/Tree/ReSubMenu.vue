<template>
  <TreeSubMenu>
    <template #title>{{ data.title }}</template>
    <template v-for="c of data.children">
      <TreeMenuItem :key="c.id" v-if="!c.children">{{ c.title }}</TreeMenuItem>
      <ReSubMenu v-else :key="c.id" :data="c"></ReSubMenu>
    </template>
  </TreeSubMenu>
</template>

<script>
import { TreeMenuItem } from "../../lib/index"
import { TreeSubMenu } from "../../lib/index"
export default {
  name: 'ReSubMenu',
  components: {
    TreeMenuItem,
    TreeSubMenu,
  },
  props: {
    data: Object
  }
}
</script>

<style>
</style>