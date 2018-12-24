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
          <i class="volume echo-icon"
             :class="{'icon-muted': isMuted, 'icon-volume': !isMuted}"
             @click="toggleMuted"></i>
          <div class="volume-wrapper">
            <progress-bar :barBgColor="barBgColor"
                          :progressColor="progressColor"
                          :percent="volumePercent"
                          @percentChange="changeVolume"></progress-bar>
          </div>
        </div>
        <div class="mv-process">
          <div class="mv-process-bar">
            <progress-bar :barBgColor="barBgColor"
                          :progressColor="progressColor"
                          :barHeight="3"></progress-bar>
          </div>
          <span class="remaining-time">-4:40</span>
        </div>
      </div>
      <i class="icon-fullscreen echo-icon"></i>
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
        playingCls: 'icon-play',
        // 音量
        volume: 1,
        // 音量百分比（0 ~ 1）
        volumePercent: 1
      }
    },
    created () {
      // 初始化“上一个音量值”
      this.prevVolume = this.volume
      // 进度条背景色
      this.barBgColor = 'rgb(217, 233, 199)'
      // 进度颜色
      this.progressColor = '#92d648'
    },
    watch: {
      /* 当音量变化时，更新 prevVolume 变量 */
      volume (newVolume, oldVolume) {
        this.prevVolume = oldVolume
      }
    },
    computed: {
      /* 是否静音 */
      isMuted () {
        return this.volume === 0
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
        console.log('volume', this.$refs.mVideo.volume)
      },
      /* 切换静音状态 */
      toggleMuted () {
        let volume = 0
        if (this.isMuted) {
          volume = this.prevVolume
        }
        this.changeVolume(volume)
        this.volumePercent = volume
      },
      /* 更改视频音量 */
      changeVolume (percent) {
        this.$refs.mVideo.volume = percent
        this.volume = percent
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
        // background: pink;
      }
      .volume-process {
        float: left;
        width: 912px;
        height: 34px;
        .mv-volume {
          float: left;
          height: 100%;
          .volume {
            float: left;
            width: 44px;
            background: pink;
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
          position: relative;
          height: 100%;
          padding-right: 46px;
          overflow: hidden;
          // background: green;
          .mv-process-bar {
            padding: 14px 0 14px 8px;
          }
          .remaining-time {
            position: absolute;
            top: 0;
            right: 0;
            width: 44px;
            height: 34px;
            font-size: @font-size-small-s;
            line-height: 34px;
            text-align: center;
            color: #8c8c8c;
          }
        }
      }
      .icon-fullscreen {
        float: left;
        width: 42px;
        background: pink;
      }
      .echo-icon {
        height: 100%;
        text-align: center;
        font-size: 28px;
        line-height: 34px;
        color: @icon-color;
        cursor: pointer;
      }
    }
    &:hover {
      .mv-control-bar {
        opacity: 1;
      }
    }
  }
</style>