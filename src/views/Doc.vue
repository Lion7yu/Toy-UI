<template>
  <div class="components-page">
    <h4 class="title">组件总览</h4>
    <div class="row">
      <toy-menu
        style="width: 220px;"
        default-selected-key="option-1"
        :default-open-keys="['navigation-1', 'navigation-2']"
      >
        <toy-sub-menu value="navigation-1" :show-arrow="true">
          <template v-slot:title>
            <div class="sub-title">常规组件</div>
          </template>
          <template v-slot:default>
            <toy-menu-item value="option-1">Option 3</toy-menu-item>
            <toy-menu-item value="option-2">Option 4</toy-menu-item>
          </template>
        </toy-sub-menu>
        <toy-sub-menu value="navigation-2">
          <template v-slot:title>
            <div class="sub-title">玩具组件</div>
          </template>
          <template v-slot:default>
            <toy-menu-item value="option-3">Option 3</toy-menu-item>
            <toy-menu-item value="option-4">Option 4</toy-menu-item>
          </template>
        </toy-sub-menu>
        <toy-sub-menu value="navigation-3">
          <template v-slot:title>
            <div class="sub-title">CSS 效果</div>
          </template>
          <template v-slot:default>
            <toy-menu-item value="option-5">Option 5</toy-menu-item>
            <toy-menu-item value="option-6">Option 6</toy-menu-item>
          </template>
        </toy-sub-menu>
      </toy-menu>
    </div>
  </div>
</template>

<script lang="ts">

import { Menu, MenuGroup, MenuItem, SubMenu } from "../lib/index.ts";

export default {
  name: "doc-page",
  components: {
    "toy-menu": Menu,
    "toy-menu-group": MenuGroup,
    "toy-menu-item": MenuItem,
    "toy-sub-menu": SubMenu,
  },
  setup() {
    const onSelect = (key: string | number) => {
      console.log(key);
    };

    const onOpenChange = (keys: Array<string | number>) => {
      console.log(keys);
    };

    return { onSelect, onOpenChange };
  },
};
</script>
<style lang="scss" scoped>
.components-page {
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
}
.sub-title {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
</style>
