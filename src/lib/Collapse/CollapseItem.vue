<template>
  <div class="collapseItem">
    <div class="title" ref="title" @click="toggle">
      <svg class="icon">
        <use :xlink:href="svgName" />
      </svg>
      {{ title }}
    </div>
    <toy-spread :visible="open">
      <div class="content">
        <p>
          <slot></slot>
        </p>
      </div>
    </toy-spread>
  </div>
</template>

<script>
import { onMounted, ref, inject } from "vue"
import Spread from "../Spread/Spread.vue"

export default {
  name: "ToyCollapseItem",
  components: {
    "toy-spread": Spread
  },
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
    let svgName = ref("#i-right")
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
          svgName.value = "#i-down1"
        } else {
          open.value = false
          svgName.value = "#i-right"
        }
      })
    })


    return { open, toggle, svgName }
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
    margin-bottom: -1px;
  }
  &:first-child {
    > .title {
      border-top-left-radius: $border-radius;
      border-top-right-radius: $border-radius;
    }
  }
  &:last-child {
    .title:last-child {
      border-bottom-left-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
  }
  > .content {
    min-height: 64px;
    padding: 8px;
  }
  p {
    padding: 16px;
    font-size: 14px;
  }
  svg {
    margin: 0 8px;
  }
}
</style>