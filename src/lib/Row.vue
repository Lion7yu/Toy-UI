<template>
  <div class="row" style="rowStyle" :class="rowClass"> 
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'LRow',
  props:{
    gutter:{
      type:[Number,String]
    },
    align:{
      type:String,
      validator(value){
        return ['left','right','center'].indexOf(value) >= 0;
      }
    }
  },
  computed:{
    rowStyle(){
      let {gutter} = this
      console.log('gutter')
      console.log(gutter)
      return {
        marginLeft:-gutter/2+'px',
        marginRight:-gutter/2+'px'
        }
      },
      rowClass(){
        let {align} = this
        return [align && `align-${align}`]
      }
  },
  mounted(){
    console.log('this')
    console.log(this)
    console.log('this.gutter1')
    console.log(this.gutter)
    console.log('this.$refs')
    console.log(this.$$refs)
    this.$refs.forEach((vm)=>{
      vm.gutter = this.gutter
    })
  }
}
</script>

<style lang="scss" scoped>
  .row{
    display: flex;
    flex-wrap: wrap;
    &.align-left{
      justify-content: flex-start;
    }
    &.align-right{
      justify-content: flex-end;
    }
    &.align-center{
      justify-content: center;
    }
  }
</style>