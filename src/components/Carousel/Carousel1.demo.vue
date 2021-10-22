<demo>
常规使用
</demo>
<template>
  <div class="container">
    <Carousel
      :autoplay="true"
      :duration="3000"
      :initial="0"
      :hasDot="true"
      :hasDirector="true"
      dotBgColor="#000"
    >
      <CarouselItem v-for="(item, index) of carouselData" :key="index">
        <img :src="item.img_name" />
      </CarouselItem>
    </Carousel>
  </div>
</template>

<script lang="ts">
import { Carousel } from "../../lib/index";
import { CarouselItem } from "../../lib/index";
import xili from "/images/carouselImages/xili.png"
import blazer from "/images/carouselImages/blazer.png"
import mdla from "/images/carouselImages/mdla.jpg"
import staple from "/images/carouselImages/staple.jpg"
import milk from "/images/carouselImages/milk.png"
export default {
  components: {
    Carousel,
    CarouselItem,
  },
  setup() {
    const carouselData = [
      {
        img_name: xili,
      },
      {
        img_name: blazer
      },
      {
        img_name: mdla
      },
      {
        img_name: staple
      },
      {
        img_name: milk
      },
    ]
    return {
      carouselData,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  overflow: hidden;
  margin: auto;
  width: 500px;
  height: 280px;
  scroll-snap-type: x mandatory;
}
img {
  scroll-snap-align: center;
  width: 100%;
  height: 100%;
}
</style>