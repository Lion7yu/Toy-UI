<template>
  <div>
    <h1>ImageLoader 示例</h1>
    <toy-demo :component="ImageLoader1Demo" />
    <toy-attributes></toy-attributes>
  </div>
</template>

<script lang="ts">
import Demo from "../ShowDemo/Demo.vue";
import Attributes from "../ShowDemo/Attributes.vue";
import AttributesItem from "../ShowDemo/AttributesItem.vue";
import ImageLoader1Demo from "./ImageLoader1.demo.vue";
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
      ImageLoader1Demo,
    };
  },
};
</script>

<style lang="scss">
</style>