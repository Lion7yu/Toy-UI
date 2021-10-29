<template>
  <div class="popover" ref="popover">
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
import { ref, getCurrentInstance, onMounted, computed, onUnmounted, nextTick } from 'vue'
export default {
  name: "ToyPopover",
  props: {
    position: {
      type: String,
      default: 'top',
      validator(value) {
        return ['top', 'buttom', 'left', 'right'].indexOf(value) >= 0
      }
    },
    trigger: {
      type: String,
      default: 'click',
      validator(value) {
        return ['click', 'hover'].indexOf(value) >= 0
      }
    }
  },
  setup(props) {
    const instance = getCurrentInstance()
    let visible = ref(false)

    const openEvent = computed(() => {
      if (props.trigger === 'click') {
        return 'click'
      } else {
        return 'mouseenter'
      }
    })

    const closeEvent = computed(() => {
      if (props.trigger === 'click') {
        return 'click'
      } else {
        return 'mouseleave'
      }
    })

    const positionContent = () => {
      const { contentWrapper, triggerWrapper } = instance.refs
      document.body.appendChild(contentWrapper)
      const { width, height, top, left } = triggerWrapper.getBoundingClientRect()
      const { height: height2 } = contentWrapper.getBoundingClientRect()
      let positions = {
        top: {
          top: top + window.scrollY,
          left: left + window.scrollX,
        },
        bottom: {
          top: top + height + window.scrollY,
          left: left + window.scrollX,
        },
        left: {
          top: top + window.scrollY + (height - height2) / 2,
          left: left + window.scrollX
        },
        right: {
          top: top + window.scrollY + (height - height2) / 2,
          left: left + window.scrollX + width
        },
      }
      contentWrapper.style.left = positions[props.position].left + 'px'
      contentWrapper.style.top = positions[props.position].top + 'px'
      contentWrapper.style.right = positions[props.position].right + 'px'
      contentWrapper.style.bottom = positions[props.position].bottom + 'px'
    }

    let onClickDocument = (e) => {
      if (instance.refs.popover &&
        (instance.refs.popover === e.target ||
          instance.refs.popover.contains(e.target))) {
        return
      }
      if (instance.refs.contentWrapper &&
        (instance.refs.contentWrapper === e.target ||
          instance.refs.contentWrapper.contains(e.target))) {
        return
      }
      close()
    }

    const open = () => {
      visible.value = true
      nextTick(() => {
        positionContent()
        document.addEventListener('click', onClickDocument)
      })
    }

    const close = () => {
      visible.value = false
      document.removeEventListener('click', onClickDocument)
    }

    const onClick = (event) => {
      if (instance.refs.triggerWrapper.contains(event.target)) {
        if (visible.value === true) {
          close()
        } else {
          open()
        }
      }
    }
    onMounted(() => {
      if (props.trigger === 'click') {
        instance.refs.popover.addEventListener('click', onClick)
      } else {
        instance.refs.popover.addEventListener('mouseenter', open)
        instance.refs.popover.addEventListener('mouseleave', close)
      }
    })

    onUnmounted(() => {
      if (props.trigger === 'click') {
        instance.refs.popover.removeEventListener('click', onClick)
      } else {
        instance.refs.popover.removeEventListener('mouseenter', open)
        instance.refs.popover.removeEventListener('mouseleave', close)
      }
    })
    return { onClick, visible, openEvent, closeEvent }
  }
}
</script>

<style lang="scss" scoped>
$border-color: rgb(255, 255, 255);
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
      border-top-color: rgb(223, 223, 223);
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
      border-bottom-color: rgb(225, 225, 225);
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
      border-left-color: rgb(223, 223, 223);
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
      border-right-color: rgb(223, 223, 223);
      right: 100%;
    }
    &::after {
      border-right-color: white;
      right: 100%-1;
    }
  }
}
</style>