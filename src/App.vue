<template>
  <div id="app">
    <nav-header></nav-header>
    <router-view/>
  </div>
</template>

<script type="text/ecmascript-6">
  import NavHeader from 'components/nav-header/nav-header'

  export default {
    name: 'App',
    components: {
      NavHeader
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "~common/less/variable";

  #app {
    background-color: @color-background;
  }
</style>
