<template>
  <button class="toy-button" :class="classes" :disabled="disabled">
    <span v-if="loading" class="toy-loadingIndicator"></span>
    <svg v-if="icon" class="icon">
      <use :xlink:href="`#i-${icon}`" />
    </svg>
    <div class="content">
      <slot />
    </div>
  </button>
</template>

<script lang="ts">
import { computed } from "vue";

export default {
  props: {
    icon: {
      type: String
    },
    iconPosition: {
      type: String,
      default: 'left'
    },
    theme: {
      type: String,
      default: "button",
    },
    size: {
      type: String,
      default: "normal",
    },
    level: {
      type: String,
      default: "normal",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false
    },

  },
  setup(props) {
    const { theme, size, level, icon, iconPosition } = props;
    const classes = computed(() => {
      return {
        [`toy-theme-${theme}`]: theme,
        [`toy-size-${size}`]: size,
        [`toy-level-${level}`]: level,
        [`toy-icon-${icon}`]: icon,
        [`toy-iconPosition-${iconPosition}`]: iconPosition
      };
    });
    return { classes };
  },
};
</script>
<style lang="scss" scoped>
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
$red: red;
$grey: grey;
.toy-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 1em;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  vertical-align: middle;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: background 250ms;
  & + & {
    margin-left: 8px;
  }
  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.toy-iconPosition-left {
    > .content {
      order: 2;
    }
    > .icon {
      order: 1;
      margin-right: 0.3em;
    }
  }
  &.toy-iconPosition-right {
    > .content {
      order: 1;
    }
    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: 0.3em;
    }
  }
  &.toy-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    &:hover,
    &:focus {
      color: lighten($blue, 10%);
    }
  }
  &.toy-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
  }
  &.toy-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }
  &.toy-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }
  &.toy-theme-button {
    &.toy-level-main {
      background: $blue;
      color: white;
      border-color: $blue;
      &:hover,
      &:focus {
        background: darken($blue, 10%);
        border-color: darken($blue, 10%);
      }
    }
    &.toy-level-danger {
      background: $red;
      border-color: $red;
      color: white;
      &:hover,
      &:focus {
        background: darken($red, 10%);
        border-color: darken($red, 10%);
      }
    }
  }
  &.toy-theme-link {
    &.toy-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.toy-theme-text {
    &.toy-level-main {
      color: $blue;
      &:hover,
      &:focus {
        color: darken($blue, 10%);
      }
    }
    &.toy-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.toy-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
      &:hover {
        border-color: $grey;
      }
    }
  }
  &.toy-theme-link,
  &.toy-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
  }
  > .toy-loadingIndicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $blue $blue $blue transparent;
    border-style: solid;
    border-width: 2px;
    animation: toy-spin 1s infinite linear;
  }
}
@keyframes toy-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>