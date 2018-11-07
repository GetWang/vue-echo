<template>
  <!-- 名人页面 -->
  <main class="famous">
    <div class="content">
      <famous-slide></famous-slide>
    </div>
  </main>
</template>

<script type="text/ecmascript-6">
  import FamousSlide from 'components/famous-slide/famous-slide'

  export default {
    name: 'Famous',
    components: {
      FamousSlide
    }
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
      padding-top: 30px;
      overflow: hidden;
      background-color: #fff;
    }
  }
</style>