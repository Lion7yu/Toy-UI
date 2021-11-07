<template>
  <div>
    <h1>Checkbox 示例</h1>
    <toy-demo :component="Checkbox1Demo" />
    <toy-demo :component="Checkbox2Demo" />
    <toy-attributes>
      <toy-attributes-item :attributesData="value"></toy-attributes-item>
      <toy-attributes-item :attributesData="disabled"></toy-attributes-item>
    </toy-attributes>
  </div>
</template>

<script lang="ts">
import Demo from "../ShowDemo/Demo.vue";
import Attributes from "../ShowDemo/Attributes.vue";
import AttributesItem from "../ShowDemo/AttributesItem.vue";
import Checkbox1Demo from "./Checkbox1.demo.vue";
import Checkbox2Demo from "./Checkbox2.demo.vue";
export default {
  components: {
    "toy-demo": Demo,
    "toy-attributes": Attributes,
    "toy-attributes-item": AttributesItem,
  },
  setup() {
    const value = getData('value', '选项名', 'string', '——', '——')
    const disabled = getData('disabled', '是否禁用', 'boolean', 'true / false', 'false')
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
      disabled,
      Checkbox1Demo,
      Checkbox2Demo
    };
  },
};
</script>

<style lang="scss">
</style>