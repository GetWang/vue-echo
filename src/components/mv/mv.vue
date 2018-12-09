<template>
  <!-- mv 视频详情页面 -->
  <main class="mv-detail">
    <!-- sound、mv 组件 -->
    <sound-mv>
      <div class="mv" slot="soundWrapper">
        <video src=""></video>
      </div>
    </sound-mv>
  </main>
</template>

<script type="text/ecmascript-6">
  import SoundMv from 'components/sound-mv/sound-mv'

  export default {
    name: 'MV',
    components: {
      SoundMv
    }
  }
</script>

<style lang="less" scoped rel="stylesheet/less">
  @import "~common/less/variable";

  .mv-detail {
    padding: 15px 0 60px;
    background: @color-background;
  }
</style>
