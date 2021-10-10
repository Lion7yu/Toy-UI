<template>
  <div class="topnav">
    <router-link to="/" class="logo">
      <svg class="icon">
        <use xlink:href="#i-wanju" />
      </svg>
      <span>HOME</span>
    </router-link>
    <router-link to="/doc" class="docLogo">
      <svg class="icon">
        <use xlink:href="#i-doc1" />
      </svg>
      <span>DOC</span>
    </router-link>
    <svg v-if="toggleMenuButtonVisible" class="toggleAside" @click="toggleMenu">
      <use xlink:href="#i-menu" />
    </svg>
  </div>
</template>

<script lang="ts">
import {
  inject,
  Ref
} from "vue";
export default {
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible"); // get
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };
    return {
      toggleMenu
    };
  },
};
</script>

<style lang="scss" scoped>
$color: #000;

.topnav {
  color: $color;
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  justify-content: center;
  align-items: center;

  > .logo {
    max-width: 6em;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &:hover {
      text-decoration: none;
    }
    span {
      font-size: 0.5em;
      color: rgb(255, 215, 46);
    }

    > svg {
      margin: 0 26px;
      width: 32px;
      height: 32px;
    }
  }
  > .docLogo {
    max-width: 6em;
    margin-left: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &:hover {
      text-decoration: none;
    }
    span {
      font-size: 0.5em;
      color: rgb(255, 215, 46);
    }

    > svg {
      margin: 0 26px;
      width: 32px;
      height: 32px;
    }
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    > li {
      margin: 0 1em;
    }
  }

  > .toggleAside {
    width: 32px;
    height: 32px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
    background: fade-out(black, 0.9);
  }

  @media (max-width: 500px) {
    > .menu {
      display: none;
    }

    > .logo {
      margin: 0 auto;
    }

    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>
