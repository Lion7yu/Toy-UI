<template>
  <transition
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
  >
    <div class="toy-spread" v-show="visible">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
import { reactive, toRefs, computed } from 'vue'
export default {
  name: "ToySpread",
  props: {
    visible: { type: Boolean, required: true },
    horizontal: { type: Boolean, default: false },
    duration: { type: [Number, String], default: 300 }
  },
  setup(props) {
    const state = reactive({
      oldPaddingTop: '',
      oldPaddingBottom: '',
      oldPaddingLeft: '',
      oldPaddingRight: '',
      oldOverflow: ''
    })

    let verticalTransition = computed(() => {
      return `${+props.duration}ms height ease-in-out, ${+props.duration}ms padding-top ease-in-out, ${+props.duration}ms padding-bottom ease-in-out`;
    })
    let horizontalTransition = computed(() => {
      return `${+props.duration}ms width ease-in-out, ${+props.duration}ms padding-left ease-in-out, ${+props.duration}ms padding-right ease-in-out`;
    })


    const beforeEnter = (el) => {
      if (props.horizontal) {
        el.style.transition = horizontalTransition.value;
        state.oldPaddingLeft = el.style.paddingLeft;
        state.oldPaddingRight = el.style.paddingRight;
        el.style.width = 0;
        el.style.paddingLeft = 0;
        el.style.paddingRight = 0;
      } else {
        el.style.transition = verticalTransition.value;
        console.log(el.style.transition)
        state.oldPaddingTop = el.style.paddingTop;
        state.oldPaddingBottom = el.style.paddingBottom;
        el.style.height = 0;
        el.style.paddingTop = 0;
        el.style.paddingBottom = 0;
      }
    }

    const enter = (el) => {
      state.oldOverflow = el.style.overflow;
      if (props.horizontal) {
        if (el.scrollWidth !== 0) {
          el.style.width = el.scrollWidth + 'px';
        } else {
          el.style.width = '';
        }
        el.style.paddingLeft = state.oldPaddingLeft;
        el.style.paddingRight = state.oldPaddingRight;
      } else {
        if (el.scrollHeight !== 0) {
          el.style.height = el.scrollHeight + 'px';
        } else {
          el.style.height = '';
        }
        el.style.paddingTop = state.oldPaddingTop;
        el.style.paddingBottom = state.oldPaddingBottom;
      }
      el.style.overflow = 'hidden';
    }

    const afterEnter = (el) => {
      el.style.transition = '';
      el.style.overflow = state.oldOverflow;
      props.horizontal ? el.style.width = '' : el.style.height = '';
    }

    const beforeLeave = (el) => {
      state.oldOverflow = el.style.overflow;
      if (props.horizontal) {
        state.oldPaddingLeft = el.style.paddingLeft;
        state.oldPaddingRight = el.style.paddingRight;
        el.style.width = el.scrollWidth + 'px';
      } else {
        state.oldPaddingTop = el.style.paddingTop;
        state.oldPaddingBottom = el.style.paddingBottom;
        el.style.height = el.scrollHeight + 'px';
      }
      el.style.overflow = 'hidden';
    }

    const leave = (el) => {
      if (props.horizontal) {
        if (el.scrollWidth !== 0) {
          el.style.transition = horizontalTransition.value;
          el.style.width = 0;
          el.style.paddingLeft = 0;
          el.style.paddingRight = 0;
        }
      } else {
        if (el.scrollHeight !== 0) {
          el.style.transition = verticalTransition.value;
          el.style.height = 0;
          el.style.paddingTop = 0;
          el.style.paddingBottom = 0;
        }
      }
    }

    const afterLeave = (el) => {
      el.style.transition = '';
      el.style.overflow = state.oldOverflow;
      if (props.horizontal) {
        el.style.width = '';
        el.style.paddingLeft = state.oldPaddingLeft;
        el.style.paddingRight = state.oldPaddingRight;
      } else {
        el.style.height = '';
        el.style.paddingTop = state.oldPaddingTop;
        el.style.paddingBottom = state.oldPaddingBottom;
      }
    }

    return { ...toRefs(state), enter, leave, afterEnter, beforeEnter, beforeLeave, afterLeave }
  }
}
</script>