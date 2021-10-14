<template>
  <li
    class="dwc-sub-menu"
    :class="{
      active: openKeys.indexOf(value) > -1,
      selected,
      [mode]: true,
      disabled: disabled === true || disabled === 'true',
    }"
    v-click-outside="onOutside"
  >
    <div class="dwc-sub-menu-title" @click="onClick">
      <slot name="title"></slot>
      <dwc-icon
        v-if="showArrow === true || showArrow === 'true'"
        name="chevron-down"
        class="dwc-sub-menu-icon"
        :size="12"
      ></dwc-icon>
    </div>
    <dwc-collapse-transition direction="vertical">
      <ul class="dwc-sub-menu-list" v-show="openKeys.indexOf(value) > -1">
        <slot></slot>
      </ul>
    </dwc-collapse-transition>
  </li>
</template>
<script lang="ts">
import { inject, provide, computed } from "vue";

import { ClickOutside } from "../directives/ClickOutside.ts";
import CollapseTransition from "../Collapse/Collapse.vue";

import {
  DWCMenuMode,
  DWCMenuParentKey,
  DWCMenuRelationship,
  DWCMenuSelectedKey,
  DWCMenuOpenKeys,
  DWCMenuSetRelationship,
  DWCMenuSetSelectedKey,
  DWCMenuEnableOpenKey,
} from "./Menu.vue";

export default {
  name: "dwc-sub-menu",
  components: {
    "dwc-collapse-transition": CollapseTransition,
  },
  directives: { "click-outside": ClickOutside },
  props: {
    disabled: { type: [Boolean, String], default: false },
    showArrow: { type: [Boolean, String], default: true },
    value: { type: [Number, String], required: true },
  },
  setup(props) {
    const mode = inject(DWCMenuMode);
    const parentKey = inject(DWCMenuParentKey);
    const relationship = inject(DWCMenuRelationship);
    const selectedKey = inject(DWCMenuSelectedKey);
    const openKeys = inject(DWCMenuOpenKeys);

    const setRelationship = inject(DWCMenuSetRelationship);
    const enableOpenKey = inject(DWCMenuEnableOpenKey);

    setRelationship(props.value, parentKey);

    const calAncestors = () => {
      const ancestors: Array<string | number> = [];

      let current = selectedKey.value;

      while (current && relationship.value.has(current)) {
        const ancestor = relationship.value.get(current);

        if (ancestor !== "dwc-menu-root") {
          ancestors.push(ancestor);
          current = ancestor;
        } else {
          current = "";
        }
      }

      return ancestors;
    };

    const selected = computed(() => {
      if (mode.value !== "horizontal") {
        return false;
      }

      if (!selectedKey.value) {
        return false;
      }

      const ancestors = calAncestors();

      return ancestors.indexOf(props.value) > -1;
    });

    const onClick = () => {
      if (props.disabled === true || props.disabled === "true") {
        return;
      }

      enableOpenKey(props.value, openKeys.value.indexOf(props.value) === -1);
    };
    const onOutside = () => {
      if (
        mode.value === "horizontal" &&
        openKeys.value.indexOf(props.value) > -1
      ) {
        enableOpenKey(props.value, false);
      }
    };

    provide(DWCMenuParentKey, props.value);

    return { mode, openKeys, selected, onClick, onOutside };
  },
};
</script>
<style lang="scss">
.dwc-menu {
  > .dwc-sub-menu {
    &.horizontal {
      &.active {
        > .dwc-sub-menu-title {
          position: relative;

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

        > .dwc-sub-menu-list {
          margin-top: 3px;
        }
      }

      &.selected {
        > .dwc-sub-menu-title {
          position: relative;
          background-color: #fff;

          &::after {
            position: absolute;
            z-index: 1001;
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

    &.disabled {
      > .dwc-sub-menu-title {
        cursor: not-allowed;
      }
    }
  }
}

.dwc-sub-menu {
  width: 100%;

  &.active {
    > .dwc-sub-menu-title {
      > .dwc-sub-menu-icon {
        position: absolute;
        top: 50%;
        right: 8px;
        transform: translateY(-50%) rotateZ(-180deg);
      }
    }
  }

  &.horizontal {
    position: relative;

    > .dwc-sub-menu-list {
      position: absolute;
      top: 100%;
      left: 0;
      z-index: 1000;
      width: 100%;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.23921568627451);
    }
  }

  &.disabled {
    > .dwc-sub-menu-title {
      cursor: not-allowed;
    }
  }

  > .dwc-sub-menu-title {
    padding: 12px 24px;
    cursor: pointer;
    position: relative;

    &:hover {
    }

    > .dwc-sub-menu-icon {
      position: absolute;
      top: 50%;
      right: 8px;
      transform: translateY(-50%) rotateZ(0);
    }
  }

  > .dwc-sub-menu-list {
    list-style: none;
    margin-bottom: 0;

    .dwc-menu-item {
      padding: 12px 24px 12px 48px;
    }
  }
}
</style>
