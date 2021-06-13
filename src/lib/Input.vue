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
    <svg class="icon">
      <use xlink:href="#i-error"></use>
    </svg>
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

<style lang="scss" >
  $height:32px;
  $border-color:#999;
  $border-radius:4px;
  $font-size:14px;
  $box-shadow-color:rgba(0,0,0,0.5);
  $red: #F1453D;
  $blue: #40a9ff;
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
        border-color: $blue;
        box-shadow: 0px 0px 3px 1px $blue;
      }
      &:focus{
        border-color: $blue;
        box-shadow: 0px 0px 3px 1px $blue;
        outline: none;
      }
      &[disabled]{
        box-shadow: none;
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
       color: $red;
     }
     :hover{
       box-shadow: 0px 0px 3px 1px $red;
     }
     :focus{
       border-color: $red;
       box-shadow: 0px 0px 3px 1px $red;
     }
     >svg{
       fill:$red;
       &:hover{
         box-shadow: none;
       }
     }
     >span{
       &:hover{
         box-shadow: none;
       }
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