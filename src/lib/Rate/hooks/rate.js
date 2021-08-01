import { ref } from 'vue'

export function rate(num,callback){

  const rateNum = ref(num)

  const setRateNum = (num) => {
    rateNum.value = num
    callback()
  }

  return[
    rateNum,
    setRateNum
  ]
}