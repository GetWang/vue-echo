<template>
  <!-- 首页的今日推荐组件 -->
  <div class="today-recommend">
    <div class="recom-header">
      <h2 class="title">今日推荐</h2>
      <div class="play-btn">
        <i class="play-icon"></i>
        <span class="text">一键播放</span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'TodayRecommend'
  }
</script>

<style lang="less" scoped rel="stylesheet/less">
  @import "~common/less/variable";

  .today-recommend {
    width: 712px;
    margin: 50px auto 0;
    .recom-header {
      margin-bottom: 25px;
      padding: 0 9px;
      overflow: hidden;
      .title {
        float: left;
        height: 28px;
        margin-right: 24px;
        font-size: @font-size-large-x;
        font-weight: normal;
        line-height: 28px;
        color: @color-text;
      }
      .play-btn {
        position: relative;
        float: left;
        width: 96px;
        height: 28px;
        padding-left: 30px;
        border-radius: 14px;
        box-sizing: border-box;
        line-height: 28px;
        background-color: @color-theme;
        cursor: pointer;
        .play-icon {
          position: absolute;
          top: 4px;
          left: 4px;
          width: 19px;
          height: 19px;
          background: url("~common/image/play.png") no-repeat 0 0;
          background-size: 100% 100%;
        }
        .text {
          font-size: @font-size-small;
          color: #fff;
        }
      }
    }
  }
</style>