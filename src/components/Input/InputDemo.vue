<template>
  <div>
    <h1>Input 示例</h1>
    <toy-demo :component="Input1Demo" />
    <toy-demo :component="Input4Demo" />
    <toy-demo :component="Input2Demo" />
    <toy-demo :component="Input3Demo" />

    <toy-attributes></toy-attributes>
  </div>
</template>

<script lang="ts">
import Demo from "../ShowDemo/Demo.vue";
import Attributes from "../ShowDemo/Attributes.vue";
import AttributesItem from "../ShowDemo/AttributesItem.vue";
import Input1Demo from "./Input1.demo.vue";
import Input2Demo from "./Input2.demo.vue";
import Input3Demo from "./Input3.demo.vue";
import Input4Demo from "./Input4.demo.vue";
export default {
  components: {
    "toy-demo": Demo,
    "toy-attributes": Attributes,
    "toy-attributes-item": AttributesItem,
  },
  setup() {
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
      Input1Demo,
      Input2Demo,
      Input3Demo,
      Input4Demo,
    };
  },
};
</script>

<style lang="scss">
</style>