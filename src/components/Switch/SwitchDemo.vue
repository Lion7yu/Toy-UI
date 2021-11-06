<template>
  <div>
    <h1>Switch 示例</h1>
    <toy-demo :component="Switch1Demo" />
    <toy-demo :component="Switch2Demo" />
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
import Switch1Demo from "./Switch1.demo.vue";
import Switch2Demo from "./Switch2.demo.vue";
export default {
  components: {
    "toy-demo": Demo,
    "toy-attributes": Attributes,
    "toy-attributes-item": AttributesItem,
  },
  setup() {
    const value = getData('v-model', '绑定值，选择初始的状态', 'boolean', 'true/false', '——')
    const disabled = getData('disabled', '是否禁用', 'boolean', '——', 'false')
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
      Switch1Demo,
      Switch2Demo
    };
  },
};
</script>

<style lang="scss">
</style>