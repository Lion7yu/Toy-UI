<template>
  <div class="LCheckbox" @click="selected">
    <i :class="[
      'Licon iconfont i-dui',
      isTouch === 1? 'In':'Out'
    ]" ></i>
    <span class="Lspan">请选择</span>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name:'Checkbox',
  setup(){
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
      isTouch
    }
  }
}
</script>

<style lang="scss" scoped>
  .LCheckbox{
    display: flex;
    border: 1px solid red;
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

</style>