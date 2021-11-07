<template>
  <div>
    <h1>Dialog 示例</h1>
    <toy-demo :component="Dialog1Demo" />
    <toy-demo :component="Dialog2Demo" />
    <toy-attributes>
      <toy-attributes-item :attributesData="visible"></toy-attributes-item>
      <toy-attributes-item :attributesData="closeOnClickOverlay"></toy-attributes-item>
      <toy-attributes-item :attributesData="ok"></toy-attributes-item>
      <toy-attributes-item :attributesData="cancel"></toy-attributes-item>
      <toy-attributes-item :attributesData="content"></toy-attributes-item>
      <toy-attributes-item :attributesData="title"></toy-attributes-item>
    </toy-attributes>
  </div>
</template>

<script lang="ts">
import Demo from "../ShowDemo/Demo.vue";
import Attributes from "../ShowDemo/Attributes.vue";
import AttributesItem from "../ShowDemo/AttributesItem.vue";
import Dialog1Demo from "./Dialog1.demo.vue";
import Dialog2Demo from "./Dialog2.demo.vue";
export default {
  components: {
    "toy-demo": Demo,
    "toy-attributes": Attributes,
    "toy-attributes-item": AttributesItem,
  },
  setup() {
    const visible = getData('v-model:visible', '绑定值，更改状态', 'string', '——', '——')
    const closeOnClickOverlay = getData('closeOnClickOverlay', '是否点击遮罩层关闭 Dialog', 'boolean', 'true / false', 'false')
    const ok = getData('ok', '点击 ok 后执行的函数', 'function', '——', '——')
    const cancel = getData('cancel', '点击 cancel 后执行的函数', 'function', '——', '——')
    const content = getData('v-slot:content', '名为 content 的插槽', 'template', '——', '——')
    const title = getData('v-slot:title', '名为 title 的插槽', 'template', '——', '——')
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
      visible,
      closeOnClickOverlay,
      ok,
      cancel,
      content,
      title,
      Dialog1Demo,
      Dialog2Demo,
    };
  },
};
</script>

<style lang="scss">
</style>