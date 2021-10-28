<template>
  <div class="popover" @click="onClick" ref="popover">
    <div
      ref="contentWrapper"
      class="content-wrapper"
      v-if="visible"
      :class="{ [`position-${position}`]: true }"
    >
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper" style="display:inline-block">
      <slot></slot>
    </span>
  </div>
</template>

<script>
import { ref, getCurrentInstance, onMounted } from 'vue'
export default {
  name: "ToyPopover",
  props: {
    position: {
      type: String,
      default: 'top',
      validator(value) {
        return ['top', 'buttom', 'left', 'right'].indexOf(value) >= 0
      }
    }
  },
  setup() {
    const instance = getCurrentInstance()
    let visible = ref(false)

    const positionContent = () => {
      const { contentWrapper, triggerWrapper } = instance.ctx.$refs
      document.body.appendChild(contentWrapper)
      let { width, height, top, left } = triggerWrapper.getBoundingClientRect()
      if (instance.ctx.position === 'top') {
        contentWrapper.style.left = left + window.scrollX + 'px'
        contentWrapper.style.top = top + window.scrollY + 'px'
      } else if (instance.ctx.position === 'bottom') {
        contentWrapper.style.left = left + window.scrollX + 'px'
        contentWrapper.style.top = top + height + window.scrollY + 'px'
      } else if (instance.ctx.position === 'left') {
        contentWrapper.style.left = left + window.scrollX + 'px'
        let { height: height2 } = contentWrapper.getBoundingClientRect()
        contentWrapper.style.top = top + window.scrollY + (height - height2) / 2 + 'px'
      } else if (instance.ctx.position === 'right') {
        contentWrapper.style.left = left + window.scrollX + width + 'px'
        let { height: height2 } = contentWrapper.getBoundingClientRect()
        contentWrapper.style.top = top + window.scrollY + (height - height2) / 2 + 'px'
      }
    }

    let onClickDocument = (e) => {
      if (instance.ctx.$refs.popover &&
        (instance.ctx.$refs.popover === e.target ||
          instance.ctx.$refs.popover.contains(e.target))) {
        return
      }
      if (instance.ctx.$refs.contentWrapper &&
        (instance.ctx.$refs.contentWrapper === e.target ||
          instance.ctx.$refs.contentWrapper.contains(e.target))) {
        return
      }
      close()
    }

    const open = () => {
      visible.value = true
      instance.ctx.$nextTick(() => {
        positionContent()
        document.addEventListener('click', onClickDocument)
      })
    }

    const close = () => {
      visible.value = false
      document.removeEventListener('click', onClickDocument)
    }

    const onClick = (event) => {
      if (instance.ctx.$refs.triggerWrapper.contains(event.target)) {
        if (visible.value === true) {
          close()
        } else {
          open()
        }
      }
    }
    onMounted(() => {
    })
    return { onClick, visible }
  }
}
</script>

<style lang="scss" scoped>
$border-color: #333;
$border-radius: 4px;

.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}
.content-wrapper {
  position: absolute;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
  background: white;

  padding: 0.5em 1em;
  max-width: 20em;
  word-break: break-all;
  &::before,
  &::after {
    content: "";
    display: block;
    border: 10px solid transparent;
    width: 0;
    height: 0;
    position: absolute;
  }
  &.position-top {
    transform: translateY(-100%);
    margin-top: -10px;
    &::before,
    &::after {
      left: 10px;
    }
    &::before {
      border-top-color: black;
      top: 100%;
    }
    &::after {
      border-top-color: white;
      top: 100%-2;
    }
  }
  &.position-bottom {
    margin-top: 10px;
    &::before,
    &::after {
      left: 10px;
    }
    &::before {
      border-bottom-color: black;
      bottom: 100%;
    }
    &::after {
      border-bottom-color: white;
      bottom: 100%-2;
    }
  }
  &.position-left {
    transform: translateX(-100%);
    margin-left: -10px;
    &::before,
    &::after {
      transform: translateY(-50%);
      top: 50%;
    }
    &::before {
      border-left-color: black;
      left: 100%;
    }
    &::after {
      border-left-color: white;
      left: 100%-1;
    }
  }
  &.position-right {
    margin-left: 10px;
    &::before,
    &::after {
      transform: translateY(-50%);
      top: 50%;
    }
    &::before {
      border-right-color: black;
      right: 100%;
    }
    &::after {
      border-right-color: white;
      right: 100%-1;
    }
  }
}
</style>