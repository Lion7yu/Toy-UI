<demo>
竖向/横向展开
</demo>
<template>
  <div class="example-wrapper">
    <div class="example">
      <toy-button @click="columnToggle">竖向展开</toy-button>
      <toy-spread :visible="columnOpen">
        <div class="box box-1"></div>
      </toy-spread>
    </div>
    <div class="example">
      <toy-button @click="rowToggle">横向展开</toy-button>
      <toy-spread :visible="rowOpen" horizontal>
        <div class="box box-2"></div>
      </toy-spread>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue'
import { Spread } from "../../lib/index"
import { Button } from "../../lib/index"

export default {
  components: {
    "toy-spread": Spread,
    "toy-button": Button
  },
  setup() {
    const state = reactive({
      columnOpen: false,
      rowOpen: false
    })

    const columnToggle = () => {
      state.columnOpen = !state.columnOpen
    }
    const rowToggle = () => {
      state.rowOpen = !state.rowOpen
    }
    return { ...toRefs(state), columnToggle, rowToggle }
  }
}
</script>

<style lang="scss" scoped>
.example-wrapper {
  display: flex;
  height: 50vh;
  width: 800px;
  .example {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    height: 100%;
    .toy-button {
      margin-top: 0.5em;
    }
    .box {
      margin-top: 0.5em;
      min-width: 300px;
      height: 200px;
      &.box-1 {
        background: lightblue;
      }
      &.box-2 {
        background: lightcoral;
      }
    }
  }
}
</style>