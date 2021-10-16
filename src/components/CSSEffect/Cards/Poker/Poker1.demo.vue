<demo>
常规使用
</demo>
<template>
  <div class="box">
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

.box {
  position: relative;
  width: 300px;
  height: 450px;
  .card {
    position: absolute;
    top: 0;
    left: 40vmin;
    width: 100%;
    height: 100%;
    background: center/100%
      url(https://img.zcool.cn/community/013ce05c389b63a80121fbb07c45b0.jpg@1280w_1l_2o_100sh.jpg);
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.5);
    transition: 0.5s;
    transform-origin: bottom;
    border-radius: 10px;
    &:nth-child(1) {
      transform: translate(0px, 0px);
    }
    &:nth-child(2) {
      transform: translate(2px, 2px);
    }
    &:nth-child(3) {
      transform: translate(4px, 4px);
    }
    &:nth-child(4) {
      transform: translate(6px, 6px);
    }
    &:nth-child(5) {
      transform: translate(8px, 8px);
    }
    &:nth-child(6) {
      transform: translate(10px, 10px);
    }
    &:nth-child(7) {
      transform: translate(12px, 12px);
    }
    &:hover {
      z-index: 1;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
      transition: all 0.5s;
    }
  }
  &:hover {
    .card {
      &:nth-child(1) {
        transform: rotate(-45deg) translate(0px, 0px);
      }
      &:nth-child(2) {
        transform: rotate(-30deg) translate(0px, 0px);
      }
      &:nth-child(3) {
        transform: rotate(-15deg) translate(0px, 0px);
      }
      &:nth-child(4) {
        transform: rotate(0deg) translate(0px, 0px);
      }
      &:nth-child(5) {
        transform: rotate(15deg) translate(0px, 0px);
      }
      &:nth-child(6) {
        transform: rotate(30deg) translate(0px, 0px);
      }
      &:nth-child(7) {
        transform: rotate(45deg) translate(0px, 0px);
      }
    }
  }
}
</style>