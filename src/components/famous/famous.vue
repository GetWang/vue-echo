<template>
  <!-- 名人页面 -->
  <main class="famous">
    <div class="content">famous</div>
  </main>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'Famous'
  }
</script>

<style lang="less" scoped rel="stylesheet/less">
  @import "~common/less/variable";

  .famous {
    padding: 15px 0 40px;
    background-color: @color-background;
    .content {
      width: 755px;
      margin: 0 auto;
      background-color: #fff;
    }
  }
</style>