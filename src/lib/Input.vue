<template>
  <!-- 如果存在error就有error类 -->
  <div class="wrapper" :class="{error}">
    <input :value="value" type="text" :disabled="disabled" :readonly="readonly"
      @change="$emit('change',$event.target.value)"
      @input="$emit('input',$event.target.value)"
      @focus="$emit('focus',$event.target.value)"
      @blur="$emit('blur',$event.target.value)"
    >
    <template v-if="error">
      <span class="errorMessage">{{error}}</span>
    </template>
  </div>
</template>

<script>
export default {
  props:{
    value:{
      type:String,
    },
    disabled:{
      type:Boolean,
      default:false
    },
    readonly:{
      type:Boolean,
      default:false
    },
    error:{
      type:String,
    }
  }
}
</script>

<style lang="scss" scoped>
  $height:32px;
  $border-color:#999;
  $border-radius:4px;
  $font-size:14px;
  $box-shadow-color:rgba(0,0,0,0.5);
  $red: #F1453D;
  .wrapper{
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: $font-size;
    >:not(:last-child){margin-right: .4em;}
    > input{
      height: $height;
      border: 1px solid $border-color;
      border-radius: $border-radius;
      padding: 0 8px;
      font-size: inherit;
      &:hover{
        border-color: #666;
      }
      &:focus{
        box-shadow: inset 0 1px 3px $box-shadow-color;
        outline: none;
      }
      &[disabled]{
        border-color: #bbb;
        color: #bbb;
        cursor: not-allowed;
      }
      &[readonly]{
        border-color: #bbb;
        color: #bbb;
      }
    }
    &.error{
     > input{
       border-color: $red;
     }
    }
    .icon-error{
      fill:$red
    }
    .errorMessage{
      color:$red
    }
  }
</style>