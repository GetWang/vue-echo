<template>
  <!-- 头部导航组件 -->
  <header class="nav-header">
    <nav class="navs">
      <router-link to="/home" class="link">首页</router-link>
      <router-link to="/channel" class="link">频道</router-link>
      <router-link to="/famous" class="link">名人</router-link>
    </nav>
    <a href="#/home" class="logo-link">echo<img src="./logo.png" class="logo" alt="logo"></a>
  </header>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'NavHeader'
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "~common/less/variable";

  .nav-header {
    position: relative;
    padding: 0 35px;
    overflow: hidden;
    min-width: 970px;
    background-color: #fff;
    .navs {
      float: left;
      font-size: 0;
      .link {
        display: inline-block;
        height: 80px;
        padding: 0 15px;
        box-sizing: border-box;
        text-align: center;
        text-decoration: none;
        color: @color-text;
        font-size: @font-size-small;
        line-height: 80px;
        &:hover {
          color: @color-theme;
        }
        &.router-link-active {
          border-bottom: 4px solid @color-theme;
          color: @color-theme;
        }
      }
    }
    .logo-link {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 74px;
      height: 28px;
      margin: -14px 0 0 -37px;
      font-size: 0;
      .logo {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>