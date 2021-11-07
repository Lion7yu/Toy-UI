<template>
  <h2>{{ component.__sourceCodeTitle }}</h2>
  <div class="demo">
    <div class="demo-component">
      <component :is="component" />
    </div>
    <div class="demo-actions" @click="toggle">
      <div class="code-control">
        <svg class="icon">
          <use :xlink:href="svgName" />
        </svg>
        <span v-if="codeVisible">隐藏代码</span>
        <span v-else>显示代码</span>
      </div>
    </div>
    <toy-spread :visible="codeVisible">
      <div class="demo-code">
        <pre class="language-html" v-html="html" />
      </div>
    </toy-spread>
  </div>
</template>

<script lang="ts">
import Spread from '../../lib/Spread/Spread.vue'
import 'prismjs';
import 'prismjs/themes/prism.css'
import {
  computed,
  ref
} from 'vue';
const Prism = (window as any).Prism
export default {
  components: {
    "toy-spread": Spread,
  },
  props: {
    component: Object
  },
  setup(props) {
    const svgName = ref('#i-down1')
    const codeVisible = ref(false)
    const toggle = () => {
      codeVisible.value === false ? svgName.value = ('#i-up1-copy') : svgName.value = ('#i-down1')
      codeVisible.value = !codeVisible.value
    }

    const html = computed(() => {
      return Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'html')
    })

    return {
      Prism,
      html,
      codeVisible,
      toggle,
      svgName,
    }
  }
}
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
h2 {
  margin: 20px;
}
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  &:hover {
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
  }
  &-component {
    padding: 16px;
  }

  &-actions {
    cursor: pointer;
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    &:hover {
      color: #2196f3;
    }
    .code-control {
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        padding: 0 10px;
      }
    }
  }

  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;

    > pre {
      line-height: 1.1;
      font-family: Consolas, "Courier New", Courier, monospace;
      margin: 0;
    }
  }
}
</style>
