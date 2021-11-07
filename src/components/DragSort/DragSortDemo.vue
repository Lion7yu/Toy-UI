<template>
  <div>
    <h1>DragSort 示例</h1>
    <toy-demo :component="DragSort1Demo" />
    <toy-demo :component="DragSort2Demo" />
    <toy-attributes></toy-attributes>
  </div>
</template>

<script lang="ts">
import Demo from "../ShowDemo/Demo.vue";
import Attributes from "../ShowDemo/Attributes.vue";
import AttributesItem from "../ShowDemo/AttributesItem.vue";
import DragSort1Demo from "./DragSort1.demo.vue";
import DragSort2Demo from "./DragSort2.demo.vue";
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
      DragSort1Demo,
      DragSort2Demo,
    };
  },
};
</script>

<style lang="scss">
</style>