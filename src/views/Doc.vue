<template>
<div class="layout">
  <Topnav toggleMenuButtonVisible class="nav" />
  <div class="content">
    <aside v-if="menuVisible">
      <h2>文档</h2>
      <ol>
        <li>
          <router-link to="/doc/intro">介绍</router-link>
        </li>
        <li>
          <router-link to="/doc/install">安装</router-link>
        </li>
        <li>
          <router-link to="/doc/get-started">开始使用</router-link>
        </li>
      </ol>
      <h2>组件列表</h2>
      <ol>
        <li>
          <router-link to="/doc/button">Button</router-link>
        </li>
        <li>
          <router-link to="/doc/switch">Switch</router-link>
        </li>
        <li>
          <router-link to="/doc/selector">Selector</router-link>
        </li>
        <li>
          <router-link to="/doc/magnifier">Magnifier</router-link>
        </li>
        <li>
          <router-link to="/doc/dialog">Dialog</router-link>
        </li>
        <li>
          <router-link to="/doc/checkbox">Checkbox</router-link>
        </li>
        <li>
          <router-link to="/doc/rate">Rate</router-link>
        </li>
        <li>
          <router-link to="/doc/tabs">Tabs</router-link>
        </li>
        <li>
          <router-link to="/doc/input">Input</router-link>
        </li>
        <li>
          <router-link to="/doc/grid">Grid</router-link>
        </li>
        <li>
          <router-link to="/doc/layout">Layout</router-link>
        </li>
        <li>
          <router-link to="/doc/collapse">Collapse</router-link>
        </li>
      </ol>
    </aside>
    <main>
      <router-view />
    </main>
  </div>
</div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav/Topnav.vue";
import {
  inject,
  Ref
} from "vue";
export default {
  components: {
    Topnav
  },
  setup() {
    const menuVisible = inject < Ref < boolean >> ("menuVisible"); // get
    return {
      menuVisible
    };
  },
};
</script>

<style lang="scss" scoped>
$aside-index : 10;

.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;

  >.nav {
    flex-shrink: 0;
  }

  >.content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;

    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}

.content {
  display: flex;

  >aside {
    flex-shrink: 0;
  }

  >main {
    flex-grow: 1;
    padding: 16px;
    background: white;
  }
}

aside {
  background: #FFE882;
  width: 120px;
  padding: 16px 0;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
  z-index: $aside-index;

  >h2 {
    margin-bottom: 4px;
    padding: 0 10px;
    text-align: center;
  }

  >ol {
    >li {
      >a {
        display: block;
        padding: 4px 16px;
        text-decoration: none;
        text-align: center;
      }

      .router-link-active {
        border-radius: 4px;
        border: 2px solid #FFE882;
        box-shadow: 0 0 3px 1px white;
        background: white;
      }
    }
  }
}

main {
  overflow: auto;
}
</style>
