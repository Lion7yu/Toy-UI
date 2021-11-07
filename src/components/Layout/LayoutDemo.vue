<template>
  <div>
    <h1>Layout 示例</h1>
    <toy-demo :component="Layout1Demo" />
    <toy-demo :component="Layout2Demo" />
    <toy-demo :component="Layout3Demo" />
    <toy-attributes>
      <toy-attributes-item :attributesData="hasSider"></toy-attributes-item>
    </toy-attributes>
  </div>
</template>

<script lang="ts">
import Demo from "../ShowDemo/Demo.vue";
import Attributes from "../ShowDemo/Attributes.vue";
import AttributesItem from "../ShowDemo/AttributesItem.vue";
import Layout1Demo from "./Layout1.demo.vue";
import Layout2Demo from "./Layout2.demo.vue";
import Layout3Demo from "./Layout3.demo.vue";
export default {
  components: {
    "toy-demo": Demo,
    "toy-attributes": Attributes,
    "toy-attributes-item": AttributesItem,
  },
  setup() {
    const hasSider = getData('has-sider', '是否含有 sider', 'boolean', 'true / false', 'false')
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
      hasSider,
      Layout1Demo,
      Layout2Demo,
      Layout3Demo,
    };
  },
};
</script>

<style lang="scss">
</style>