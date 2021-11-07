<template>
  <div>
    <h1>Button 示例</h1>
    <toy-demo :component="Button1Demo" />
    <toy-demo :component="Button2Demo" />
    <toy-demo :component="Button3Demo" />
    <toy-demo :component="Button4Demo" />
    <toy-demo :component="Button5Demo" />
    <toy-attributes>
      <toy-attributes-item :attributesData="theme"></toy-attributes-item>
      <toy-attributes-item :attributesData="level"></toy-attributes-item>
      <toy-attributes-item :attributesData="icon"></toy-attributes-item>
      <toy-attributes-item :attributesData="iconPosition"></toy-attributes-item>
      <toy-attributes-item :attributesData="ButtonGroup"></toy-attributes-item>
      <toy-attributes-item :attributesData="loading"></toy-attributes-item>
    </toy-attributes>
  </div>
</template>

<script lang="ts">
import Demo from "../ShowDemo/Demo.vue";
import Attributes from "../ShowDemo/Attributes.vue";
import AttributesItem from "../ShowDemo/AttributesItem.vue";
import Button1Demo from "./Button1.demo.vue";
import Button2Demo from "./Button2.demo.vue";
import Button3Demo from "./Button3.demo.vue";
import Button4Demo from "./Button4.demo.vue";
import Button5Demo from "./Button5.demo.vue";
export default {
  components: {
    "toy-demo": Demo,
    "toy-attributes": Attributes,
    "toy-attributes-item": AttributesItem,
  },
  setup() {
    const theme = getData('theme', '按钮种类', 'string', 'button / link / text', 'button')
    const level = getData('leave', '按钮级别', 'string', 'normal / main / danger', 'normal')
    const icon = getData('icon', 'icon 名称', 'string', '——', '——')
    const iconPosition = getData('iconPosition', 'icon 位置', 'string', 'left / right', 'left')
    const ButtonGroup = getData('ButtonGroup', '按钮组合', '——', '——', '——')
    const loading = getData('loading', '是否加载中', 'boolean', 'true / false', 'false')
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
      icon,
      theme,
      level,
      iconPosition,
      ButtonGroup,
      loading,
      Button1Demo,
      Button2Demo,
      Button3Demo,
      Button4Demo,
      Button5Demo,
    };
  },
};
</script>

<style lang="scss">
</style>