<template>
  <li class="toy-menu-group">
    <div class="toy-menu-group-title">
      <slot name="title"></slot>
    </div>
    <ul class="toy-menu-group-list">
      <slot></slot>
    </ul>
  </li>
</template>
<script lang="ts">
export default {
  name: "toy-menu-group",
};
</script>
<style lang="scss" scoped>
@import "../toy.scss";
.toy-menu-group {
  > .toy-menu-group-title {
    font-size: 12px;
    padding: 12px 24px 12px 36px;
  }

  > .toy-menu-group-list {
    list-style: none;
    margin-bottom: 0;

    .toy-menu-item {
      padding: 12px 24px 12px 48px;
    }
  }
}
</style>
