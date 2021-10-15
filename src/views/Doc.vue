<template>
  <div class="components-page">
    <div class="nav-bar">
      <toy-menu
        :default-open-keys="['navigation-1', 'navigation-2', 'navigation-3', 'navigation-4']"
        v-model:selected-key="selectedKey"
      >
        <toy-sub-menu value="navigation-1" :show-arrow="false">
          <template v-slot:title>
            <div class="sub-title">文档</div>
          </template>
          <template v-slot:default>
            <toy-menu-item value="option-1">
              <div class="router">
                <router-link to="/doc/intro">介绍</router-link>
              </div>
            </toy-menu-item>
            <toy-menu-item value="option-2">
              <div class="router">
                <router-link to="/doc/install">安装</router-link>
              </div>
            </toy-menu-item>
            <toy-menu-item value="option-3">
              <div class="router">
                <router-link to="/doc/get-started">开始使用</router-link>
              </div>
            </toy-menu-item>
          </template>
        </toy-sub-menu>
        <toy-sub-menu value="navigation-2" :show-arrow="false">
          <template v-slot:title>
            <div class="sub-title">常规组件</div>
          </template>
          <template v-slot:default></template>
        </toy-sub-menu>
        <toy-sub-menu value="navigation-3">
          <template v-slot:title>
            <div class="sub-title">玩具组件</div>
          </template>
          <template v-slot:default></template>
        </toy-sub-menu>
        <toy-sub-menu value="navigation-4">
          <template v-slot:title>
            <div class="sub-title">CSS 效果</div>
          </template>
          <template v-slot:default></template>
        </toy-sub-menu>
      </toy-menu>
    </div>
    <div class="example-container">
      <router-view />
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


  },
};
</script>
<style lang="scss" scoped>
.components-page {
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  .nav-bar {
    width: 240px;
    flex-shrink: 0;
    .router {
      > a {
        display: block;
        width: 100%;
        height: 100%;
        &:hover {
          text-decoration: none;
          color: red;
        }
      }
    }
  }
  .example-container {
    flex-grow: 1;
    padding: 0 40px;
    overflow: hidden;
  }
}
.sub-title {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
</style>
