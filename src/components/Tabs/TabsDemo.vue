<template>
  <div>
    <h1>Tabs 示例</h1>
    <toy-demo :component="Tabs1Demo" />
    <toy-attributes>
      <toy-attributes-item :attributesData="value"></toy-attributes-item>
      <toy-attributes-item :attributesData="title"></toy-attributes-item>
    </toy-attributes>
  </div>
</template>

<script lang="ts">
import Demo from "../ShowDemo/Demo.vue";
import Attributes from "../ShowDemo/Attributes.vue";
import AttributesItem from "../ShowDemo/AttributesItem.vue";
import Tabs1Demo from "./Tabs1.demo.vue";
export default {
  components: {
    "toy-demo": Demo,
    "toy-attributes": Attributes,
    "toy-attributes-item": AttributesItem,
  },
  setup() {
    const value = getData('v-model', '绑定值,选择初始选项卡的 title', 'string', '——', '——')
    const title = getData('title', '选项卡的值', 'string', '——', '——')
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
      title,
      Tabs1Demo,
    };
  },
};
</script>

<style lang="scss">
</style>