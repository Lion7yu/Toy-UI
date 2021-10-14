<template>
  <li
    class="dwc-menu-item"
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
  DWCMenuMode,
  DWCMenuParentKey,
  DWCMenuSetRelationship,
  DWCMenuSelectedKey,
  DWCMenuSetSelectedKey,
} from "./Menu.vue";

export default {
  name: "dwc-menu-item",
  props: {
    disabled: { type: [Boolean, String], default: false },
    value: { type: [Number, String], required: true },
  },
  setup(props) {
    const mode = inject(DWCMenuMode);
    const parentKey = inject(DWCMenuParentKey);

    const setRelationship = inject(DWCMenuSetRelationship);
    const selectedKey = inject(DWCMenuSelectedKey);
    const setSelectdKey = inject(DWCMenuSetSelectedKey);

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
.dwc-menu {
  &.horizontal {
    > .dwc-menu-item {
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

.dwc-menu-item {
  cursor: pointer;
  padding: 12px 24px;
  background-color: #fff;
  position: relative;
  white-space: nowrap;

  &:hover {
  }

  &.active {
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
      transform: scale(0);
    }
  }

  &.disabled {
    cursor: not-allowed;
  }
}
</style>
