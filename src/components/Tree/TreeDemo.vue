<template>
  <div>
    <h1>Tree 示例</h1>
    <toy-demo :component="Tree1Demo" />
    <toy-attributes>
      <toy-attributes-item :attributesData="menuData"></toy-attributes-item>
    </toy-attributes>
  </div>
</template>

<script lang="ts">
import Demo from "../ShowDemo/Demo.vue";
import Attributes from "../ShowDemo/Attributes.vue";
import AttributesItem from "../ShowDemo/AttributesItem.vue";
import Tree1Demo from "./Tree1.demo.vue";
export default {
  components: {
    "toy-demo": Demo,
    "toy-attributes": Attributes,
    "toy-attributes-item": AttributesItem,
  },
  setup() {
    const menuData = getData('menuData', '树形数据', 'json', '——', '——')
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
      menuData,
      Tree1Demo,
    };
  },
};
</script>

<style lang="scss">
</style>