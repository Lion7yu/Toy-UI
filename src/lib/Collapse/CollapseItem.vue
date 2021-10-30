<template>
  <div class="collapseItem">
    <div class="title" ref="title" @click="toggle">{{ title }}</div>
    <div class="content" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { onMounted, ref, getCurrentInstance, watch, inject } from "vue"


export default {
  name: "ToyCollapseItem",
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup(props, ctx) {
    const emitter = inject("TOYEmitter")
    const instance = getCurrentInstance()
    let open = ref(false)
    const toggle = () => {
      if (open.value) {
        open.value = false
      } else {
        open.value = true
        emitter && emitter.emit('update:selected', ctx)

      }
    }
    const close = () => {
      open.value = false
    }
    onMounted(() => {
      emitter && emitter.on('update:selected', (vm) => {
        if (vm !== ctx) {
          close()
        }
      })
    })


    return { open, toggle }
  }
}
</script>

<style lang="scss" scoped>
$grey: #ddd;
$border-radius: 4px;
.collapseItem {
  > .title {
    border: 1px solid $grey;
    margin-top: -1px;
    margin-left: -1px;
    margin-right: -1px;
    min-height: 32px;
    display: flex;
    align-items: center;
    padding: 0 8px;
  }
  &:first-child {
    > .title {
      border-top-left-radius: $border-radius;
      border-top-right-radius: $border-radius;
    }
  }
  &:last-child {
    > .title:last-child {
      border-bottom-left-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
  }
  > .content {
    padding: 8px;
  }
}
</style>