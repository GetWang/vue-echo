<template>
  <!-- 回音播放器组件 -->
  <div class="echo-player">
    <div class="panel-left">
      <div class="btn-wrapper">
        <i class="echo-icon icon-previous"></i>
        <i class="echo-icon icon-play"></i>
        <i class="echo-icon icon-next"></i>
      </div>
    </div>
    <div class="panel-center">center</div>
    <div class="panel-right">right</div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'EchoPlayer'
  }
</script>

<style lang="less" scoped rel="stylesheet/less">
  .echo-player {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 73px;
    background: pink;
    .panel-left {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 220px;
      padding: 0 30px;
      box-sizing: border-box;
      background: lightblue;
      .btn-wrapper {
        position: relative;
        height: 100%;
        padding: 10px 0;
        box-sizing: border-box;
        font-size: 0;
        background: lightgreen;
        .echo-icon {
          width: 40px;
          height: 40px;
          border: 1px solid #e6e6e6;
          border-radius: 50%;
          box-sizing: border-box;
          font-size: 40px;
          line-height: 40px;
          text-align: center;
          color: #5e5e5e;
          cursor: pointer;
          &.icon-previous, &.icon-next {
            position: absolute;
            top: 50%;
            margin-top: -20px;
          }
          &.icon-previous {
            left: 0;
          }
          &.icon-next {
            right: 0;
          }
          &.icon-play {
            display: block;
            width: 50px;
            height: 50px;
            margin: 0 auto;
            line-height: 50px;
          }
        }
      }
    }
    .panel-center {
      margin: 0 390px 0 220px;
    }
    .panel-right {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 390px;
    }
  }
</style>