<demo>
基础用法
</demo>
<template>
  <div class="container">
    <div class="iconWrapper">
      <svg class="icon">
        <use xlink:href="#i-dianzan" />
      </svg>
      <div class="shine">
        <span style="--i:1"></span>
        <span style="--i:2"></span>
        <span style="--i:3"></span>
        <span style="--i:4"></span>
        <span style="--i:5"></span>
        <span style="--i:6"></span>
        <span style="--i:7"></span>
        <span style="--i:8"></span>
        <span style="--i:9"></span>
        <span style="--i:10"></span>
        <span style="--i:11"></span>
        <span style="--i:12"></span>
        <span style="--i:13"></span>
        <span style="--i:14"></span>
        <span style="--i:15"></span>
        <span style="--i:16"></span>
      </div>
    </div>
    <div class="iconWrapper">
      <svg class="icon">
        <use xlink:href="#i-shoucang" />
      </svg>
      <div class="shine">
        <span style="--i:1"></span>
        <span style="--i:2"></span>
        <span style="--i:3"></span>
        <span style="--i:4"></span>
        <span style="--i:5"></span>
        <span style="--i:6"></span>
        <span style="--i:7"></span>
        <span style="--i:8"></span>
        <span style="--i:9"></span>
        <span style="--i:10"></span>
        <span style="--i:11"></span>
        <span style="--i:12"></span>
        <span style="--i:13"></span>
        <span style="--i:14"></span>
        <span style="--i:15"></span>
        <span style="--i:16"></span>
      </div>
    </div>
    <div class="iconWrapper">
      <svg class="icon">
        <use xlink:href="#i-toubi" />
      </svg>
      <div class="shine">
        <span style="--i:1"></span>
        <span style="--i:2"></span>
        <span style="--i:3"></span>
        <span style="--i:4"></span>
        <span style="--i:5"></span>
        <span style="--i:6"></span>
        <span style="--i:7"></span>
        <span style="--i:8"></span>
        <span style="--i:9"></span>
        <span style="--i:10"></span>
        <span style="--i:11"></span>
        <span style="--i:12"></span>
        <span style="--i:13"></span>
        <span style="--i:14"></span>
        <span style="--i:15"></span>
        <span style="--i:16"></span>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue"
export default {
  setup() {
    let timer_start = null
    let timer_end = null

    let is_long = true
    let mouseDownStartTime = 0
    let mouseUpEndTime = 0

    onMounted(() => {
      const iconWrapper = document.querySelectorAll('.iconWrapper')
      iconWrapper.forEach((icon, index) => {
        icon.addEventListener('click', () => {
          if (index === 0) {
            if (!is_long) {
              icon.classList.toggle('light')
            }
          } else {
            icon.classList.toggle('light')
          }
        })
      })

      iconWrapper[0].addEventListener('mousedown', () => {
        mouseDownStartTime = new Date().getTime()
        timer_start = setTimeout(() => {
          iconWrapper.forEach((icon, index) => {
            if (index === 0) {
              icon.classList.add('shake')
            } else {
              icon.classList.add('loading')
            }
          })
        }, 500)

        timer_end = setTimeout(() => {
          iconWrapper.forEach((icon, index) => {
            icon.classList.remove('shake')
            icon.classList.remove('loading')
            icon.classList.add('bang')
            icon.classList.add("light")
          })

          setTimeout(() => {
            iconWrapper.forEach((icon, index) => {
              icon.classList.remove('bang')
              icon.classList.add("light")
            })
          }, 1000)
        }, 3500)
      })

      iconWrapper[0].addEventListener('mouseup', () => {
        mouseDownStartTime = new Date().getTime()
        const gap = mouseUpEndTime - mouseDownStartTime
        if (gap > 300) {
          is_long = true
        } else {
          is_long = false
        }

        if (timer_start) {
          clearTimeout(timer_start)
        }

        if (3500 > gap) {
          iconWrapper.forEach((icon, index) => {
            icon.classList.remove('shake')
            icon.classList.remove('loading')
          })

          if (timer_end) {
            clearTimeout(timer_end)
            timer_end = null
          }
        }
      });
    })

  }

}

</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
}

/* 分别是点赞、投币、收藏 */
.container {
  width: 400px;
  height: 200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
}
.iconWrapper {
  position: relative;
  width: 70px;
  height: 70px;
  color: rgb(117, 117, 117);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  > svg {
    font-size: 50px;
  }
  &.light {
    color: rgb(0, 161, 214);
  }
  &.shake {
    animation: shake 0.3s linear infinite;
  }
  @keyframes shake {
    0% {
      transform: translate(-5%, -5%);
    }

    25% {
      transform: translate(5%, 5%);
    }

    50% {
      transform: translate(-5%, 5%);
    }

    75% {
      transform: translate(5%, -5%);
    }

    100% {
      transform: translate(0%, 0%);
    }
  }
  &.loading {
    ::after {
      position: absolute;
      content: "";
      box-sizing: border-box;
      left: 0;
      top: 0;
      width: 70px;
      height: 70px;
      /* background-color: #0984e311; */
      /* 增加圆角 */
      border-radius: 50%;
      border: 2px solid rgb(0, 161, 214);
      transform: rotate(45deg);
      /* 这里我们实用贝塞尔曲线函数让动画加载更流畅 */
      /* 只需要执行1次为了让最后现实的跳转更清晰，时间用2.9s */
      animation: loading 2.9s cubic-bezier(0.25, 0.45, 0.75, 0.55) 1;
    }
    @keyframes loading {
      0% {
        clip-path: polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 50% 50%);
      }

      25% {
        clip-path: polygon(0% 0%, 100% 0%, 100% 0%, 100% 0%, 100% 0%, 50% 50%);
      }

      50% {
        clip-path: polygon(
          0% 0%,
          100% 0%,
          100% 100%,
          100% 100%,
          100% 100%,
          50% 50%
        );
      }

      75% {
        clip-path: polygon(
          0% 0%,
          100% 0%,
          100% 100%,
          0% 100%,
          0% 100%,
          50% 50%
        );
      }

      90% {
        /* 从90%开始逐渐隐藏 */
        opacity: 1;
      }

      100% {
        clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%, 50% 50%);
        opacity: 0;
      }
    }
  }
  &.bang {
    animation: grow 0.3s linear 1;

    .shine {
      position: absolute;
      top: 0;
      top: 0;
      width: 70px;
      height: 70px;
      z-index: 20;

      /* 居中 */
      display: flex;
      justify-content: center;
      align-items: center;
      &::after {
        position: absolute;
        content: "";
        box-sizing: border-box;
        /* 用这种方式居中，方便放大 */
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        animation: ray_border 0.4s linear 1 both;
      }
      @keyframes ray_border {
        0% {
          width: 20px;
          height: 20px;
          border: 2px solid rgb(0, 161, 214);
          opacity: 0.1;
        }

        60% {
          width: 100px;
          height: 100px;
          border: 20px solid rgb(0, 161, 214);
          opacity: 0.1;
        }

        100% {
          width: 120px;
          height: 120px;
          border: 2px solid var(--color3);
          opacity: 0;
        }
      }
      > span {
        position: absolute;
        display: block;
        width: 5px;
        /* 高度在动画中定义 */
        /* height          : 100px; */
        /* 增加个圆角 */
        border-radius: 50%;
        background-color: rgb(0, 161, 214);
        transform: rotate(calc(var(--i) * 22.5deg)) translateY(0px);
        &:nth-child(even) {
          height: 15px;
          animation: ray_even 0.6s ease 1 both;
        }
        @keyframes ray_even {
          0% {
            transform: rotate(calc(var(--i) * 22.5deg)) translateY(0px);
          }

          60% {
            opacity: 0.8;
            height: 15px;
          }

          100% {
            transform: rotate(calc(var(--i) * 22.5deg)) translateY(60px);
            height: 5px;
            opacity: 0;
          }
        }
        &:nth-child(odd) {
          height: 8px;
          animation: ray_odd 0.6s ease 1 both;
        }
        @keyframes ray_odd {
          0% {
            transform: rotate(calc(var(--i) * 22.5deg)) translateY(0px);
          }

          60% {
            opacity: 0.8;
            height: 8px;
          }

          100% {
            transform: rotate(calc(var(--i) * 22.5deg)) translateY(65px);
            height: 8px;
            opacity: 0;
          }
        }
      }
    }
  }
  @keyframes grow {
    0% {
      transform: scale(0.8);
    }
    100% {
      transform: scale(1.2);
    }
  }
}

.iconWrapper:hover {
  color: rgb(0, 161, 214);
}
</style>