<template>
  <SiteHeader />
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
            <router-link to="/doc/intro">
              <toy-menu-item value="option-1">介绍</toy-menu-item>
            </router-link>
            <router-link to="/doc/install">
              <toy-menu-item value="option-2">安装</toy-menu-item>
            </router-link>
            <router-link to="/doc/get-started">
              <toy-menu-item value="option-3">开始使用</toy-menu-item>
            </router-link>
          </template>
        </toy-sub-menu>
        <toy-sub-menu value="navigation-2" :show-arrow="false">
          <template v-slot:title>
            <div class="sub-title">常规组件</div>
          </template>
          <template v-slot:default>
            <router-link to="/doc/button">
              <toy-menu-item value="option-4">Button 按钮</toy-menu-item>
            </router-link>
            <router-link to="/doc/carousel">
              <toy-menu-item value="option-5">Carousel 轮播图</toy-menu-item>
            </router-link>
            <router-link to="/doc/collapse">
              <toy-menu-item value="option-6">Collapse 手风琴</toy-menu-item>
            </router-link>
            <router-link to="/doc/checkbox">
              <toy-menu-item value="option-7">Checkbox 检查框</toy-menu-item>
            </router-link>
            <router-link to="/doc/dialog">
              <toy-menu-item value="option-8">Dialog 模态框</toy-menu-item>
            </router-link>
            <router-link to="/doc/grid">
              <toy-menu-item value="option-9">Grid 栅格</toy-menu-item>
            </router-link>
            <router-link to="/doc/input">
              <toy-menu-item value="option-10">Input 输入</toy-menu-item>
            </router-link>
            <router-link to="/doc/longlist">
              <toy-menu-item value="option-11">LongList 虚拟长列表</toy-menu-item>
            </router-link>
            <router-link to="/doc/layout">
              <toy-menu-item value="option-12">Layout 布局</toy-menu-item>
            </router-link>
            <router-link to="/doc/menu">
              <toy-menu-item value="option-13">Menu 菜单</toy-menu-item>
            </router-link>
            <router-link to="/doc/radio">
              <toy-menu-item value="option-14">Radio 选择按钮</toy-menu-item>
            </router-link>
            <router-link to="/doc/rate">
              <toy-menu-item value="option-15">Rate 评价</toy-menu-item>
            </router-link>
            <router-link to="/doc/selector">
              <toy-menu-item value="option-16">Selector 搜索框</toy-menu-item>
            </router-link>
            <router-link to="/doc/switch">
              <toy-menu-item value="option-17">switch 开关</toy-menu-item>
            </router-link>
            <router-link to="/doc/tree">
              <toy-menu-item value="option-18">Tree 树形控件</toy-menu-item>
            </router-link>
            <router-link to="/doc/tabs">
              <toy-menu-item value="option-19">Tabs 标签</toy-menu-item>
            </router-link>
          </template>
        </toy-sub-menu>
        <toy-sub-menu value="navigation-3">
          <template v-slot:title>
            <div class="sub-title">玩具组件</div>
          </template>
          <template v-slot:default>
            <router-link to="/doc/canvas">
              <toy-menu-item value="option-20">Canvas 画板</toy-menu-item>
            </router-link>
            <router-link to="/doc/calendar">
              <toy-menu-item value="option-21">Calendar 日历</toy-menu-item>
            </router-link>
            <router-link to="/doc/magnifier">
              <toy-menu-item value="option-22">Magnifier 放大镜</toy-menu-item>
            </router-link>
          </template>
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
import SiteHeader from "./SiteHeader.vue"

export default {
  name: "doc-page",
  components: {
    "toy-menu": Menu,
    "toy-menu-group": MenuGroup,
    "toy-menu-item": MenuItem,
    "toy-sub-menu": SubMenu,
    SiteHeader
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
    a {
      &:hover {
        text-decoration: none;
      }
    }
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
    height: 100%;
    padding: 0 40px;
    overflow: hidden;
    overflow: auto;
  }
}
.sub-title {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
</style>

