<template>
  <transition
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
  >
    <slot></slot>
  </transition>
</template>
<script lang="ts">
import { ref, reactive, computed, nextTick } from "vue";

export default {
  name: "toy-collapse-transition",
  props: {
    direction: {
      type: String,
      default: "horizontal",
      validator<String>(val: string) {
        return ["horizontal", "vertical"].includes(val);
      },
    },
    duration: { type: [Number, String], default: 250 },
  },
  setup(props, context) {
    const transition = computed(() => {
      if (props.direction === "horizontal") {
        return `width ${props.duration}ms ease-in-out, padding-left ${props.duration}ms ease-in-out, padding-right ${props.duration}ms ease-in-out`;
      } else {
        return `height ${props.duration}ms ease-in-out, padding-top ${props.duration}ms ease-in-out, padding-bottom ${props.duration}ms ease-in-out`;
      }
    });

    const dataset = reactive({
      oldOverflow: "",
      oldWidth: "",
      oldPaddingLeft: "",
      oldPaddingRight: "",
      oldPaddingTop: "",
      oldPaddingBottom: "",
    });

    const beforeEnter = (el: HTMLElement) => {
      if (props.direction === "horizontal") {
        dataset.oldWidth = getComputedStyle(el).width;
        dataset.oldPaddingLeft = el.style.paddingLeft;
        dataset.oldPaddingRight = el.style.paddingRight;

        el.style.width = "0";
        el.style.paddingLeft = "0";
        el.style.paddingRight = "0";
      } else {
        dataset.oldPaddingTop = el.style.paddingTop;
        dataset.oldPaddingBottom = el.style.paddingBottom;

        el.style.height = "0";
        el.style.paddingTop = "0";
        el.style.paddingBottom = "0";
      }

      el.style.transition = transition.value;
    };

    const enter = (el: HTMLElement) => {
      dataset.oldOverflow = el.style.overflow;

      if (props.direction === "horizontal") {
        requestAnimationFrame(() => {
          if (dataset.oldWidth !== "auto") {
            el.style.width = dataset.oldWidth;
          } else {
            el.style.width = "100%";
          }
          el.style.paddingLeft = dataset.oldPaddingLeft;
          el.style.paddingRight = dataset.oldPaddingRight;
        });
      } else {
        if (el.scrollHeight !== 0) {
          el.style.height = el.scrollHeight + "px";
        } else {
          el.style.height = "";
        }
        el.style.paddingTop = dataset.oldPaddingTop;
        el.style.paddingBottom = dataset.oldPaddingBottom;
      }

      el.style.overflow = "hidden";
    };

    const afterEnter = (el: HTMLElement) => {
      el.style.transition = "";
      el.style.overflow = dataset.oldOverflow;
      props.direction === "horizontal"
        ? (el.style.width = "")
        : (el.style.height = "");
    };

    const beforeLeave = (el: HTMLElement) => {
      dataset.oldOverflow = el.style.overflow;

      if (props.direction === "horizontal") {
        dataset.oldPaddingLeft = el.style.paddingLeft;
        dataset.oldPaddingRight = el.style.paddingRight;
        el.style.width = el.scrollWidth + "px";
      } else {
        dataset.oldPaddingTop = el.style.paddingTop;
        dataset.oldPaddingBottom = el.style.paddingBottom;
        el.style.height = el.scrollHeight + "px";
      }

      el.style.overflow = "hidden";
    };

    const leave = (el: HTMLElement) => {
      if (props.direction === "horizontal") {
        if (el.scrollWidth !== 0) {
          el.style.width = "0";
          el.style.paddingLeft = "0";
          el.style.paddingRight = "0";
        }
      } else {
        if (el.scrollHeight !== 0) {
          el.style.height = "0";
          el.style.paddingTop = "0";
          el.style.paddingBottom = "0";
        }
      }

      el.style.transition = transition.value;
    };

    const afterLeave = (el: HTMLElement) => {
      el.style.transition = "";
      el.style.overflow = dataset.oldOverflow;

      if (props.direction === "horizontal") {
        el.style.width = "";
        el.style.paddingLeft = dataset.oldPaddingLeft;
        el.style.paddingRight = dataset.oldPaddingRight;
      } else {
        el.style.height = "";
        el.style.paddingTop = dataset.oldPaddingTop;
        el.style.paddingBottom = dataset.oldPaddingBottom;
      }
    };

    return { beforeEnter, enter, afterEnter, beforeLeave, leave, afterLeave };
  },
};
</script>
