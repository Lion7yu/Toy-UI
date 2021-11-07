<demo>
自定义空隙
</demo>
<template>
  <toy-row class="demoRow" gutter="10">
    <toy-col :xs="{ span: 8 }">
      <div class="demoCol">col-8</div>
    </toy-col>
    <toy-col :xs="{ span: 8, offset: 8 }">
      <div class="demoCol">col-8 offset-8</div>
    </toy-col>
  </toy-row>
  <toy-row class="demoRow" gutter="10">
    <toy-col :xs="{ span: 6, offset: 6 }">
      <div class="demoCol">col-6 offset-6</div>
    </toy-col>
    <toy-col :xs="{ span: 6, offset: 6 }">
      <div class="demoCol">col-6 offset-6</div>
    </toy-col>
  </toy-row>
  <toy-row class="demoRow" gutter="10">
    <toy-col :xs="{ span: 12, offset: 6 }">
      <div class="demoCol">col-12 offset-6</div>
    </toy-col>
  </toy-row>
</template>

<script lantoy="ts">
import { Row, Col, } from "../../lib/index.ts"

export default {
  components: {
    "toy-row": Row,
    "toy-col": Col,
  }
}
</script>

<style lantoy="scss" scoped>
* {
  box-sizing: border-box;
}
.demoRow {
}
.demoCol {
  height: 50px;
  font-size: 0.8em;
  background: rgb(76, 188, 240);
  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
</style>