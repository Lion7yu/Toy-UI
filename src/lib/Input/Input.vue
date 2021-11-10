<template>
  <!-- 如果存在error就有error类 -->
  <div class="input-wrapper" :class="{ error }" v-focus>
    <label class="input-placeholder">{{ placeholder }}</label>
    <input
      type="text"
      :disabled="disabled"
      :readonly="readonly"
      @change="$emit('change', $event.target.value)"
      @input="$emit('input', $event.target.value)"
      @focus="$emit('focus', $event.target.value)"
      @blur="$emit('blur', $event.target.value)"
    />
    <svg v-if="icon" class="icon">
      <use :xlink:href="`#i-${icon}`" />
    </svg>
    <template v-if="error">
      <span class="iconfont i-error"></span>
      <span class="errorMessage">{{ error }}</span>
    </template>
  </div>
</template>

<script>
import focus from "../directives/focus.js"
export default {
  props: {
    icon: {
      type: String,
    },
    placeholder: {
      type: String,
      default: "请输入"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String,
    }
  },
  directives: {
    focus
  }
}
</script>

<style lang="scss" >
$height: 32px;
$border-color: #999;
$border-radius: 4px;
$font-size: 14px;
$box-shadow-color: rgba(0, 0, 0, 0.5);
$red: #f1453d;
$blue: #40a9ff;
.input-wrapper {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: $font-size;
  .input-placeholder {
    position: absolute;
    left: 10px;
  }
  > :not(:last-child) {
    margin-right: 0.4em;
  }
  > input {
    height: $height;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    padding: 0 8px;
    font-size: inherit;
    &:hover {
      border-color: $blue;
      box-shadow: 0px 0px 3px 1px $blue;
    }
    &:focus {
      border-color: $blue;
      box-shadow: 0px 0px 3px 1px $blue;
      outline: none;
    }
    &[disabled] {
      box-shadow: none;
      border-color: #bbb;
      color: #bbb;
      cursor: not-allowed;
    }
    &[readonly] {
      border-color: #bbb;
      color: #bbb;
    }
  }
  &.error {
    > input {
      border-color: $red;
      color: $red;
    }
    :hover {
      box-shadow: 0px 0px 3px 1px $red;
    }
    :focus {
      border-color: $red;
      box-shadow: 0px 0px 3px 1px $red;
    }
    .input-placeholder {
      color: $red;
      &:hover {
        box-shadow: none;
      }
    }
    > .iconfont {
      color: $red;
      &:hover {
        box-shadow: none;
      }
    }
    > span {
      &:hover {
        box-shadow: none;
      }
    }
  }
  .errorMessage {
    color: $red;
  }
  .icon {
    position: absolute;
    font-size: 16px;
    right: 12px;
    justify-content: center;
    color: #000;
  }
}
</style>