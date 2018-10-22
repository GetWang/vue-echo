<template>
  <!-- 首页组件 -->
  <main class="m-home">
    <section class="content-left">
      <sound-scene></sound-scene>
    </section>
    <section class="content-right">right</section>
  </main>
</template>

<script type="text/ecmascript-6">
  import SoundScene from 'components/sound-scene/sound-scene'

  export default {
    name: 'MHome',
    components: {
      SoundScene
    }
  }
</script>

<style lang="less" scoped rel="stylesheet/less">
  .m-home {
    width: 1000px;
    margin: 15px auto;
    overflow: hidden;
    .content-left {
      float: left;
    }
    .content-right {
      float: right;
    }
  }
</style>