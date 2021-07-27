<template>
  <div class="no-data-tip">
    <span>- 没有相关数据 -</span>
  </div>
</template>

<script>
export default {
  name:'NoDataTip'
}
</script>

<style lang="scss" scoped>
  .no-data-tip{
    height: 48px;
    line-height: 48px;
    font-size: 16px;
    color: #666;
    text-align: center;
  }
</style>