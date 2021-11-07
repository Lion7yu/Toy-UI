<template>
  <div>
    <h1>Radio 示例</h1>
    <toy-demo :component="Radio1Demo" />
    <toy-attributes>
      <toy-attributes-item :attributesData="value"></toy-attributes-item>
      <toy-attributes-item :attributesData="label"></toy-attributes-item>
    </toy-attributes>
  </div>
</template>

<script lang="ts">
import Demo from "../ShowDemo/Demo.vue";
import Attributes from "../ShowDemo/Attributes.vue";
import AttributesItem from "../ShowDemo/AttributesItem.vue";
import Radio1Demo from "./Radio1.demo.vue";
export default {
  components: {
    "toy-demo": Demo,
    "toy-attributes": Attributes,
    "toy-attributes-item": AttributesItem,
  },
  setup() {
    const value = getData('v-model', '绑定值，绑定 label', 'string', '——', '——')
    const label = getData('label', '选项的值', 'string', '——', '——')
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
      value,
      label,
      Radio1Demo,
    };
  },
};
</script>

<style lang="scss">
</style>