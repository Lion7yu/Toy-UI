<template>
  <div>
    <h1>Collapse 示例</h1>
    <toy-demo :component="Collapse1Demo" />
    <toy-demo :component="Collapse2Demo" />
    <toy-attributes>
      <toy-attributes-item :attributesData="selected"></toy-attributes-item>
      <toy-attributes-item :attributesData="title"></toy-attributes-item>
      <toy-attributes-item :attributesData="value"></toy-attributes-item>
      <toy-attributes-item :attributesData="accordion"></toy-attributes-item>
    </toy-attributes>
  </div>
</template>

<script lang="ts">
import Demo from "../ShowDemo/Demo.vue";
import Attributes from "../ShowDemo/Attributes.vue";
import AttributesItem from "../ShowDemo/AttributesItem.vue";
import Collapse1Demo from "./Collapse1.demo.vue";
import Collapse2Demo from "./Collapse2.demo.vue";
export default {
  components: {
    "toy-demo": Demo,
    "toy-attributes": Attributes,
    "toy-attributes-item": AttributesItem,
  },
  setup() {
    const selected = getData('selected', '默认打开的选项', 'array', '——', '——')
    const title = getData('title', '标题', 'string', '——', '——')
    const value = getData('value', '对应的 id', 'json', 'number / string', '——')
    const accordion = getData('accordion', '是否开启手风琴', 'boolean', 'true / false', 'false')
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
      selected,
      title,
      value,
      accordion,
      Collapse1Demo,
      Collapse2Demo,
    };
  },
};
</script>

<style lang="scss">
</style>