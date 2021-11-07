<demo>
Accordion 手风琴
</demo>
<template>
  <div>
    <toy-collapse :selected.sync="selectedTab" accordion>
      <toy-collapse-item title="标题一" value="1">我见青山多妩媚，料青山见我应如是。—— 辛弃疾</toy-collapse-item>
      <toy-collapse-item title="标题二" value="2">江山如此多娇，引无数英雄竞折腰。—— 毛泽东</toy-collapse-item>
      <toy-collapse-item title="标题三" value="3">落霞与孤鹜齐飞，秋水共长天一色。—— 王勃</toy-collapse-item>
    </toy-collapse>
  </div>
</template>

<script lang="ts">
import { Collapse } from "../../lib/index"
import { CollapseItem } from "../../lib/index"

export default {
  components: {
    "toy-collapse": Collapse,
    "toy-collapse-item": CollapseItem
  },
  data() {
    return { selectedTab: ['3'] }
  }
}
</script>

<style lang="scss" scoped>
</style>