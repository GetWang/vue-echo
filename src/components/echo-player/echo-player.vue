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
    <div class="panel-center">
      <a href="" class="sound-link">
        <img src="" alt="" class="cover">
      </a>
      <div class="sound-detail">
        <p class="sound-name">女声翻唱「李白」</p>
        <div class="progress-controler">
          <span class="curr-time time">0:23</span>
          <div class="sound-progress-wrapper">
            <progress-bar></progress-bar>
          </div>
          <span class="duration time">4:12</span>
        </div>
      </div>
    </div>
    <div class="panel-right">
      <div class="sound-controler">
        <i class="controler icon-loop"></i>
        <i class="controler icon-favourite"></i>
        <i class="controler icon-delete"></i>
      </div>
      <div class="volume-controler">
        <i class="volume icon-volume"></i>
        <div class="sound-volume-wrapper">
          <progress-bar></progress-bar>
        </div>
      </div>
      <i class="icon-playlist"></i>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import ProgressBar from 'base/progress-bar/progress-bar'

  export default {
    name: 'EchoPlayer',
    components: {
      ProgressBar
    }
  }
</script>

<style lang="less" scoped rel="stylesheet/less">
  @import "~common/less/variable";

  .echo-player {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 73px;
    background: #fff;
    .panel-left {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 220px;
      padding: 0 30px;
      box-sizing: border-box;
      .btn-wrapper {
        position: relative;
        height: 100%;
        padding: 10px 0;
        box-sizing: border-box;
        font-size: 0;
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
          &:hover {
            color: @color-text-dd;
          }
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
      height: 100%;
      margin: 0 390px 0 220px;
      padding: 9px 15px;
      box-sizing: border-box;
      .sound-link {
        float: left;
        width: 54px;
        height: 54px;
        margin-right: 18px;
        padding: 3px;
        box-sizing: border-box;
        box-shadow: 0 0 2px rgba(0, 0, 0, .2);
        .cover {
          display: block;
          width: 100%;
          height: 100%;
          background: pink;
        }
      }
      .sound-detail {
        height: 100%;
        overflow: hidden;
        .sound-name {
          margin: 6px 0 15px;
          overflow: hidden;
          font-size: @font-size-small;
          line-height: 20px;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: @color-text-d;
        }
        .progress-controler {
          position: relative;
          .sound-progress-wrapper {
            margin: 0 32px 0 40px;
          }
          .time {
            position: absolute;
            top: -3px;
            width: 32px;
            overflow: hidden;
            font-size: @font-size-small-s;
            color: @color-text-ll;
            &.curr-time {
              left: 0
            }
            &.duration {
              right: 0;
              text-align: right;
            }
          }
        }
      }
    }
    .panel-right {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 390px;
      padding: 26px 0;
      box-sizing: border-box;
      .sound-controler {
        float: left;
        margin-right: 20px;
        font-size: 0;
        .controler {
          display: inline-block;
          width: 20px;
          height: 20px;
          margin-right: 20px;
          font-size: 20px;
          color: @color-text;
          background: pink;
          cursor: pointer;
        }
      }
      .volume-controler {
        position: relative;
        float: left;
        width: 140px;
        .volume {
          display: block;
          width: 20px;
          height: 20px;
          text-align: center;
          font-size: @font-size-medium;
          line-height: 20px;
          color: @color-text;
          background: lightblue;
          cursor: pointer;
        }
        .sound-volume-wrapper {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          width: 105px;
          height: 4.3px;
          margin: auto 0;
        }
      }
      .icon-playlist {
        position: absolute;
        top: 0;
        right: 22px;
        bottom: 0;
        width: 50px;
        height: 50px;
        margin: auto 0;
        padding-left: 20px;
        border-left: 1px solid #e1e0e4;
        font-size: 49px;
        text-align: center;
        color: @color-text;
        background: pink;
        cursor: pointer;
      }
    }
  }
</style>