<demo>
Hover
</demo>
<template>
  <ul class="box">
    <li>
      <img src="/images/cardImages/Friedman.jpg" />
      <div class="text">Milton Friedmann</div>
    </li>

    <li>
      <img src="/images/cardImages/Smee.jpg" />
      <div class="text">Adam Smith</div>
    </li>
    <li>
      <img src="/images/cardImages/Keynes.jpg" />
      <div class="text">John Maynard Keynes</div>
    </li>
    <li>
      <img src="/images/cardImages/Nash.png" />
      <div class="text">John Nash</div>
    </li>
  </ul>
</template>

<script lang="ts">
export default {
  setup() {
  },
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
      object-fit: cover;
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