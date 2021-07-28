<template>
  <div class="LCheckbox" @click="selected">
    <i :class="[
      'Licon iconfont i-dui',
      isTouch === 1? 'In':'Out'
    ]" ></i>
    <span class="Lspan">复选框</span>
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
    border: 1px solid red;
    width: 100px;
    height: 50px;
    margin: 0 auto;
    cursor: pointer;
    i.Licon{
      display: flex;
      border: 1px solid green;
      border-radius: 100%;
      width: 18px;
      height: 18px;
      float: left;
      &.In{
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
      
    }
  }

</style>