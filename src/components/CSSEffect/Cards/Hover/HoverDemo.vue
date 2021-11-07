<template>
  <div>
    <h1>Hover 示例</h1>
    <toy-demo :component="Hover1Demo" />
    <toy-attributes></toy-attributes>
  </div>
</template>

<script lang="ts">
import Demo from "../../../ShowDemo/Demo.vue";
import Attributes from "../../../ShowDemo/Attributes.vue";
import AttributesItem from "../../../ShowDemo/AttributesItem.vue";
import Hover1Demo from "./Hover1.demo.vue";
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
      Hover1Demo,
    };
  },
};
</script>

<style lang="scss">
</style>