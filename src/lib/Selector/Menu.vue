<template>
  <div class="selector-menu">
    <div class="menu-item" v-for="(item,index) of data"
    :key="index"
    @click="setItemValue(item)"
    >
    {{item.text}}
    </div>
  </div>
</template>

<script>
export default {
  name:'SelectorMenu',
  props:{
    data:{
      type:Array,
      default(){
        return [
          {
            id:1,
            value:'1',
            text:'选项1'
          },
          {
            id:2,
            value:'2',
            text:'选项2'
          },
          {
            id:3,
            value:'3',
            text:'选项3'
          },
        ]
      }
    } 
  },
  setup(props,ctx){
    const setItemValue = (item) => {
      ctx.emit('setItemValue',item)
    }
    return{
      setItemValue
    }
  }
}
</script>

<style lang="scss" scoped>
  .selector-menu{
    display: none;
    position: absolute;
    left: 0;
    top: 48px;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 0 10px #ddd;
    border-radius: 5px;
    cursor: pointer;

    .menu-item{
      height: 35px;
      text-align: center;
      line-height: 35px;
      font-size: 14px;
      color: #666;
      margin: 10px 0;
      transition: background-color .2s linear;

      &:hover{
        background-color: #ededed;
      }
    }
  }

</style>