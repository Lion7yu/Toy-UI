<template>
  <div>
    <h1>Rate 示例</h1>
    <toy-demo :component="Rate1Demo" />
    <toy-attributes>
      <toy-attributes-item :attributesData="size"></toy-attributes-item>
      <toy-attributes-item :attributesData="num"></toy-attributes-item>
    </toy-attributes>
  </div>
</template>

<script lang="ts">
import Demo from "../ShowDemo/Demo.vue";
import Attributes from "../ShowDemo/Attributes.vue";
import AttributesItem from "../ShowDemo/AttributesItem.vue";
import Rate1Demo from "./Rate1.demo.vue";
export default {
  components: {
    "toy-demo": Demo,
    "toy-attributes": Attributes,
    "toy-attributes-item": AttributesItem,
  },
  setup() {
    const size = getData('size', '尺寸', 'number', '——', 30)
    const num = getData('num', '初始数量', 'number', '0 - 5', '0')
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
      size,
      num,
      Rate1Demo,
    };
  },
};
</script>

<style lang="scss">
</style>