<template>
  <div class="wrapper">
      <input class="Linput" type="button" v-show="isDisabled">
    <div
      class="LCheckbox" 
      :class='{"LCheckbox_disabled":isDisabled}'
      @click="selected">
      <i :class="[
        'Licon iconfont i-dui',
        isTouch === 1? 'In':'Out'
      ]" ></i>
      <span class="Lspan">请选择</span>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name:'Checkbox',
  props:{
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props){
    let isDisabled = ref(false)
    isDisabled.value = props.disabled
    let isTouch = ref(0)
    let methodsObj = {
      selected(){
        if(isTouch.value === 0){
          isTouch.value = 1
          console.log("选中")
        }else{
          isTouch.value = 0
          console.log('取消')
        }
      }
    }
    return {
      ...methodsObj,
      isTouch,
      isDisabled
    }
  }
}
</script>

<style lang="scss" scoped>
  .LCheckbox{
    display: flex;
    width: 80px;
    height: 30px;
    margin: 0 auto;
    cursor: pointer;
    i.Licon{
      display: flex;
      border: 1px solid #D9D9D9;
      border-radius: 100%;
      width: 18px;
      height: 18px;
      margin: 4px 0px 0px 8px;
      &.In{
        border-color: #1890FF;
        box-shadow: 0px 0px 3px 1px #1890FF;
        background:#1890FF;
      }
      &.Out{
        background: #fff;
      }
    }
    .iconfont{
      font-size: 30px;
      justify-content: center;
      align-items: center;
      color: #fff;
    }
    .Lspan{
      float: left;
      font-size: 12px;
      user-select: none;
      margin: 4px 0px 0px 8px;
    }
  }
  .LCheckbox_disabled{
    cursor: not-allowed;
    .iconfont{
      color: #D9D9D9;
    }
    .Lspan{
      color: #D9D9D9;
    }
  }
.wrapper{
  width: 80px;
  position: relative;
  margin: 0 auto;
  .Linput{
    width: 80px;
    height: 30px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    border: 0;
    opacity: 0;
    cursor: no-drop;
  }
}
</style>