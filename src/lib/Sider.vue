<template>
  <transition name="slide">
    <div class="sider" v-if="visible">
    <slot></slot>
      <button @click="visible=false">close</button>
    </div>
  </transition>
</template>

<script>
export default {
  name:'LSider',
  data(){
    return{
      visible:true
    }
  },
  methods:{
    enter: function (el,done){
      done()
    },
    leave: function (el,done){
      done()
    }
  }
}
</script>

<style lang="scss" scoped>
  .sider{
    position: relative;
    > button{
    position: absolute;
    top: 0;
    right: 0;
    }
  }
  .slide-enter-active, .slide-leave-active{
    transition: all .5s;
  }
  .slide-enter, .slide-leave-to{
    margin-left: -200px;
  }
</style>