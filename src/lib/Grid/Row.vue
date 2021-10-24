<template>
  <div class="toy-row" :style="rowStyle" :class="rowClasses">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { getCurrentInstance, onMounted, provide, InjectionKey, Ref, ref, computed } from "vue"
export const TOYRowGutter: InjectionKey<Ref<string | number>> = Symbol("TOYRowGutter")
export default {
  name: "ToyRow",
  props: {
    gutter: {
      type: [Number, String]
    },
    align: {
      type: String,
      validator(value: string) {
        return ['left', 'right', 'center'].includes(value)
      }
    }
  },
  setup(props, ctx) {
    const instance = getCurrentInstance()
    const rowStyle = computed(() => {
      let gutter = props.gutter
      return { marginLeft: -gutter / 2 + 'px', marginRight: -gutter / 2 + 'px', marginTop: -gutter / 2 + 'px' }
    })

    const rowClasses = computed(() => {
      let align = props.align
      return [align && `align-${align}`]
    })

    provide("TOYRowGutter", instance.ctx.gutter)
    return { rowStyle, rowClasses }
  }
}
</script>

<style lang="scss" scoped>
.toy-row {
  display: flex;
  &.align-left {
    justify-content: flex-start;
  }
  &.align-right {
    justify-content: flex-end;
  }
  &.align-center {
    justify-content: center;
  }
}
</style>