<demo>
自动排序
</demo>
<template>
  <div class="container">
    <div class="box">
      <transition-group name="flip-list">
        <div
          v-for="item in items"
          :key="item"
          draggable="true"
          class="items"
          :class="{ active: oldVal == item && isActive == item }"
          @dragstart="dragstart(item)"
          @dragenter="dragenter(item)"
          @dragend="dragend(item)"
        >{{ item }}</div>
      </transition-group>
    </div>
  </div>
</template>

<script>import { reactive, toRefs } from "vue"

export default {
  setup() {
    const state = reactive({
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      isActive: 0,
      oldVal: 0,
      newOld: 0,
    })

    const dragstart = (val) => {
      console.log(state.test)
      state.oldVal = val
      state.isActive = val
    }

    const dragend = (val) => {
      if (state.oldVal !== state.newOld) {
        let oldIndex = state.items.indexOf(state.oldVal);
        let newIndex = state.items.indexOf(state.newOld);
        let newItems = [...state.items];
        newItems.splice(oldIndex, 1)
        newItems.splice(newIndex, 0, state.oldVal)
        state.items = [...newItems]
        state.isActive = -1
      }
    }

    const dragenter = (val) => {
      state.newOld = val
    }

    return {
      ...toRefs(state), dragend, dragenter, dragstart
    }
  }
}
</script>

<style lang="scss" scoped>
.flip-list-move {
  transition: transform 0.3s ease-in;
}

.box {
  display: block;
  display: flex;
  width: 500px;
  flex-wrap: wrap;
  margin: auto;
}

.items {
  width: 100px;
  height: 50px;
  margin: 10px;
  line-height: 50px;
  text-align: center;
  cursor: grab;
  color: rgb(64, 169, 255);

  box-shadow: 0 0 2px rgb(76, 188, 240);
}

.items.active {
  background: rgb(76, 188, 240);
  color: #fff;
}
</style>