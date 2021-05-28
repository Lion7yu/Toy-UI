<template>
  <button class="lion-button" :class="classes" :disabled="disabled" >
    <span v-if="loading" class="lion-loadingIndicator"></span>
    <svg v-if="icon" class="icon">
      <use :xlink:href="`#i-${icon}`"></use>
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
    icon:{
      type:String
    },
    iconPosition:{
      type:String,
      default:'left'
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
        [`lion-theme-${theme}`]: theme,
        [`lion-size-${size}`]: size,
        [`lion-level-${level}`]: level,
        [`lion-icon-${icon}`]:icon,
        [`lion-iconPosition-${iconPosition}`]:iconPosition
      };
    });
    return { classes };
  },
};
</script>
<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
$red: red;
$grey: grey;
.lion-button {
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
  &.lion-iconPosition-left{
    > .content {
      order: 2;
    }
    > .icon {
      order: 1;
      margin-right: .3em;
    }
  }
  &.lion-iconPosition-right {
    > .content {
      order: 1;
    }
    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: .3em;
    }
  }
  &.lion-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    &:hover,
    &:focus {
      color: lighten($blue, 10%);
    }
  }
  &.lion-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
  }
  &.lion-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }
  &.lion-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }
  &.lion-theme-button {
    &.lion-level-main {
      background: $blue;
      color: white;
      border-color: $blue;
      &:hover,
      &:focus {
        background: darken($blue, 10%);
        border-color: darken($blue, 10%);
      }
    }
    &.lion-level-danger {
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
  &.lion-theme-link {
    &.lion-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.lion-theme-text {
    &.lion-level-main {
      color: $blue;
      &:hover,
      &:focus {
        color: darken($blue, 10%);
      }
    }
    &.lion-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.lion-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
      &:hover {
        border-color: $grey;
      }
    }
  }
  &.lion-theme-link, &.lion-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
  }
  > .lion-loadingIndicator{
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px; 
    border-color: $blue $blue $blue transparent;
    border-style: solid;
    border-width: 2px;
    animation: lion-spin 1s infinite linear;
  }
}
@keyframes lion-spin {
  0%{transform: rotate(0deg)} 
  100%{transform: rotate(360deg)} 
}
</style>