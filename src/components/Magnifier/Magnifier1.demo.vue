<demo>
常规使用
</demo>
<template>
  <div class="wrapper">
    <Magnifier
      :link="link"
      :blank="blank"
      :imgUrl="imgUrl"
      :imgAlt="imgAlt"
      :imgWidth="imgWidth"
      :imgHeight="imgHeight"
      :magWidth="magWidth"
      :magHeight="magHeight"
    />
  </div>
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue'
import {Magnifier} from "../../lib/index"
export default {
  components: {
    Magnifier
  },
  setup(){
    const state = reactive({
      imgUrl:'https://tse1-mm.cn.bing.net/th/id/R-C.2684ac55cbba187212d8e14d416a619e?rik=jsa%2bCD2whbiS%2fQ&riu=http%3a%2f%2fpic45.nipic.com%2f20140731%2f2531170_210637763000_2.jpg&ehk=jjxp4SQCOdkQwoWD%2bCJC8HjV%2fVZ017nIcfswZiAoBw8%3d&risl=&pid=ImgRaw',
      imgAlt: '狮子',
      blank:true,
      link:'https://cn.bing.com/images/search?view=detailV2&ccid=JoSsVcu6&id=1F103CF8F034FA516236FD92B885B03D08BEC68E&thid=OIP.JoSsVcu6GHIS2OFNQWphngHaFy&mediaurl=https%3a%2f%2ftse1-mm.cn.bing.net%2fth%2fid%2fR-C.2684ac55cbba187212d8e14d416a619e%3frik%3djsa%252bCD2whbiS%252fQ%26riu%3dhttp%253a%252f%252fpic45.nipic.com%252f20140731%252f2531170_210637763000_2.jpg%26ehk%3djjxp4SQCOdkQwoWD%252bCJC8HjV%252fVZ017nIcfswZiAoBw8%253d%26risl%3d%26pid%3dImgRaw&exph=800&expw=1024&q=%e7%8b%ae%e5%ad%90&simid=608022452751052195&FORM=IRPRST&ck=351382C3F622115D6A34EC4EBEEB5818&selectedIndex=5&ajaxhist=0&ajaxserp=0',
      imgWidth:500,
      imgHeight:391,
      magWidth:100,
      magHeight:100
    });

    return {
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss" scoped>
  .wrapper{
    width: 500px;//391

  }
</style>