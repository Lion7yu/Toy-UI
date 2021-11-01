<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
import Emitter from "tiny-emitter"
import { getCurrentInstance, onMounted, provide, ref, computed } from "vue"
export default {
  name: "ToyCollapse",
  props: {
    selected: {
      type: Array,
    },
    accordion: {
      type: Boolean,
      default: false
    }
  },
  setup(props, ctx) {
    const emitter = new Emitter()
    provide("TOYEmitter", emitter)

    onMounted(() => {
      emitter.emit('update:selected', props.selected)
      emitter.on('update:addSelected', (value) => {
        if (props.accordion) {
          props.selected.splice(0, props.selected.length)
          props.selected.push(value)
        } else {
          props.selected.push(value)
        }
        emitter.emit('update:selected', props.selected)
        ctx.emit('update:selected', props.selected)
      })
      emitter.on('update:removeSelected', (value) => {
        let index = props.selected.indexOf(value)
        props.selected.splice(index, 1)
        emitter.emit('update:selected', props.selected)
        ctx.emit('update:selected', props.selected)
      })
    })
  }

}
</script>

<style lang="scss" scoped>
$grey: #ddd;
$border-radius: 4px;
.collapse {
  border: 1px solid $grey;
  border-radius: $border-radius;
}
</style>