<demo>
常规使用
</demo>
<template>
  <ul class="box">
    <li>
      <img src="src/assets/cardImages/Friedman.jpg" alt />
      <div class="text">Milton Friedmann</div>
    </li>

    <li>
      <img src="src/assets/cardImages/Smee.jpg" alt />
      <div class="text">Adam Smith</div>
    </li>
    <li>
      <img src="src/assets/cardImages/Keynes.jpg" alt />
      <div class="text">John Maynard Keynes</div>
    </li>
    <li>
      <img src="src/assets/cardImages/Nash.png" alt />
      <div class="text">John Nash</div>
    </li>
  </ul>
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
  width: 100%;
  height: 320px;
  margin: 0 auto;
  overflow: hidden;
  > li {
    position: relative;
    float: left;
    width: 25%;
    height: 320px;
    transition: all 0.3s;
    > img {
      width: 100%;
      height: 100%;
    }
    .text {
      color: #fff;
      position: absolute;
      left: 0;
      bottom: 0;
      font-size: 16px;
      width: 100%;
      height: 30px;
      text-align: center;
      line-height: 30px;
    }
  }
}

.box:hover li {
  width: 12%;
}

.box li:hover {
  width: 64%;
}
</style>