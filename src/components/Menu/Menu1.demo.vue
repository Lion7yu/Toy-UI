<template>
  <div class="container">
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

import { Menu, MenuGroup, MenuItem, SubMenu } from "../../lib/index.ts";

export default {
  name: "button-example",
  components: {
    "dwc-menu": Menu,
    "dwc-menu-group": MenuGroup,
    "dwc-menu-item": MenuItem,
    "dwc-sub-menu": SubMenu,
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
.sub-title {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
</style>
