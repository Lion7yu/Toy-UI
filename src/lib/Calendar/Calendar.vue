<template>
  <div class="calendar-wrapper">
    <div class="title-wrapper">
      <span class="prev-year-btn btn" @click="prevYear">&lt;&lt;</span>
      <span class="prev-mounth-btn btn" @click="prevMonth">&lt;</span>
      <span class="time-wrapper">{{ state.timeStr }}</span>
      <span class="next-mouth-btn btn" @click="nextMonth">&gt;</span>
      <span class="next-year-btn btn" @click="nextYear">&gt;&gt;</span>
    </div>

    <ul class="weekly-wrapper">
      <li v-for="item in week">{{ item }}</li>
    </ul>

    <ul class="day-wrapper" v-for="item in state.dayArr">
      <li
        :class="{ gray: !val.cursor, isSelect: val.isSelect }"
        v-for="val in item"
        @click="getDate(val)"
      >{{ val.text }}</li>
    </ul>

    <button @click="fn">按钮</button>
  </div>
</template>

<script setup>
import { onMounted, reactive, watch } from "vue"

let props = defineProps({
  modelValue: String
})

const week = ["日", "一", "二", "三", "四", "五", "六"]
let state = reactive({
  dayArr: [],
  timeStr: "",
  compTime: props.modelValue
})

let emit = defineEmits(["change", "update:modelValue"])

// value '2021-8-20'
function getRanderData(value) {
  let dayArr = []
  function getDayNum(str) {
    let arr = str.split('-')
    let year = arr[0], month = arr[1]
    return [new Date(year, month, 0).getDate(), new Date(year, month - 1, 1).getDay()]
  }
  let [nums, first] = getDayNum(value)
  let n = 1
  let nextMonthDay = 1
  function getLastMonthDays(str) {
    let arr = str.split('-')
    let year = arr[0], month = arr[1]
    let date = new Date(year, month - 1)
    return new Date(date.getFullYear(), date.getMonth(), 0).getDate()
  }
  let prevMonthDay = getLastMonthDays(value)
  console.log(prevMonthDay)
  for (let i = 0; i < 6; i++) {
    let tmp = []
    for (let j = 0; j < 7; j++) {
      if (i === 0) {
        if (j < first) {
          tmp.unshift({
            isSelect: false,
            cursor: false,
            text: prevMonthDay--
          })
        } else {
          let obj = {
            isSelect: false,
            cursor: true,
            text: n++
          }
          if (obj.text === value.split('-')[2]) {
            obj.isSelect = true
          }
          tmp.push(obj)
        }
      } else {
        let t = n++
        if (t > nums) {
          tmp.push({
            isSelect: false,
            cursor: false,
            text: nextMonthDay++
          })
        } else {
          let obj = {
            isSelect: false,
            cursor: true,
            text: t
          }
          if (obj.text === value.split('-')[2]) {
            obj.isSelect = true
          }
          tmp.push(obj)
        }
      }
    }
    dayArr.push(tmp)
  }
  console.log(dayArr)
  return dayArr
}

function renderTitle(str) {
  let arr = str.split('-')
  state.timeStr = arr[0] + " 年 " + arr[1] + ' 月 ' + arr[2] + ' 日 '
  state.dayArr = getRanderData(str)
}

state.dayArr = getRanderData(props.modelValue)
renderTitle(props.modelValue)

watch(() => props.modelValue, (str) => {
  state.compTime = str
  renderTitle(str)
})

watch(() => state.compTime, (str) => {
  renderTitle(str)
})

const prevYear = () => {
  let arr = state.compTime.split('-')
  arr[0]--
  arr[2] = 1
  state.compTime = arr.join('-')
  state.dayArr = getRanderData(state.compTime)
}
const nextYear = () => {
  let arr = state.compTime.split('-')
  arr[0]++
  arr[2] = 1
  state.compTime = arr.join('-')
  state.dayArr = getRanderData(state.compTime)
}
const prevMonth = () => {
  let arr = state.compTime.split('-')
  let month = arr[1] / 1
  if (month - 1 <= 0) {
    arr[1] = 12
    arr[0]--
  } else {
    arr[1]--
  }
  arr[2] = 1
  state.compTime = arr.join('-')
  state.dayArr = getRanderData(state.compTime)
}
const nextMonth = () => {
  let arr = state.compTime.split('-')
  let month = arr[1] / 1
  if (month + 1 > 12) {
    arr[1] = 1
    arr[0]++
  } else {
    arr[1]++
  }
  arr[2] = 1
  state.compTime = arr.join('-')
  state.dayArr = getRanderData(state.compTime)
}

const getDate = (val) => {
  if (val.cursor) {
    let arr = state.compTime.split('-')
    arr[2] = val.text
    emit("update:modelValue", arr.join('-'))
  }
}

onMounted(() => {
  setTimeout(() => {
    emit('update:modelValue', "2021-09-01")
  }, 2000)
})
</script>

<style lang="scss" scoped>
.calendar-wrapper {
  width: 400px;
  position: relative;
  margin: auto;
  .title-wrapper {
    height: 50px;
    display: flex;
    width: 300px;
    margin: auto;
    .btn {
      width: 30px;
      font-size: 20px;
      font-weight: 600;
      cursor: pointer;
    }

    .time-wrapper {
      flex: auto;
    }
  }

  .weekly-wrapper,
  .day-wrapper {
    padding: 5px 10px;
    box-sizing: border-box;
    display: flex;
    li {
      flex: 1;
      cursor: pointer;
    }
  }

  .weekly-wrapper {
    border: 1px solid #ccc;
    border-left: none;
    border-right: none;
  }
  .day-wrapper {
    li {
      padding: 10px 0;
    }
    li.gray {
      color: #ccc;
      cursor: no-drap;
    }
    li.isSelect {
      background-color: blue;
      color: #fff;
    }
  }
}
</style>