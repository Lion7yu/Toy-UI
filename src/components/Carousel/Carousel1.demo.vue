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
        <img :src="getImageUrl(item.img_name)" />
      </CarouselItem>
    </Carousel>
  </div>
</template>

<script lang="ts">
import { Carousel } from "../../lib/index";
import { CarouselItem } from "../../lib/index";
import carouselData from "../../lib/Carousel/carousel";
export default {
  components: {
    Carousel,
    CarouselItem,
  },
  setup() {
    const getImageUrl = (name) => {
      return new URL(`../../assets/carouselImages/${name}`, import.meta.url).href;
    };
    return {
      carouselData,
      getImageUrl,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  overflow: hidden;
  margin: auto;
  overflow-x: auto;
  overflow-y: auto;
  width: 500px;
  height: 280px;
}
img {
  width: 100%;
  height: 100%;
}
</style>