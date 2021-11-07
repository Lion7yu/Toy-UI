<template>
  <div>
    <h1>Popover 示例</h1>
    <toy-demo :component="Popover1Demo" />
    <toy-demo :component="Popover2Demo" />
    <toy-attributes>
      <toy-attributes-item :attributesData="slot"></toy-attributes-item>
      <toy-attributes-item :attributesData="trigger"></toy-attributes-item>
      <toy-attributes-item :attributesData="position"></toy-attributes-item>
    </toy-attributes>
  </div>
</template>

<script lang="ts">
import Demo from "../ShowDemo/Demo.vue";
import Attributes from "../ShowDemo/Attributes.vue";
import AttributesItem from "../ShowDemo/AttributesItem.vue";
import Popover1Demo from "./Popover1.demo.vue";
import Popover2Demo from "./Popover2.demo.vue";
export default {
  components: {
    "toy-demo": Demo,
    "toy-attributes": Attributes,
    "toy-attributes-item": AttributesItem,
  },
  setup() {
    const slot = getData('v-slot', '具名插槽', 'string', '——', 'content')
    const trigger = getData('trigger', '触发方式', 'string', 'hover / click', 'click')
    const position = getData('position', '触发方向', 'string', 'left / top / right / bottom ', 'top')
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
      slot,
      trigger,
      position,
      Popover1Demo,
      Popover2Demo,
    };
  },
};
</script>

<style lang="scss">
</style>