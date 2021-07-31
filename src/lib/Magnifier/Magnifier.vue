<template>
  <div v-magnifier 
    class="img-wrapper"
    :style="{
      width: imgWidth + 'px',
      height: imgHeight + 'px'
    }"
  >
    <a class="mag-wrapper" 
      :href="link"
      :target="blank ? '_blank' : '' "
      :style="{
        width:magWidth + 'px',
        height:magHeight + 'px'
      }"
    >
      <img class="mag-img" 
        :src="imgUrl" 
        :alt="imgAlt"
        :style="{
          width:imgWidth + 'px',
          height:imgHeight + 'px',
        }"
        />
    </a>

    <a class="img-link" :href="link">
      <img class="static-img" 
        :src="imgUrl" 
        :alt="imgAlt"
        />  
    </a>    
  </div>
</template>

<script>

import magnifier from './directives/magnifier'

export default {
  name:'Magnifier',
  directives:{
    magnifier
  },
  props:{
    imgWidth:{
      type:Number,
      default:500
    },
    imgHeight:{
      type: Number,
      default:350
    },
    magWidth:{
      type:Number,
      default:100
    },
    magHeight:{
      type:Number,
      default:100
    },
    blank:{
      type: Boolean,
      default:false
    },
    link:{
      type:String
    },
    imgUrl:{
      type:String
    },
    imgAlt:{
      type:String
    }
  }
}
</script>

<style lang="scss" scoped>
  .img-wrapper{
    position: relative;
    border: 1px solid #ddd;
    box-shadow: 0 0 5px 1px #999;

    .static-img{
      width: 100%;
    }

    .mag-wrapper{
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9;
    background-color: #fff;
    box-shadow: 0 0 3px .5px #000;
    cursor: move;
    overflow: hidden;
    transform: scale(1.5);

      &.show{
        display: block;
        transform: scale(1.5);
      }

      .mag-img{
        position: absolute;
        top: 0;
        left: 0;
      }
    }
  }
</style>