<template>
  <SiteHeader />
  <div class="components-page">
    <div class="nav-bar">
      <toy-menu
        :default-open-keys="['doc', 'normalComponents', 'toyComponents', 'cssEffect']"
        v-model:selected-key="selectedKey"
      >
        <toy-sub-menu value="doc" :show-arrow="false">
          <template v-slot:title>
            <div class="sub-title">文档</div>
          </template>
          <template v-slot:default>
            <router-link to="/doc/intro">
              <toy-menu-item value="intro">介绍</toy-menu-item>
            </router-link>
            <router-link to="/doc/install">
              <toy-menu-item value="install">安装</toy-menu-item>
            </router-link>
            <router-link to="/doc/get-started">
              <toy-menu-item value="get-started">开始使用</toy-menu-item>
            </router-link>
          </template>
        </toy-sub-menu>
        <toy-sub-menu value="normalComponents" :show-arrow="false">
          <template v-slot:title>
            <div class="sub-title">常规组件</div>
          </template>
          <template v-slot:default>
            <router-link to="/doc/button">
              <toy-menu-item value="button">Button 按钮</toy-menu-item>
            </router-link>
            <router-link to="/doc/carousel">
              <toy-menu-item value="carousel">Carousel 轮播图</toy-menu-item>
            </router-link>
            <!-- <router-link to="/doc/color-picker">
              <toy-menu-item value="color-picker">ColorPicker 颜色选择器</toy-menu-item>
            </router-link>-->
            <!-- <router-link to="/doc/collapse">
              <toy-menu-item value="option-6">Collapse 手风琴</toy-menu-item>
            </router-link>-->
            <router-link to="/doc/checkbox">
              <toy-menu-item value="checkbox">Checkbox 检查框</toy-menu-item>
            </router-link>
            <router-link to="/doc/dialog">
              <toy-menu-item value="dialog">Dialog 模态框</toy-menu-item>
            </router-link>
            <router-link to="/doc/grid">
              <toy-menu-item value="grid">Grid 栅格</toy-menu-item>
            </router-link>
            <router-link to="/doc/input">
              <toy-menu-item value="input">Input 输入</toy-menu-item>
            </router-link>
            <router-link to="/doc/longlist">
              <toy-menu-item value="longlist">LongList 虚拟长列表</toy-menu-item>
            </router-link>
            <router-link to="/doc/layout">
              <toy-menu-item value="layout">Layout 布局</toy-menu-item>
            </router-link>
            <router-link to="/doc/menu">
              <toy-menu-item value="menu">Menu 菜单</toy-menu-item>
            </router-link>
            <router-link to="/doc/radio">
              <toy-menu-item value="radio">Radio 选择按钮</toy-menu-item>
            </router-link>
            <router-link to="/doc/rate">
              <toy-menu-item value="rate">Rate 评价</toy-menu-item>
            </router-link>
            <router-link to="/doc/selector">
              <toy-menu-item value="selector">Selector 搜索框</toy-menu-item>
            </router-link>
            <router-link to="/doc/switch">
              <toy-menu-item value="switch">switch 开关</toy-menu-item>
            </router-link>
            <router-link to="/doc/tree">
              <toy-menu-item value="tree">Tree 树形控件</toy-menu-item>
            </router-link>
            <router-link to="/doc/tabs">
              <toy-menu-item value="tabs">Tabs 标签</toy-menu-item>
            </router-link>
          </template>
        </toy-sub-menu>
        <toy-sub-menu value="toyComponents">
          <template v-slot:title>
            <div class="sub-title">玩具组件</div>
          </template>
          <template v-slot:default>
            <router-link to="/doc/canvas">
              <toy-menu-item value="canvas">Canvas 画板</toy-menu-item>
            </router-link>
            <router-link to="/doc/calendar">
              <toy-menu-item value="calendar">Calendar 日历</toy-menu-item>
            </router-link>
            <router-link to="/doc/magnifier">
              <toy-menu-item value="magnifier">Magnifier 放大镜</toy-menu-item>
            </router-link>
            <router-link to="/doc/triplet">
              <toy-menu-item value="triplet">Triplet 一键三连</toy-menu-item>
            </router-link>
          </template>
        </toy-sub-menu>
        <toy-sub-menu value="cssEffect">
          <template v-slot:title>
            <div class="sub-title">CSS 效果</div>
          </template>
          <template v-slot:default>
            <toy-menu-group>
              <template v-slot:title>CSS cards</template>
              <template v-slot:default>
                <router-link to="/doc/hover">
                  <toy-menu-item value="hover">Hover 悬停</toy-menu-item>
                </router-link>
                <router-link to="/doc/poker">
                  <toy-menu-item value="poker">Poker 纸牌</toy-menu-item>
                </router-link>
                <router-link to="/doc/shutters">
                  <toy-menu-item value="shutters">Shutters 百叶窗</toy-menu-item>
                </router-link>
              </template>
            </toy-menu-group>
          </template>
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
    overflow-y: auto;
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

