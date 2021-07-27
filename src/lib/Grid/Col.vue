<template>
  <div class="col" :class="colClass" :style="colStyle">
        <slot></slot>
  </div>
</template>
<script>
  let validator = (value)=>{
    let keys = Object.keys(value)
    let valid = true
    keys.forEach(key=>{
    if(!['span','offset'].includes(key)){
      valid = false
      }
    })
    return valid
  }
export default {
  name:'LCol',
  props:{
    span:{
      type:[Number,String]
    },
    offset:{
      type:[Number,String]
    },
    xs:{
      type:Object,
      validator,
    },
    sm:{
      type:Object,
      validator,
    },
    md:{
      type:Object,
      validator,
    },
    lg:{
      type:Object,
      validator,
    },
    xl:{
      type:Object,
      validator,
    },
    xxl:{
      type:Object,
      validator,
    }
  },
  data(){
    return{
      gutter:0,
    }
  },
  methods:{
    sizeClasses (obj,str=''){
      if(!obj){return []}
      let array = []
      if(obj.span){
        array.push(`col-${str}-${obj.span}`)
      }
      if(obj.offset){
        array.push(`offset-${str}-${obj.offset}`)
      }
      return array
      }
    },
  computed:{
    colClass(){
      let {span,offset,xs,sm,md,lg,xl,xxl} = this
      let sizeClasses = this.sizeClasses
      return [
        span && `col-${span}`,
        offset && `offset-${offset}`,
        ...sizeClasses(xs,'xs'),
        ...sizeClasses(sm,'sm'),
        ...sizeClasses(md,'md'),
        ...sizeClasses(lg,'lg'),
        ...sizeClasses(xl,'xl'),
        ...sizeClasses(xxl,'xxl'),
        ]
    },
    colStyle(){
      return{
        paddingLeft:this.gutter / 2 + 'px',
        paddingRight:this.gutter / 2 + 'px',
      }
    }
  }
}
</script>
<style lang="scss">
  .col{
    $class-prefix:col-xs-; //声明一个class前缀
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n}{ //插值语法
        width: ($n/24)*100%;
      }
    }
    $class-prefix:offset-xs-; //声明一个class前缀
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n}{ //插值语法
        margin-left: ($n/24)*100%;
      }
    }
    @media(min-width:577px){
    $class-prefix:col-sm-; //声明一个class前缀
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n}{ //插值语法
        width: ($n/24)*100%;
      }
    }
    $class-prefix:offset-sm-; //声明一个class前缀
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n}{ //插值语法
        margin-left: ($n/24)*100%;
        }
      }
    }
    @media(min-width:769px){
    $class-prefix:col-md-; //声明一个class前缀
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n}{ //插值语法
        width: ($n/24)*100%;
      }
    }
    $class-prefix:offset-md-; //声明一个class前缀
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n}{ //插值语法
        margin-left: ($n/24)*100%;
        }
      }
    }
    @media(min-width:993px){
    $class-prefix:col-lg-; //声明一个class前缀
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n}{ //插值语法
        width: ($n/24)*100%;
      }
    }
    $class-prefix:offset-lg-; //声明一个class前缀
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n}{ //插值语法
        margin-left: ($n/24)*100%;
        }
      }
    }
    @media(min-width:1201px){
    $class-prefix:col-xl-; //声明一个class前缀
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n}{ //插值语法
        width: ($n/24)*100%;
      }
    }
    $class-prefix:offset-xl-; //声明一个class前缀
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n}{ //插值语法
        margin-left: ($n/24)*100%;
        }
      }
    }
    @media(min-width:1601px){
    $class-prefix:col-xxl-; //声明一个class前缀
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n}{ //插值语法
        width: ($n/24)*100%;
      }
    }
    $class-prefix:offset-xxl-; //声明一个class前缀
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n}{ //插值语法
        margin-left: ($n/24)*100%;
        }
      }
    }
  }
</style>