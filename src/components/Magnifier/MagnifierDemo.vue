<template>
  <div>
    <h1>Magnifier 示例</h1>
    <toy-demo :component="Magnifier1Demo" />
    <toy-attributes>
      <toy-attributes-item :attributesData="link"></toy-attributes-item>
      <toy-attributes-item :attributesData="imgUrl"></toy-attributes-item>
      <toy-attributes-item :attributesData="imgAlt"></toy-attributes-item>
      <toy-attributes-item :attributesData="imgWidth"></toy-attributes-item>
      <toy-attributes-item :attributesData="imgHeight"></toy-attributes-item>
      <toy-attributes-item :attributesData="magWidth"></toy-attributes-item>
      <toy-attributes-item :attributesData="magHeight"></toy-attributes-item>
    </toy-attributes>
  </div>
</template>

<script lang="ts">
import Demo from "../ShowDemo/Demo.vue";
import Attributes from "../ShowDemo/Attributes.vue";
import AttributesItem from "../ShowDemo/AttributesItem.vue";
import Magnifier1Demo from "./Magnifier1.demo.vue";
export default {
  components: {
    "toy-demo": Demo,
    "toy-attributes": Attributes,
    "toy-attributes-item": AttributesItem,
  },
  setup() {
    const imgUrl = getData('imgUrl', '图片 Url', 'string', '——', '——')
    const imgAlt = getData('imgAlt', '图片描述', 'string', '——', '——')
    const link = getData('link', '跳转链接', 'string', '——', '——')
    const imgWidth = getData('imgWidth', '图片宽度', 'number', '——', '500')
    const imgHeight = getData('imgHeight', '图片高度', 'number', '——', '350')
    const magWidth = getData('magWidth', '放大镜宽度', 'number', '——', '100')
    const magHeight = getData('magHeight', '放大镜高度', 'number', '——', '100')
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
      imgUrl,
      imgAlt,
      link,
      imgWidth,
      imgHeight,
      magWidth,
      magHeight,
      Magnifier1Demo,
    };
  },
};
</script>

<style lang="scss">
</style>