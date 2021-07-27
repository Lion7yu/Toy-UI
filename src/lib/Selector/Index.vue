<template>
  <div class="selector" v-focus>
    <SelectorInput 
      :placeholder="placehodler"
    />
  </div>
</template>

<script>
import SelectorInput from './selectorInput.vue'
import focus from './dir'
export default {
  name:'Selector',
  props:{
    placehodler: String,
  },
  components:{
    SelectorInput
  }
}
</script>

<style lang="scss" scoped>
  .selector{
    position: relative;
    width: 300px;
  }
</style>