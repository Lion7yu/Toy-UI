<template>
  <li
    class="toy-sub-menu"
    :class="{
      active: openKeys.indexOf(value) > -1,
      selected,
      [mode]: true,
      disabled: disabled === true || disabled === 'true',
    }"
    v-click-outside="onOutside"
  >
    <div class="toy-sub-menu-title" @click="onClick">
      <slot name="title"></slot>
    </div>
    <toy-collapse-transition direction="vertical">
      <ul class="toy-sub-menu-list" v-show="openKeys.indexOf(value) > -1">
        <slot></slot>
      </ul>
    </toy-collapse-transition>
  </li>
</template>
<script lang="ts">
import { inject, provide, computed } from "vue";

import { ClickOutside } from "../directives/ClickOutside.ts";
import CollapseTransition from "../Collapse/Collapse.vue";

import {
  TOYMenuMode,
  TOYMenuParentKey,
  TOYMenuRelationship,
  TOYMenuSelectedKey,
  TOYMenuOpenKeys,
  TOYMenuSetRelationship,
  TOYMenuSetSelectedKey,
  TOYMenuEnableOpenKey,
} from "./Menu.vue";

export default {
  name: "toy-sub-menu",
  components: {
    "toy-collapse-transition": CollapseTransition,
  },
  directives: { "click-outside": ClickOutside },
  props: {
    disabled: { type: [Boolean, String], default: false },
    showArrow: { type: [Boolean, String], default: true },
    value: { type: [Number, String], required: true },
  },
  setup(props) {
    const mode = inject(TOYMenuMode);
    const parentKey = inject(TOYMenuParentKey);
    const relationship = inject(TOYMenuRelationship);
    const selectedKey = inject(TOYMenuSelectedKey);
    const openKeys = inject(TOYMenuOpenKeys);

    const setRelationship = inject(TOYMenuSetRelationship);
    const enableOpenKey = inject(TOYMenuEnableOpenKey);

    setRelationship(props.value, parentKey);

    const calAncestors = () => {
      const ancestors: Array<string | number> = [];

      let current = selectedKey.value;

      while (current && relationship.value.has(current)) {
        const ancestor = relationship.value.get(current);

        if (ancestor !== "toy-menu-root") {
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

    provide(TOYMenuParentKey, props.value);

    return { mode, openKeys, selected, onClick, onOutside };
  },
};
</script>
<style lang="scss">
@import "../lion.scss";
.toy-menu {
  > .toy-sub-menu {
    &.horizontal {
      &.active {
        > .toy-sub-menu-title {
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

        > .toy-sub-menu-list {
          margin-top: 3px;
        }
      }

      &.selected {
        > .toy-sub-menu-title {
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
            background-color: $toy-blue;
          }
        }
      }
    }

    &.disabled {
      > .toy-sub-menu-title {
        cursor: not-allowed;
      }
    }
  }
}

.toy-sub-menu {
  width: 100%;

  &.active {
    > .toy-sub-menu-title {
      color: $toy-blue;

      > .toy-sub-menu-icon {
        position: absolute;
        top: 50%;
        right: 8px;
        transform: translateY(-50%) rotateZ(-180deg);
      }
    }
  }

  &.horizontal {
    position: relative;

    > .toy-sub-menu-list {
      position: absolute;
      top: 100%;
      left: 0;
      z-index: 1000;
      width: 100%;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.23921568627451);
    }
  }

  &.disabled {
    > .toy-sub-menu-title {
      color: $toy-disable;
      cursor: not-allowed;
    }
  }

  > .toy-sub-menu-title {
    padding: 12px 24px;
    color: $toy-main;
    cursor: pointer;
    position: relative;

    &:hover {
      color: $toy-blue-highlight;
    }

    > .toy-sub-menu-icon {
      position: absolute;
      top: 50%;
      right: 8px;
      transition: transform $toy-transition;
      transform: translateY(-50%) rotateZ(0);
    }
  }

  > .toy-sub-menu-list {
    list-style: none;
    margin-bottom: 0;

    .toy-menu-item {
      padding: 12px 24px 12px 48px;
    }
  }
}
</style>
