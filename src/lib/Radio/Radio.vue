<template>
  <label class="l-radio" :class="{ 'is-checked': label === model }">
    <span class="l-radio-input">
      <span class="l-radio-inner"></span>
      <input class="l-radio-original" type="radio" :value="label" :name="name" v-model="model" />
    </span>
    <span class="l-radio-label">
      <slot>
        <template v-if="!$slots.default">{{ label }}</template>
      </slot>
    </span>
  </label>
</template>

<script>
export default {
  name: 'Radio',
  inject: {
    RadioGroup: {
      default: ''
    }
  },
  created() {
    console.log(this.$parent)
  },
  computed: {
    model: {
      get() {
        return this.isGroup ? this.RadioGroup.value : this.value
      },
      set(value) {
        this.$emit('input', value)
        this.isGroup ? this.RadioGroup.$$emit('input', value) : this.$emit('input', value)
      }
    },
    isGroup() {
      return !!this.RadioGroup
    }
  },
  props: {
    label: {
      type: [String, Number, Boolean],
      default: ''
    },
    value: null,
    name: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.l-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  .l-radio-input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .l-radio-inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      &:after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0.15s ease-in;
      }
    }
    .l-radio-original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0px;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .l-radio-label {
    font-size: 14px;
    padding-left: 10px;
  }
}
.l-radio.is-checked {
  .l-radio-input {
    .l-radio-inner {
      border-color: #409eff;
      background: #409eff;
      &:after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
  .l-radio-label {
    color: #409eff;
  }
}
</style>