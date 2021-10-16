<template>
  <div class="site-header">
    <toy-menu
      mode="horizontal"
      default-selected-key="option-1"
      @select="onSelect"
      @open-change="onOpenChange"
    >
      <toy-menu-item value="name" style="width: 880px;">
        <div class="sub-title-name">Toy-UI</div>
      </toy-menu-item>
      <router-link to="/">
        <toy-menu-item value="home" style="width: 110px;">
          <div class="sub-title">主页</div>
        </toy-menu-item>
      </router-link>
      <a href="https://github.com/Lion7yu">
        <toy-menu-item value="github" style="width: 110px;">
          <div class="sub-title">GitHub</div>
        </toy-menu-item>
      </a>
      <div class="blog">
        <toy-sub-menu value="blog" style="width: 110px;">
          <template v-slot:title>
            <div class="sub-title">个人博客</div>
          </template>
          <template v-slot:default>
            <a href="https://www.zhihu.com/people/ylion-57">
              <toy-menu-item value="zhihu" style="width:75px">
                <svg class="icon">
                  <use xlink:href="#i-zhihu" />
                </svg>
                <span>Lion7yu</span>
              </toy-menu-item>
            </a>
            <a href="https://www.yuque.com/u12173902">
              <toy-menu-item value="yuque" style="width:75px">
                <svg class="icon">
                  <use xlink:href="#i-yuque" />
                </svg>
                <span>Lion7yu</span>
              </toy-menu-item>
            </a>
          </template>
        </toy-sub-menu>
      </div>
    </toy-menu>
  </div>
</template>

<script>
import { Menu, MenuGroup, MenuItem, SubMenu } from "../lib/index.ts";
export default {
  name: "site-header",
  components: {
    "toy-menu": Menu,
    "toy-menu-item": MenuItem,
    "toy-sub-menu": SubMenu
  }
}
</script>

<style lang="scss" scoped>
.site-header {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .sub-title-name {
    font-size: 20px;
  }
  a {
    &:hover {
      text-decoration: none;
    }
  }
  .blog {
    z-index: 999;
    a {
      position: relative;

      > li {
        display: flex;
        justify-content: center;
        align-items: center;
        > svg {
          padding: 0 8px;
          width: 40px;
          height: 40px;
          flex-shrink: 0;
        }
      }
    }
  }
}
</style>