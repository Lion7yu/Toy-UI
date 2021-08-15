<template>
  <div class="container" @scroll="onScroll" ref="container">
    <div class="panel" ref="panel" :style="{ paddingTop: paddingTop + 'px' }">
      <div class="item" v-for="item in
 visibleList" :key="item">{{ item }}</div>
    </div>
  </div>
</template>
<script>
import { ref, computed, onMounted } from "vue";
export default {
  props: {
    data: Array,
    buffBottom: { type: Number, default: 0 },
    buffTop: { type: Number, default: 0 }
  },
  setup(props) {
    let { data, buffTop, buffBottom } = props
    let container = ref(null), panel = ref(null);
    let count = 0, itemHeight = 1;
    let start = ref(0), end = ref(1);
    let paddingTop = ref(0);
    let visibleList = computed(() => data.slice(start.value,
      end.value));
    onMounted(() => {
      itemHeight = panel.value.firstElementChild.offsetHeight
      panel.value.style.height = data.length * itemHeight + 'px'
      count = Math.floor(container.value.offsetHeight / itemHeight)
      end.value = count + buffBottom
    });
    let timer = null
    const onScroll = function (e) {
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        let startValue = Math.floor(e.target.scrollTop / itemHeight);
        let buff = startValue > buffTop ? buffTop : startValue;
        start.value = startValue - buff;
        end.value = startValue + count + buffBottom;
        paddingTop.value = start.value * itemHeight;
      }, 200)
    };
    return { visibleList, paddingTop, container, panel, onScroll };
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
}
.container {
  height: 45vh;
  overflow: scroll;
}

.item {
  border: 1px solid #eee;
  padding: 6px 10px;
  cursor: pointer;
}
</style>