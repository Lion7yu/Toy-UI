<template>
  <div>
    <h1>LongList 示例</h1>
    <toy-demo :component="LongList1Demo" />
    <toy-attributes>
      <toy-attributes-item :attributesData="data"></toy-attributes-item>
      <toy-attributes-item :attributesData="buffBottom"></toy-attributes-item>
      <toy-attributes-item :attributesData="buffTop"></toy-attributes-item>
    </toy-attributes>
  </div>
</template>

<script lang="ts">
import Demo from "../ShowDemo/Demo.vue";
import Attributes from "../ShowDemo/Attributes.vue";
import AttributesItem from "../ShowDemo/AttributesItem.vue";
import LongList1Demo from "./LongList1.demo.vue";
export default {
  components: {
    "toy-demo": Demo,
    "toy-attributes": Attributes,
    "toy-attributes-item": AttributesItem,
  },
  setup() {
    const data = getData('data', '数据', 'Array', '——', '——')
    const buffBottom = getData('buffBottom', '底部预加载数量', 'number', '——', '0')
    const buffTop = getData('buffTop', '顶部预加载数量', 'number', '——', '0')
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
      data,
      buffBottom,
      buffTop,
      LongList1Demo,
    };
  },
};
</script>

<style lang="scss">
</style>