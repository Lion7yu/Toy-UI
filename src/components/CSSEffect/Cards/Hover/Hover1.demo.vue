<demo>
Hover
</demo>
<template>
  <ul>
    <li>
      <div class="imageBox">
        <figure>
          <img src="/images/cardImages/Friedman.jpg" />
          <figcaption>
            <h1>Milton Friedmann</h1>
            <p>1912.7 - 2006.11</p>
            <a
              href="https://baike.baidu.com/item/%E7%B1%B3%E5%B0%94%E9%A1%BF%C2%B7%E5%BC%97%E9%87%8C%E5%BE%B7%E6%9B%BC/8665021?fr=aladdin"
            >Read More</a>
          </figcaption>
        </figure>
      </div>
    </li>
    <li>
      <div class="imageBox">
        <figure>
          <img src="/images/cardImages/Smee.jpg" />
          <figcaption>
            <h1>Adam Smith</h1>
            <p>1723.6 - 1790.7</p>
            <a
              href="https://baike.baidu.com/item/%E4%BA%9A%E5%BD%93%C2%B7%E6%96%AF%E5%AF%86/972521?fromtitle=%E4%BA%9A%E5%BD%93%E6%96%AF%E5%AF%86&fromid=682205&fr=aladdin"
            >Read More</a>
          </figcaption>
        </figure>
      </div>
    </li>
    <li>
      <div class="imageBox">
        <figure>
          <img src="/images/cardImages/Nash.png" />
          <figcaption>
            <h1>John Nash</h1>
            <p>1928.6 - 2015.5</p>
            <a
              href="https://baike.baidu.com/item/%E7%BA%A6%E7%BF%B0%C2%B7%E7%BA%B3%E4%BB%80/957881?fromtitle=%E7%BA%A6%E7%BF%B0%E7%BA%B3%E4%BB%80&fromid=495371&fr=aladdin"
            >Read More</a>
          </figcaption>
        </figure>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
export default {
  setup() {

  },
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

ul {
  padding: 0;
  display: flex;
  > li {
    list-style: none;
    width: 33%;
    .imageBox {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      padding: 0 10px;
      > figure {
        position: relative;
        margin: 0;
        padding: 0;
        overflow: hidden;
        &::before,
        &::after {
          content: "";
          position: absolute;
          top: 0;
          height: 100%;
          width: 50%;
          background: #262626;
          transition: 0.5s;
        }
        &::before {
          left: -50%;
        }
        &::after {
          right: -50%;
        }
        > img {
          width: 100%;
          height: 25vh;
          object-fit: cover;
        }
        > figcaption {
          position: absolute;
          top: 20px;
          left: 20px;
          bottom: 20px;
          right: 20px;
          background: #fff;
          text-align: center;
          padding: 20px;
          opacity: 0;
          transition: all 0.5s;
          transition-delay: 0.3s;
          transform: translateY(-20px);
          z-index: 1;
          > h1 {
            margin: 0;
            padding: 0;
            font-size: 22px;
          }
          > p {
            margin: 10px 0 0;
            padding: 0;
            font-size: 16px;
          }
          > a {
            display: inline-block;
            padding: 10px 20px;
            background: #ff1922;
            color: #fff;
            margin-top: 10px;
            text-decoration: none;
          }
        }
      }
      &:hover {
        > figure {
          &::before {
            left: 0;
          }
        }
      }
      &:hover {
        > figure {
          &::after {
            right: 0;
          }
        }
      }
      &:hover {
        > figure {
          > figcaption {
            opacity: 1;
            transform: translateY(0px);
          }
        }
      }
    }
  }
}
</style>