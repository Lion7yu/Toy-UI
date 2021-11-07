<template>
  <div>
    <h1>Grid 示例</h1>
    <toy-demo :component="Grid1Demo" />
    <toy-demo :component="Grid2Demo" />
    <toy-demo :component="Grid3Demo" />
    <toy-attributes>
      <toy-attributes-item :attributesData="span"></toy-attributes-item>
      <toy-attributes-item :attributesData="gutter"></toy-attributes-item>
      <toy-attributes-item :attributesData="align"></toy-attributes-item>
      <toy-attributes-item :attributesData="offset"></toy-attributes-item>
      <toy-attributes-item :attributesData="xs"></toy-attributes-item>
      <toy-attributes-item :attributesData="sm"></toy-attributes-item>
      <toy-attributes-item :attributesData="md"></toy-attributes-item>
      <toy-attributes-item :attributesData="lg"></toy-attributes-item>
      <toy-attributes-item :attributesData="xl"></toy-attributes-item>
      <toy-attributes-item :attributesData="xxl"></toy-attributes-item>
    </toy-attributes>
  </div>
</template>

<script lang="ts">
import Demo from "../ShowDemo/Demo.vue";
import Attributes from "../ShowDemo/Attributes.vue";
import AttributesItem from "../ShowDemo/AttributesItem.vue";
import Grid1Demo from "./Grid1.demo.vue";
import Grid2Demo from "./Grid2.demo.vue";
import Grid3Demo from "./Grid3.demo.vue";
export default {
  components: {
    "toy-demo": Demo,
    "toy-attributes": Attributes,
    "toy-attributes-item": AttributesItem,
  },
  setup() {
    const span = getData('span', '跨径', 'number / string', '0 - 24', '——')
    const gutter = getData('gutter', '间隔', 'number / string', '——', '——')
    const align = getData('align', '排列方式', 'string', 'left (靠左) / center / right', '——')
    const offset = getData('offset', '偏移', 'number / string', '0 - 24', '——')
    const xs = getData('xs', '尺寸 屏幕宽度 < 577', 'object', '——', '——')
    const sm = getData('sm', '尺寸 屏幕宽度 < 769', 'object', '——', '——')
    const md = getData('md', '尺寸 屏幕宽度 < 993', 'object', '——', '——')
    const lg = getData('lg', '尺寸 屏幕宽度 < 1201', 'object', '——', '——')
    const xl = getData('xl', '尺寸 屏幕宽度 < 1601', 'object', '——', '——')
    const xxl = getData('xxl', '尺寸 屏幕宽度 > 1601', 'object', '——', '——')
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
      span,
      gutter,
      align,
      offset,
      xs,
      sm,
      md,
      lg,
      xl,
      xxl,
      Grid1Demo,
      Grid2Demo,
      Grid3Demo,
    };
  },
};
</script>

<style lang="scss">
</style>