<template>
  <div id="app">
    <nav-header></nav-header>
    <router-view/>
    <echo-player></echo-player>
  </div>
</template>

<script type="text/ecmascript-6">
  import NavHeader from 'components/nav-header/nav-header'
  import EchoPlayer from 'components/echo-player/echo-player'

  export default {
    name: 'App',
    components: {
      NavHeader,
      EchoPlayer
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "~common/less/variable";

  #app {
    padding-bottom: 70px;
    font-size: @font-size-small;
    color: @color-text;
  }
</style>
