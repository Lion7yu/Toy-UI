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
    accordion: {
      type: Boolean,
      default: false
    }
  },
  setup(props, ctx) {
    const emitter = new Emitter()
    console.log(props.accordion)
    if (props.accordion) {
      provide("TOYEmitter", emitter)
    }
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