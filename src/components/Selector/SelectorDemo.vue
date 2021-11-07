<template>
  <div>
    <h1>Tree 示例</h1>
    <toy-demo :component="Selector1Demo" />
    <toy-attributes>
      <toy-attributes-item :attributesData="data"></toy-attributes-item>
      <toy-attributes-item :attributesData="placeholder"></toy-attributes-item>
    </toy-attributes>
  </div>
</template>

<script lang="ts">
import Demo from "../ShowDemo/Demo.vue";
import Attributes from "../ShowDemo/Attributes.vue";
import AttributesItem from "../ShowDemo/AttributesItem.vue";
import Selector1Demo from "./Selector1.demo.vue";
export default {
  components: {
    "toy-demo": Demo,
    "toy-attributes": Attributes,
    "toy-attributes-item": AttributesItem,
  },
  setup() {
    const data = getData('data', '搜索数据', 'json', '——', '1-2-3')
    const placeholder = getData('placeholder', '占位符', 'string', '——', '请选择')
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
      placeholder,
      Selector1Demo,
    };
  },
};
</script>

<style lang="scss">
</style>