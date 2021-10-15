<demo>
  常规用法
</demo>
  
<template>
  <div class="container">
    <h4 class="title">横向菜单</h4>
    <div class="row">
      <dwc-menu
        mode="horizontal"
        default-selected-key="option-1"
        @select="onSelect"
        @open-change="onOpenChange"
      >
        <dwc-menu-item value="option-1" style="width: 220px;">
          <div class="sub-title">
            <dwc-icon name="settings" style="margin-right: 8px;"></dwc-icon>Navigation One
          </div>
        </dwc-menu-item>
        <dwc-sub-menu value="navigation-2" style="width: 220px;">
          <template v-slot:title>
            <div class="sub-title">
              <dwc-icon name="thumbnails" style="margin-right: 8px;"></dwc-icon>Navigation Two
            </div>
          </template>
          <template v-slot:default>
            <dwc-menu-item value="option-2">Option 2</dwc-menu-item>
            <dwc-menu-item value="option-3">Option 3</dwc-menu-item>
            <dwc-sub-menu value="sub-menu">
              <template v-slot:title>
                <div class="sub-title">
                  <dwc-icon name="database" style="margin-right: 8px;"></dwc-icon>Sub Menu
                </div>
              </template>
              <template v-slot:default>
                <dwc-menu-item value="option-4">Option 4</dwc-menu-item>
                <dwc-menu-item value="option-5">Option 5</dwc-menu-item>
              </template>
            </dwc-sub-menu>
          </template>
        </dwc-sub-menu>
        <dwc-sub-menu value="navigation-3" style="width: 220px;">
          <template v-slot:title>
            <div class="sub-title">
              <dwc-icon name="graph-bar" style="margin-right: 8px;"></dwc-icon>Navigation Three
            </div>
          </template>
          <template v-slot:default>
            <dwc-menu-item value="option-6">Option 6</dwc-menu-item>
            <dwc-menu-item value="option-7">Option 7</dwc-menu-item>
          </template>
        </dwc-sub-menu>
        <dwc-sub-menu value="navigation-4" style="width: 220px;" disabled="true">
          <template v-slot:title>
            <div class="sub-title">
              <dwc-icon name="records" style="margin-right: 8px;"></dwc-icon>Navigation Four
            </div>
          </template>
          <template v-slot:default>
            <dwc-menu-item value="option-8">Option 8</dwc-menu-item>
            <dwc-menu-item value="option-9">Option 9</dwc-menu-item>
          </template>
        </dwc-sub-menu>
      </dwc-menu>
    </div>
    <h4 class="title">纵向菜单</h4>
    <div class="row">
      <dwc-menu
        style="width: 220px;"
        default-selected-key="option-1"
        :default-open-keys="['navigation-1', 'navigation-2']"
      >
        <dwc-menu-item value="option-1">Option 1</dwc-menu-item>
        <dwc-menu-item value="option-2" :disabled="true">Option 2</dwc-menu-item>
        <dwc-sub-menu value="navigation-1" :show-arrow="false">
          <template v-slot:title>
            <div class="sub-title">
              <dwc-icon name="settings" style="margin-right: 8px;"></dwc-icon>Navigation One
            </div>
          </template>
          <template v-slot:default>
            <dwc-menu-item value="option-3">Option 3</dwc-menu-item>
            <dwc-menu-item value="option-4">Option 4</dwc-menu-item>
          </template>
        </dwc-sub-menu>
        <dwc-menu-item value="option-5">Option 5</dwc-menu-item>
        <dwc-sub-menu value="navigation-2">
          <template v-slot:title>
            <div class="sub-title">
              <dwc-icon name="thumbnails" style="margin-right: 8px;"></dwc-icon>Navigation Two
            </div>
          </template>
          <template v-slot:default>
            <dwc-menu-group>
              <template v-slot:title>Group One</template>
              <template v-slot:default>
                <dwc-menu-item value="option-6">Option 6</dwc-menu-item>
                <dwc-menu-item value="option-7">Option 7</dwc-menu-item>
              </template>
            </dwc-menu-group>
            <dwc-menu-group>
              <template v-slot:title>Group Two</template>
              <template v-slot:default>
                <dwc-menu-item value="option-8" :disabled="true">Option 8</dwc-menu-item>
                <dwc-menu-item value="option-9">Option 9</dwc-menu-item>
              </template>
            </dwc-menu-group>
          </template>
        </dwc-sub-menu>
        <dwc-menu-item value="option-10">Option 10</dwc-menu-item>
      </dwc-menu>
    </div>
  </div>
</template>
  
<script lang="ts">

import { Menu, MenuGroup, MenuItem, SubMenu } from "../../lib/index";

export default {
  components: {
    "dwc-menu": Menu,
    "dwc-menu-group": MenuGroup,
    "dwc-menu-item": MenuItem,
    "dwc-sub-menu": SubMenu
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
  