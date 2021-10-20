<template>
  <div class="row" style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>

<script>
import { computed, onMounted, getCurrentInstance } from 'vue';
export default {
  name: 'LRow',
  props: {
    gutter: {
      type: [Number, String]
    },
    align: {
      type: String,
      validator(value) {
        return ['left', 'right', 'center'].indexOf(value) >= 0;
      }
    }
  },
  setup(props, ctx) {
    console.log(ctx)
    const instance = getCurrentInstance()
    console.log(instance)
    const rowStyle = computed(() => {
      let { gutter } = ctx
      return {
        marginLeft: -gutter / 2 + 'px',
        marginRight: -gutter / 2 + 'px'
      }
    })

    const rowClass = computed(() => {
      let { align } = ctx
      return [align && `align-${align}`]
    })

    onMounted(() => {
    })

    return {
      rowStyle,
      rowClass
    }
  }
  // computed: {
  //   rowStyle() {
  //     let { gutter } = this
  //     console.log('gutter')
  //     console.log(gutter)
  //     return {
  //       marginLeft: -gutter / 2 + 'px',
  //       marginRight: -gutter / 2 + 'px'
  //     }
  //   },
  //   rowClass() {
  //     let { align } = this
  //     return [align && `align-${align}`]
  //   }
  // },
  // mounted() {
  //   // this.$refs.forEach((vm)=>{
  //   //   vm.gutter = this.gutter
  //   // })
  // }
}
</script>

<style lang="scss" >
.row {
  display: flex;
  flex-wrap: wrap;
  &.align-left {
    justify-content: flex-start;
  }
  &.align-right {
    justify-content: flex-end;
  }
  &.align-center {
    justify-content: center;
  }
}
</style>