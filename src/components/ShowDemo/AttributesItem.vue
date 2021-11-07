<template>
  <div class="container">
    <div class="box">{{ attributesData.argument }}</div>
    <div class="box">{{ attributesData.explain }}</div>
    <div class="box">{{ attributesData.type }}</div>
    <div class="box">{{ attributesData.options }}</div>
    <div class="box">{{ attributesData.initial }}</div>
  </div>
</template>

<script>
export default {
  props: {
    attributesData: {
      type: Object,
    }
  },
  setup(props) {
  }
}
</script>

<style lang="scss" scoped>
.container {
  font-size: 14px;
  display: flex;
  height: 52px;
  overflow: hidden;
  border-bottom: 1px solid rgb(220, 223, 230);
  .box {
    flex: 1;
    padding: 10px;
    color: rgb(96, 98, 102);
  }
}
</style>