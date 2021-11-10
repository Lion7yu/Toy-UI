<template>
  <div>
    <div class="topnavAndBanner">
      <div class="banner">
        <h1>Toy-UI</h1>
        <h2>一个简单好玩的 UI 框架</h2>
        <p class="actions">
          <a href="https://github.com/Lion7yu/Lion-UI">GitHub</a>
          <router-link to="/doc">开始</router-link>
        </p>
      </div>
    </div>
    <div class="wrapper">
      <div class="column" id="column_1">
        <div class="box" id="column_1_1"></div>
        <div class="box" id="column_1_2"></div>
        <div class="box" id="column_1_3"></div>
        <div class="box" id="column_1_4"></div>
      </div>
      <div class="column" id="column_2">
        <div class="box" id="column_2_1"></div>
        <div class="box" id="column_2_2"></div>
        <div class="box" id="column_2_3"></div>
        <div class="box" id="column_2_4"></div>
      </div>
      <div class="column" id="column_3">
        <div class="box" id="column_3_1"></div>
        <div class="box" id="column_3_2"></div>
        <div class="box" id="column_3_3"></div>
        <div class="box" id="column_3_4"></div>
      </div>
      <div class="column" id="column_4">
        <div class="box" id="column_4_1"></div>
        <div class="box" id="column_4_2"></div>
        <div class="box" id="column_4_3"></div>
        <div class="box" id="column_4_4"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav/Topnav.vue";
export default {
  components: {
    Topnav
  },
};
</script>

<style lang="scss" scoped>
.topnavAndBanner {
  position: absolute;
  left: 50%;
  top: 50%;
  .banner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: translate(-50%, -50%);
    > h1 {
      font-size: 3rem;
      color: #000;
    }
    > h2 {
      color: #000;
      font-size: 2rem;
      padding: 1em 0px;
    }
    > .actions {
      padding: 4px 0;
      a {
        background: #000;
        color: white;
        display: inline-block;
        padding: 8px 24px;
        border-radius: 4px;
        margin: 0 8px;
        &:hover {
          text-decoration: none;
          text-shadow: 0 0 10px white, 0 0 20px white, 0 0 30px white,
            0 0 40px white, 0 0 50px white, 0 0 60px white, 0 0 70px white,
            0 0 80px white, 0 0 90px white, 0 0 100px white;
        }
      }
    }
  }
  z-index: 10;
}
.wrapper {
  display: flex;
  position: relative;
  .column {
    margin: 0;
    #column_1_4,
    #column_2_4,
    #column_3_4,
    #column_4_4 {
      border-bottom: none;
    }
    #column_4_1,
    #column_4_2,
    #column_4_3,
    #column_4_4 {
      border-right: none;
    }
    #column_1_1,
    #column_2_1,
    #column_3_1,
    #column_4_1 {
      height: 16vh;
    }
    #column_1_2,
    #column_2_2,
    #column_3_2,
    #column_4_2 {
      height: 40vh;
    }
    #column_1_3,
    #column_2_3,
    #column_3_3,
    #column_4_3 {
      height: 12vh;
    }
    #column_1_4,
    #column_2_4,
    #column_3_4,
    #column_4_4 {
      height: 32vh;
    }
    #column_1_4 {
      background: rgb(255, 255, 0);
    }
    #column_2_2 {
      background: rgb(255, 255, 0);
    }
    #column_4_1 {
      background: rgb(255, 0, 0);
    }
    #column_4_3 {
      background: rgb(0, 0, 255);
    }
  }
  #column_1 {
    width: 23vw;
  }
  #column_2 {
    width: 3 * 12.5vw;
  }
  #column_3 {
    width: 12.5vw;
  }
  #column_4 {
    width: 26vw;
  }
}
.box {
  border-right: 0.6vw solid black;
  border-bottom: 0.6vw solid black;
}
</style>