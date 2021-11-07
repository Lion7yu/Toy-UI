<template>
  <div>
    <h1>Tree 示例</h1>
    <toy-demo :component="Carousel1Demo" />
    <toy-attributes>
      <toy-attributes-item :attributesData="autoplay"></toy-attributes-item>
      <toy-attributes-item :attributesData="duration"></toy-attributes-item>
      <toy-attributes-item :attributesData="initial"></toy-attributes-item>
      <toy-attributes-item :attributesData="hasDot"></toy-attributes-item>
      <toy-attributes-item :attributesData="hasDirector"></toy-attributes-item>
      <toy-attributes-item :attributesData="dotBgColor"></toy-attributes-item>
    </toy-attributes>
  </div>
</template>

<script lang="ts">
import Demo from "../ShowDemo/Demo.vue";
import Attributes from "../ShowDemo/Attributes.vue";
import AttributesItem from "../ShowDemo/AttributesItem.vue";
import Carousel1Demo from "./Carousel1.demo.vue";
export default {
  components: {
    "toy-demo": Demo,
    "toy-attributes": Attributes,
    "toy-attributes-item": AttributesItem,
  },
  setup() {
    const autoplay = getData('autoplay', '是否自动轮播', 'boolean', 'true / false', 'true')
    const duration = getData('duration', '图片停留时间', 'number', '——', '3000')
    const initial = getData('initial', '起始图片 id', 'number', '0 - (n-1)', '0')
    const hasDot = getData('hasDot', '是否有切换圆点', 'boolean', 'true / false', 'true')
    const hasDirector = getData('hasDirector', '是否有两侧方向按钮', 'boolean', 'true / false', 'true')
    const dotBgColor = getData('dotBgColor', '圆点颜色', 'string', '——', '——')
    function getData(argument, explain, type, options, initial) {
      return {
        argument: argument,
        explain: explain,
        type: type,
        options: options,
        initial: initial
      }
    }
    return {
      autoplay,
      duration,
      initial,
      hasDot,
      hasDirector,
      dotBgColor,
      Carousel1Demo,
    };
  },
};
</script>

<style lang="scss">
</style>