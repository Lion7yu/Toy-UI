<template>
  <li class="dwc-menu-group">
    <div class="dwc-menu-group-title">
      <slot name="title"></slot>
    </div>
    <ul class="dwc-menu-group-list">
      <slot></slot>
    </ul>
  </li>
</template>
<script lang="ts">
export default {
  name: "dwc-menu-group",
};
</script>
<style lang="scss">
.dwc-menu-group {
  > .dwc-menu-group-title {
    font-size: 12px;
    padding: 12px 24px 12px 36px;
  }

  > .dwc-menu-group-list {
    list-style: none;
    margin-bottom: 0;

    .dwc-menu-item {
      padding: 12px 24px 12px 48px;
    }
  }
}
</style>
