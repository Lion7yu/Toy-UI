<template>
  <div class="selector-input">
    <label class="placeholder">{{placeholder}}</label>
    <input type="text" 
      class="input"
      :value="value"
    />
    <span class="iconfont i-down"></span>
  </div>
</template>

<script>
export default {
  name:'SelectorInput',
  props:{
    placeholder: {
      type:String,
      default:'请选择'
    },
    value: String 
  }
}
</script>

<style lang="scss" scoped>
  .selector-input{
    position: relative;
    width: 100%;
    height: 38px;

    .input{
      width: 100%;
      height: 100%;
      padding: 0 15px;
      box-sizing: border-box;
      background-color: #fff;
      border: 1px solid #999;
      border-radius: 4px;
      outline: none;
      transition: all .2s linear;

      &:focus{
        border-color: #1890ff;
        box-shadow: 0 0 3px #1890ff;
      }
    }
    .placeholder,.iconfont{
      position: absolute;
    }
    .placeholder{
      left: 15px;
      top: 8px;
      color: #999;
    }
    .iconfont{
      font-size: 22px;
      right: 4px;
      top: 4px;
      color: #999;
      &.icon-search{
      font-size: 22px;
      top: 8px;
      }
    }
  }



 


</style>