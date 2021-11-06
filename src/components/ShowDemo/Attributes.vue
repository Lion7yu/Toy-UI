<template>
  <h2>Arrtributes</h2>
  <div class="attributes-wrapper">
    <div class="title-wrapper">
      <div class="box">参数</div>
      <div class="box">说明</div>
      <div class="box">类型</div>
      <div class="box">可选值</div>
      <div class="box">默认值</div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.attributes-wrapper {
  width: 76vw;
  .title-wrapper {
    display: flex;
    border-bottom: 2px solid rgb(220, 223, 230);
    color: rgb(164, 167, 172);
    .box {
      padding: 10px;
      flex: 1;
    }
  }
}
</style>