<template>
  <header class="nav-header">
    <nav class="navs">
      <router-link tag="div" to="/home" class="link">首页</router-link>
      <router-link tag="div" to="/channel" class="link">频道</router-link>
      <router-link tag="div" to="/famous" class="link">名人</router-link>
      <router-link tag="div" to="/store" class="link">商城</router-link>
    </nav>
    <img src="./logo.png" class="logo" alt="logo" @click="$router.push('/home')">
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
    background-color: #fff;
    color: red;
    .navs {
      float: left;
      font-size: 0;
      .link {
        display: inline-block;
        height: 80px;
        padding: 0 15px;
        box-sizing: border-box;
        text-align: center;
        color: @color-text;
        font-size: @font-size-small;
        line-height: 80px;
        cursor: pointer;
        &:hover {
          color: @color-theme;
        }
        &.router-link-active {
          border-bottom: 2px solid @color-theme;
          color: @color-theme;
        }
      }
    }
    .logo {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 74px;
      height: 28px;
      margin: -14px 0 0 -37px;
      cursor: pointer;
    }
  }
</style>