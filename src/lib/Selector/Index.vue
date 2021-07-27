<template>
  <div class="selector" v-focus>
    <SelectorInput 
      :placeholder="placehodler"
      :value="inputValue"
      @searchOptions="searchOptions"
    />
    <SelectorMenu 
      :data="data"
      @setItemValue="setItemValue"
      :searchValue="searchValue"
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
      inputValue:'',
      searchValue:''
    })
    const setItemValue = (item)=>{
      state.inputValue = item.text
      ctx.emit('setItemValue',item.value)
    }
    const searchOptions = (value) =>{
      state.searchValue = value
    } 
    return{
      ...toRefs(state),
      setItemValue,
      searchOptions
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