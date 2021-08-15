<template>
  <div class="carousel" @mouseenter="mouseEnter" @mouseleave="mouseLeave">
    <div class="inner">
      <CarouselDot
        :hasDot="hasDot"
        :itemLen="itemLen"
        :currentIndex="currentIndex"
        :dotBgColor="dotBgColor"
        @dotClick="dotClick"
      ></CarouselDot>
      <CarouselDirector dir="prev" @dirClick="dirClick"></CarouselDirector>
      <CarouselDirector dir="next" @dirClick="dirClick"></CarouselDirector>
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

import CarouselDot from './CarouselDot.vue'
import CarouselDirector from './CarouselDirector.vue'


export default {
  name: "Carousel",
  components: {
    CarouselDot,
    CarouselDirector
  },
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
    },
    dotBgColor: {
      type: String
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

    const dotClick = (index) => {
      state.currentIndex = index
    }

    const dirClick = (dir) => {
      setIndex(dir)
    }

    const mouseEnter = () => {
      _clearIntervalFn()
    }

    const mouseLeave = () => {
      autoPlay()
    }

    onMounted(() => {
      state.itemLen = instance.slots.default()[0].children.length
      autoPlay()
    })

    onBeforeUnmount(() => {
      _clearIntervalFn()
    })

    function _clearIntervalFn() {
      clearInterval(timer)
      timer = null
    }

    return {
      ...toRefs(state),
      dotClick,
      dirClick,
      mouseEnter,
      mouseLeave
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
