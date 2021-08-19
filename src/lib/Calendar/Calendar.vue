<template>
  <div>
    日历{{ modelValue }}
    <button @click="fn">按钮</button>
  </div>
</template>

<script>
export default {
  name: 'Calendar',
  props: {
    modelValue: String
  },
  setup(props, ctx) {
    const fn = () => { 'change', console.log(1, 2, 3, 4, 5) }
    return {
      fn
    }
  }
}
</script>

<style>
</style>