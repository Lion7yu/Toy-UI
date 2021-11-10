<template>
  <div>
    <h1>Input 示例</h1>
    <toy-demo :component="Input1Demo" />
    <toy-demo :component="Input4Demo" />
    <toy-demo :component="Input2Demo" />
    <toy-demo :component="Input3Demo" />

    <toy-attributes>
      <toy-attributes-item :attributesData="placeholder"></toy-attributes-item>
      <toy-attributes-item :attributesData="icon"></toy-attributes-item>
      <toy-attributes-item :attributesData="error"></toy-attributes-item>
      <toy-attributes-item :attributesData="disabled"></toy-attributes-item>
      <toy-attributes-item :attributesData="readonly"></toy-attributes-item>
    </toy-attributes>
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
    const placeholder = getData('placeholder', '占位符', 'string', '——', '请输入')
    const icon = getData('icon', 'icon 名称', 'string', '——', '——')
    const error = getData('error', 'error 信息', 'string', '——', '——')
    const readonly = getData('readonly', '是否为 readonly', 'boolean', 'true / false', 'false')
    const disabled = getData('disabled', '是否为 disabled', 'boolean', 'true / false', 'false')
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
      placeholder,
      icon,
      error,
      readonly,
      disabled,
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