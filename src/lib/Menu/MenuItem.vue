<template>
  <li
    class="toy-menu-item"
    :class="{
      active: selectedKey === value,
      [mode]: true,
      disabled: disabled === true || disabled === 'true',
    }"
    @click="onClick"
  >
    <slot></slot>
  </li>
</template>
<script lang="ts">
import { inject } from "vue";

import {
  TOYMenuMode,
  TOYMenuParentKey,
  TOYMenuSetRelationship,
  TOYMenuSelectedKey,
  TOYMenuSetSelectedKey,
} from "./Menu.vue";

export default {
  name: "toy-menu-item",
  props: {
    disabled: { type: [Boolean, String], default: false },
    value: { type: [Number, String], required: true },
  },
  setup(props) {
    const mode = inject(TOYMenuMode);
    const parentKey = inject(TOYMenuParentKey);

    const setRelationship = inject(TOYMenuSetRelationship);
    const selectedKey = inject(TOYMenuSelectedKey);
    const setSelectdKey = inject(TOYMenuSetSelectedKey);

    setRelationship(props.value, parentKey);

    const onClick = () => {
      if (props.disabled === true || props.disabled === "true") {
        return;
      }

      if (selectedKey.value !== props.value) {
        setSelectdKey(props.value);
      }
    };

    return { mode, selectedKey, onClick };
  },
};
</script>
<style lang="scss">
@import "../toy.scss";
.toy-menu {
  &.horizontal {
    > .toy-menu-item {
      &.active {
        background-color: #fff;

        &::after {
          position: absolute;
          bottom: -1px;
          right: 0;
          left: 0;
          display: block;
          content: "";
          height: 2px;
        }
      }
    }
  }
}

.toy-menu-item {
  cursor: pointer;
  padding: 12px 24px;
  background-color: #fff;
  position: relative;
  white-space: nowrap;

  &:hover {
    color: $toy-blue-highlight;
  }

  &.active {
    color: $toy-blue;
    background-color: $toy-background-selected;
  }

  &.vertical {
    &.active {
      &::after {
        transform: scale(1);
      }
    }

    &::after {
      position: absolute;
      top: 0;
      bottom: 0;
      right: -1px;
      display: block;
      content: "";
      width: 2px;
      background-color: $toy-blue;
      transition: transform $toy-transition;
      transform: scale(0);
    }
  }

  &.disabled {
    color: $toy-disable;
    cursor: not-allowed;
  }
}
</style>
