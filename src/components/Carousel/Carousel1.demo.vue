<demo>
常规使用
</demo>
<template>
  <div class="container">
    <Carousel>
      <CarouselItem v-for="(item,index) of carouselData" :key="index">
        <!-- <img :src="require(`../../lib/Carousel/assets/${item.img_name}`)" /> -->
      </CarouselItem>
    </Carousel>
  </div>
</template>

<script lang="ts">
import { Carousel } from "../../lib/index"
import { CarouselItem } from "../../lib/index"
import carouselData from "../../lib/Carousel/carousel"
export default {
  components: {
    Carousel,
    CarouselItem
  },
  setup() {
    return {
      carouselData
    }
  }
}
</script>

<style lang="scss" scoped>
</style>