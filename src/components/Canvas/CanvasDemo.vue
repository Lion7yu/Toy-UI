<template>
  <div>
    <h1>Canvas 示例</h1>
    <toy-demo :component="Canvas1Demo" />
    <toy-attributes>
      <toy-attributes-item :attributesData="canvasWidth"></toy-attributes-item>
      <toy-attributes-item :attributesData="canvasHeight"></toy-attributes-item>
      <toy-attributes-item :attributesData="fillStyle"></toy-attributes-item>
      <toy-attributes-item :attributesData="strokeStyle"></toy-attributes-item>
      <toy-attributes-item :attributesData="lineWidth"></toy-attributes-item>
      <toy-attributes-item :attributesData="lineCap"></toy-attributes-item>
    </toy-attributes>
  </div>
</template>

<script lang="ts">
import Demo from "../ShowDemo/Demo.vue";
import Attributes from "../ShowDemo/Attributes.vue";
import AttributesItem from "../ShowDemo/AttributesItem.vue";
import Canvas1Demo from "./Canvas1.demo.vue";
export default {
  components: {
    "toy-demo": Demo,
    "toy-attributes": Attributes,
    "toy-attributes-item": AttributesItem,
  },
  setup() {
    const canvasWidth = getData('canvasWidth', '画板宽度', 'number', '任意', '500')
    const canvasHeight = getData('canvasHeight', '画板高度', 'number', '任意', '300')
    const fillStyle = getData('fillStyle', '填充颜色', 'string', '任意', 'black')
    const strokeStyle = getData('strokeStyle', '描边颜色', 'string', '任意', 'black')
    const lineWidth = getData('lineWidth', '线条宽度', 'number', '任意', '8')
    const lineCap = getData('lineCap', '线段末端结束方式', 'string', 'butt / square / round', 'round')
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
      canvasWidth,
      canvasHeight,
      fillStyle,
      strokeStyle,
      lineWidth,
      lineCap,
      Canvas1Demo,
    };
  },
};
</script>

<style lang="scss">
</style>