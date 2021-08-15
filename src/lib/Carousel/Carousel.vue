<template>
  <div class="carousel">
    <div class="inner">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import {
  reactive,
  toRefs,
  onMounted,
  onBeforeUnmount,
  getCurrentInstance
} from 'vue';
export default {
  name: "Carousel",
  props: {
    autoplay: {
      type: Boolean,
      default: true
    },
    duration: {
      type: Number,
      default: 3000
    },
    initial: {
      type: Number,
      default: 0
    },
    hasDot: {
      type: Boolean,
      default: true
    },
    hasDirector: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    const instance = getCurrentInstance()

    const state = reactive({
      currentIndex: props.initial,
      itemLen: 0
    })

    let timer = null

    const autoPlay = () => {
      if (props.autoplay) {
        timer = setInterval(() => {
          setIndex('next')
        }, props.duration)
      }
    }

    const setIndex = (dir) => {
      switch (dir) {
        case 'next':
          state.currentIndex += 1
          if (state.currentIndex === state.itemLen) {
            state.currentIndex = 0
          }
          break
        case 'prev':
          state.currentIndex -= 1
          if (state.currentIndex === -1) {
            state.currentIndex = state.itemLen - 1
          }
          break;
        default: break
      }
    }

    onMounted(() => {
      state.itemLen = instance.slots.default()[0].children.length
      autoPlay()
    })

    onBeforeUnmount(() => {
      clearInterval(timer)
      timer = null
    })

    return {
      ...toRefs(state)
    }
  }
};
</script>

<style lang="scss" scpoed>
.carousel {
  width: 100%;
  height: 100%;
  .inner {
    position: relative;
    width: 100%;
    height: 100%;
  }
}
</style>
