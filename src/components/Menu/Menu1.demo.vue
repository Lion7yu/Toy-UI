<demo>
基础用法
</demo>
  
<template>
  <div class="container">
    <h4 class="title">横向菜单</h4>
    <div class="row">
      <toy-menu
        mode="horizontal"
        default-selected-key="option-1"
        @select="onSelect"
        @open-change="onOpenChange"
      >
        <toy-menu-item value="option-1" style="width: 220px;">
          <div class="sub-title">
            <toy-icon name="settings" style="margin-right: 8px;"></toy-icon>Navigation One
          </div>
        </toy-menu-item>
        <toy-sub-menu value="navigation-2" style="width: 220px;">
          <template v-slot:title>
            <div class="sub-title">
              <toy-icon name="thumbnails" style="margin-right: 8px;"></toy-icon>Navigation Two
            </div>
          </template>
          <template v-slot:default>
            <toy-menu-item value="option-2">Option 2</toy-menu-item>
            <toy-menu-item value="option-3">Option 3</toy-menu-item>
            <toy-sub-menu value="sub-menu">
              <template v-slot:title>
                <div class="sub-title">
                  <toy-icon name="database" style="margin-right: 8px;"></toy-icon>Sub Menu
                </div>
              </template>
              <template v-slot:default>
                <toy-menu-item value="option-4">Option 4</toy-menu-item>
                <toy-menu-item value="option-5">Option 5</toy-menu-item>
              </template>
            </toy-sub-menu>
          </template>
        </toy-sub-menu>
        <toy-sub-menu value="navigation-3" style="width: 220px;">
          <template v-slot:title>
            <div class="sub-title">
              <toy-icon name="graph-bar" style="margin-right: 8px;"></toy-icon>Navigation Three
            </div>
          </template>
          <template v-slot:default>
            <toy-menu-item value="option-6">Option 6</toy-menu-item>
            <toy-menu-item value="option-7">Option 7</toy-menu-item>
          </template>
        </toy-sub-menu>
        <toy-sub-menu value="navigation-4" style="width: 220px;" disabled="true">
          <template v-slot:title>
            <div class="sub-title">
              <toy-icon name="records" style="margin-right: 8px;"></toy-icon>Navigation Four
            </div>
          </template>
          <template v-slot:default>
            <toy-menu-item value="option-8">Option 8</toy-menu-item>
            <toy-menu-item value="option-9">Option 9</toy-menu-item>
          </template>
        </toy-sub-menu>
      </toy-menu>
    </div>
    <h4 class="title">纵向菜单</h4>
    <div class="row">
      <toy-menu
        style="width: 220px;"
        default-selected-key="option-1"
        :default-open-keys="['navigation-1', 'navigation-2']"
      >
        <toy-menu-item value="option-1">Option 1</toy-menu-item>
        <toy-menu-item value="option-2" :disabled="true">Option 2</toy-menu-item>
        <toy-sub-menu value="navigation-1" :show-arrow="false">
          <template v-slot:title>
            <div class="sub-title">
              <toy-icon name="settings" style="margin-right: 8px;"></toy-icon>Navigation One
            </div>
          </template>
          <template v-slot:default>
            <toy-menu-item value="option-3">Option 3</toy-menu-item>
            <toy-menu-item value="option-4">Option 4</toy-menu-item>
          </template>
        </toy-sub-menu>
        <toy-menu-item value="option-5">Option 5</toy-menu-item>
        <toy-sub-menu value="navigation-2">
          <template v-slot:title>
            <div class="sub-title">
              <toy-icon name="thumbnails" style="margin-right: 8px;"></toy-icon>Navigation Two
            </div>
          </template>
          <template v-slot:default>
            <toy-menu-group>
              <template v-slot:title>Group One</template>
              <template v-slot:default>
                <toy-menu-item value="option-6">Option 6</toy-menu-item>
                <toy-menu-item value="option-7">Option 7</toy-menu-item>
              </template>
            </toy-menu-group>
            <toy-menu-group>
              <template v-slot:title>Group Two</template>
              <template v-slot:default>
                <toy-menu-item value="option-8" :disabled="true">Option 8</toy-menu-item>
                <toy-menu-item value="option-9">Option 9</toy-menu-item>
              </template>
            </toy-menu-group>
          </template>
        </toy-sub-menu>
        <toy-menu-item value="option-10">Option 10</toy-menu-item>
      </toy-menu>
    </div>
  </div>
</template>
  
<script lang="ts">

import { Menu, MenuGroup, MenuItem, SubMenu } from "../../lib/index";

export default {
  components: {
    "toy-menu": Menu,
    "toy-menu-group": MenuGroup,
    "toy-menu-item": MenuItem,
    "toy-sub-menu": SubMenu
  },
  setup() {
    const onSelect = (key: string | number) => {
      console.log(key);
    };

    const onOpenChange = keys => {
      console.log(keys);
    };

    return { onSelect, onOpenChange };
  },
}
</script>

<style lang="scss" scoped>
.container {
  height: 800px;
}
.picked {
  padding: 10px 0;
}
</style>
  