<template>
  <router-view />
</template>

<script lang="ts">
import { ref, provide } from "vue";
import SiteHeader from "./views/SiteHeader.vue"
import { router } from "./router";

export default {
  name: "App",
  components: {
    SiteHeader
  },
  setup() {
    const width = document.documentElement.clientWidth;
    const menuVisible = ref(width <= 500 ? false : true);
    provide("menuVisible", menuVisible); // set
    router.afterEach(() => {
      if (width <= 500) {
        menuVisible.value = false;
      }
    });
  },
};
</script>
