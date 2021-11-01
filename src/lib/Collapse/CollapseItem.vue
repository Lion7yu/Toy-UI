<template>
  <div class="collapseItem">
    <div class="title" ref="title" @click="toggle">{{ title }}</div>
    <div class="content content-show" v-if="open" :class="{ 'content-show': show }">
      <p>
        <slot></slot>
      </p>
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
    },
    value: {
      type: [Number, String],
      require: true
    }
  },
  setup(props, ctx) {
    const emitter = inject("TOYEmitter")
    let open = ref(false)
    const toggle = () => {
      if (open.value) {
        emitter && emitter.emit('update:removeSelected', props.value)
      } else {
        emitter && emitter.emit('update:addSelected', props.value)
      }
    }

    onMounted(() => {
      emitter && emitter.on('update:selected', (values) => {
        if (values.indexOf(props.value) >= 0) {
          open.value = true
        } else {
          open.value = false
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
    min-height: 46px;
    display: flex;
    align-items: center;
    padding: 0 8px;
    background: rgb(250, 250, 250);
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
      border-bottom: none;
    }
  }
  > .content {
    min-height: 64px;
    padding: 8px;
    &.content-show {
      transition: all 2s;
    }
  }
  p {
    padding: 16px;
    font-size: 14px;
  }
}
</style>