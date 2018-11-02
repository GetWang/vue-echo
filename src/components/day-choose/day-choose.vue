<template>
  <!-- 首页的每日精选组件 -->
  <div class="day-choose">
    <div class="choose-header">
      <h2 class="title">每日精选</h2>
      <div class="play-all">
        <i class="play-icon"></i>
        <span class="text">播放全部</span>
      </div>
    </div>
    <ul class="choose-list">
      <li class="choose-item">
        <a href="" class="sound-link">
          <img src="" alt="" class="cover">
          <div class="sound-info">
            <h3 class="sound-name">「可爱女声」小幸运</h3>
            <p class="user-name">高手在民间</p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'DayChoose'
  }
</script>

<style lang="less" scoped rel="stylesheet/less">
  @import "~common/less/variable";

  .day-choose {
    .choose-header {
      position: relative;
      margin-bottom: 22px;
      .title {
        height: 22px;
        font-size: @font-size-medium-x;
        font-weight: normal;
        line-height: 22px;
        color: @color-text;
      }
      .play-all {
        position: absolute;
        top: 0;
        right: 0;
        width: 85px;
        height: 22px;
        padding-left: 26px;
        border-radius: 14px;
        box-sizing: border-box;
        line-height: 22px;
        background-color: @color-theme;
        cursor: pointer;
        .play-icon {
          position: absolute;
          top: 1px;
          left: 2px;
          width: 19px;
          height: 19px;
          background: url("./play.png") no-repeat 0 0;
          background-size: 100% 100%;
        }
        .text {
          font-size: @font-size-small-s;
          color: #fff;
        }
      }
    }
    .choose-list{
      .choose-item {
        .sound-link {
          display: block;
          overflow: hidden;
          text-decoration: none;
          .cover {
            float: left;
            width: 68px;
            height: 68px;
            margin-right: 10px;
            background: red;
          }
          .sound-info {
            float: left;
            width: 140px;
            height: 68px;
            .sound-name {
              height: 48px;
              margin-bottom: 5px;
              overflow: hidden;
              font-size: @font-size-small-s;
              font-weight: normal;
              line-height: 16px;
              color: @color-text-d;
            }
            .user-name {
              height: 14px;
              overflow: hidden;
              font-size: @font-size-small-s;
              line-height: 14px;
              text-overflow: ellipsis;
              white-space: nowrap;
              color: @color-text-ll;
            }
          }
        }
      }
    }
  }
</style>