<demo>
常规使用
</demo>
<template>
<div>
  <Row class="demoRow">
    <Col :xs="{span:12}">
      <div class="demoCol">12</div>
    </Col>
    <Col :xs="{span:12}">
      <div class="demoCol">12</div>
    </Col>
  </Row>
  <Row class="demoRow">
    <Col :xs="{span:8}">
      <div class="demoCol">8</div>
    </Col>
    <Col :xs="{span:8}">
      <div class="demoCol">8</div>
    </Col>
    <Col :xs="{span:8}">
      <div class="demoCol">8</div>
    </Col>
  </Row>
  <Row class="demoRow">
    <Col :xs="{span:6}">
      <div class="demoCol">6</div>
    </Col>
    <Col :xs="{span:6}">
      <div class="demoCol">6</div>
    </Col>
    <Col :xs="{span:6}">
      <div class="demoCol">6</div>
    </Col>
    <Col :xs="{span:6}">
      <div class="demoCol">6</div>
    </Col>
  </Row>
</div>

</template>

<script lang="ts">
import {Row} from "../../lib/index"
import {Col} from "../../lib/index"
import {Button} from "../../lib/index"
export default {
  components: {
    Row,
    Col,
    Button
  }
}
</script>

<style lang="scss" scoped>
  .demoRow{
  }
  .demoCol{
    height: 50px;
    background: #0C78FF;
    border: 1px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
</style>