<template>
  <div class="selector" v-focus>
    <SelectorInput 
      :placeholder="placehodler"
      :value="inputValue"
    />
    <SelectorMenu 
      :data="data"
      @setItemValue="setItemValue"
    />
  </div>
</template>

<script>
import SelectorInput from './selectorInput.vue'
import SelectorMenu from './Menu.vue'
import focus from './directives/focus'
import {reactive, toRefs} from 'vue'
export default {
  name:'Selector',
  props:{
    placehodler: String,
    data: Array
  },
  directives:{
    focus
  },
  components:{
    SelectorInput,
    SelectorMenu
  },
  setup(props,ctx){
    const state = reactive({
      inputValue:''
    })
    const setItemValue = (item)=>{
      state.inputValue = item.text
      ctx.emit('setItemValue',item.value)
    }
    return{
      ...toRefs(state),
      setItemValue
    }
  }
}
</script>

<style lang="scss" scoped>
  .selector{
    position: relative;
    width: 300px;
  }
</style>