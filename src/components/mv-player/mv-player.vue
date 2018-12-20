<template>
  <div class="mv-player">
    <div class="cover-bg" :class="{hidden: isHidden}">
      <img :src="cover" alt="" class="cover">
      <div class="play-btn icon-play" title="Play Video"
           @click="togglePlaying"></div>
    </div>
    <video :src="mvSource" ref="mVideo" @click="togglePlaying"></video>
    <div class="mv-control-bar">
      <i class="playing-state echo-icon" :class="[playingCls]" @click="togglePlaying"></i>
      <div class="volume-process">
        <div class="mv-volume">
          <i class="icon-volume"></i>
          <div class="volume-wrapper">
            <progress-bar></progress-bar>
          </div>
        </div>
        <div class="mv-process">
          <div class="mv-process-bar"></div>
          <span class="remaining-time"></span>
        </div>
      </div>
      <i class="icon-fullscreen"></i>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import ProgressBar from 'base/progress-bar/progress-bar'

  export default {
    name: 'MvPlayer',
    props: {
      // 视频源
      mvSource: {
        type: String,
        default: ''
      },
      // 封面
      cover: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        // 封面隐藏标志位
        isHidden: false,
        // 视频播放状态
        playingState: false,
        // 播放/暂停按钮类名
        playingCls: 'icon-play'
      }
    },
    methods: {
      /* 切换 mv 播放状态 */
      togglePlaying () {
        this.isHidden = true
        if (this.playingState) {
          this.playingCls = 'icon-play'
          this.$refs.mVideo.pause()
        } else {
          this.playingCls = 'icon-pause'
          this.$refs.mVideo.play()
        }
        this.playingState = !this.playingState
        console.log('now', this.playingState)
        this.$refs.mVideo.volume -= 0.02
        console.log('volume', this.$refs.mVideo.volume)
      }
    },
    components: {
      ProgressBar
    }
  }
</script>

<style lang="less" scoped rel="stylesheet/less">
  @import "~common/less/variable";

  // 图标颜色
  @icon-color: #92d648;

  .mv-player {
    position: relative;
    height: 100%;
    .cover-bg {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 100%;
      z-index: 5;
      background: #000;
      &.hidden {
        display: none;
      }
      .cover {
        display: block;
        width: 100%;
        height: 100%;
      }
      .play-btn {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 90px;
        height: 90px;
        margin: -45px 0 0 -45px;
        border: 4px solid #fff;
        border-radius: 50%;
        box-sizing: border-box;
        font-size: 65px;
        line-height: 82px;
        text-align: center;
        color: #fff;
        background: rgba(43, 51, 63, .7);
        transition: all .2s ease;
        cursor: pointer;
        &:hover {
          background: rgba(43, 51, 63, .4);
        }
      }
    }
    video {
      width: 100%;
      height: 100%;
    }
    .mv-control-bar {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 34px;
      background: rgba(255, 255, 255, .7);
      opacity: 1;
      transition: all .5s;
      .playing-state {
        float: left;
        width: 44px;
        height: 100%;
        text-align: center;
        line-height: 34px;
        background: pink;
      }
      .volume-process {
        float: left;
        width: 912px;
        height: 34px;
        .mv-volume {
          float: left;
          height: 100%;
          .icon-volume {
            float: left;
            width: 44px;
            height: 100%;
            text-align: center;
            line-height: 34px;
            background: red;
          }
          .volume-wrapper {
            float: left;
            width: 0;
            padding: 14px 0;
            opacity: 0;
            transition: all .3s;
          }
          &:hover {
            .volume-wrapper {
              width: 55px;
              margin-right: 30px;
              opacity: 1;
            }
          }
        }
        .mv-process {
          height: 100%;
          overflow: hidden;
          background: green;
        }
      }
      .icon-fullscreen {
        float: left;
        width: 42px;
        height: 100%;
        text-align: center;
        line-height: 34px;
        background: pink;
      }
      .echo-icon {
        color: @icon-color;
      }
    }
    &:hover {
      .mv-control-bar {
        opacity: 1;
      }
    }
  }
</style>