<template>
  <!-- 回音播放器组件 -->
  <div class="echo-player">
    <div class="panel-left">
      <div class="btn-wrapper">
        <i class="echo-icon icon-prev" @click="prev"></i>
        <i class="echo-icon play-state"
           :class="[playStateCls]"
           @click="togglePlayState"></i>
        <i class="echo-icon icon-next" @click="next"></i>
      </div>
    </div>
    <div class="panel-center">
      <a :href="currSound.id ? ('#/sound/' + currSound.id) : ''" class="sound-link">
        <img v-show="currSound.pic_100" :src="currSound.pic_100" class="cover">
      </a>
      <div class="sound-detail">
        <p class="sound-name">{{currSound.name || 'echo 回声'}}</p>
        <div class="progress-controler">
          <span class="curr-time time">{{formatedCurrTime}}</span>
          <div class="sound-progress-wrapper">
            <progress-bar :percent="progressPercent"
                          @percentChange="changeSoundProgress"></progress-bar>
          </div>
          <span class="duration time">{{formatedDuration}}</span>
        </div>
      </div>
    </div>
    <div class="panel-right">
      <div class="sound-controler">
        <div class="mode-wrapper">
          <i class="controler mode" :class="[modeIconClsMap[playMode]]"
             @click="modeShowFlag = !modeShowFlag"></i>
          <ul class="mode-list" v-show="modeShowFlag">
            <li class="mode-item" v-for="mode in modeList"
                :key="mode.type" @click="checkPlayMode(mode.type)">
              <i class="controler" :class="[mode.iconClass]"></i>
            </li>
          </ul>
        </div>
        <i class="controler icon-unlike"></i>
        <i class="controler icon-delete" @click="deleteSound(currIndex)"></i>
      </div>
      <div class="volume-controler">
        <i class="volume" :class="[volumeCls]" @click="toggleMuted"></i>
        <div class="sound-volume-wrapper">
          <progress-bar :percent="volume"
                        @percentChange="changeVolume"></progress-bar>
        </div>
      </div>
      <i class="playlist" :class="[playListIcoCls]"
         @click="isShowPlaylist = !isShowPlaylist"></i>
    </div>
    <div class="playlist-wrapper" :class="{opend: isShowPlaylist}">
      <playlist></playlist>
    </div>
    <audio ref="echoSound" :src="currSound.source"
           @timeupdate="updateTime" @canplay="audioReady"
           @ended="end"></audio>
  </div>
</template>

<script type="text/ecmascript-6">
  import ProgressBar from 'base/progress-bar/progress-bar'
  import Playlist from 'components/playlist/playlist'
  import {padNum} from 'common/js/util'
  import {playMode} from 'common/js/config'
  import {mapGetters, mapMutations, mapActions} from 'vuex'

  export default {
    name: 'EchoPlayer',
    data () {
      // 播放模式类型与相应图标的映射
      this.modeIconClsMap = {
        [playMode.loop]: 'icon-loop',
        [playMode.loopOne]: 'icon-loop-one',
        [playMode.random]: 'icon-random'
      }
      const modeIconClsMap = this.modeIconClsMap
      return {
        // 是否显示“播放列表”
        isShowPlaylist: false,
        // 当前音量
        volume: 1,
        // 静音标志
        isMuted: false,
        // 模式列表浮层显示标志
        modeShowFlag: false,
        // 模式列表
        modeList: [
          {
            type: playMode.random,
            iconClass: modeIconClsMap[playMode.random]
          },
          {
            type: playMode.loopOne,
            iconClass: modeIconClsMap[playMode.loopOne]
          },
          {
            type: playMode.loop,
            iconClass: modeIconClsMap[playMode.loop]
          }
        ]
      }
    },
    created () {
      // audio 资源是否准备好标志
      this.isAudioReady = false
      // 初始化 prevVolume
      this.prevVolume = this.volume
      // audio 当前播放时间是否发生变化的标志
      this.audioTimeUpdateFlag = true
    },
    mounted () {
      // 保存对 audio 元素的引用
      this.echoSound = this.$refs.echoSound
    },
    computed: {
      /* 播放状态 icon 类名 */
      playStateCls () {
        return this.playState ? 'icon-pause' : 'icon-play'
      },
      /* 静音/非静音类名 */
      volumeCls () {
        return this.isMuted ? 'icon-muted' : 'icon-volume'
      },
      /* “播放列表”图标类名 */
      playListIcoCls () {
        return this.isShowPlaylist ? 'icon-playlist-open' : 'icon-playlist-close'
      },
      /* 当前 sound 播放进度百分比 */
      progressPercent () {
        return (this.currTime / this.currSound.duration) || 0
      },
      /* 格式化好的当前 sound 播放进度 */
      formatedCurrTime () {
        return this.formatTime(this.currTime)
      },
      /* 格式化好的 sound 时长 */
      formatedDuration () {
        return this.formatTime(this.currSound.duration)
      },
      ...mapGetters([
        'playState',
        'currIndex',
        'currSound',
        'currTime',
        'playList',
        'playMode'
      ])
    },
    watch: {
      /* 当播放状态改变时，控制 sound 的播放和暂停 */
      playState (newState) {
        if (newState) {
          this.$nextTick(() => {
            this.echoSound.play()
          })
        } else {
          this.echoSound.pause()
        }
      },
      /* 监听 volume 属性并更改 sound 音量 */
      volume (newVol, oldVol) {
        console.log('newVol', newVol)
        // 保存前一个音量
        this.prevVolume = oldVol
        this.echoSound.volume = newVol
        /* 设置静音标志的状态 */
        if (newVol === 0) {
          this.isMuted = true
        } else {
          this.isMuted = false
        }
      },
      // 监听 currTime，根据 currTime 是否由 audio 自身
      // “当前时间”属性值变化而触发 currTime 更新来决定是
      // 否设置 audio 的 currentTime 属性
      currTime (newTime) {
        if (!this.audioTimeUpdateFlag) {
          this.echoSound.currentTime = newTime
        }
        this.audioTimeUpdateFlag = false
      },
      /* 监听当前 sound 的变化 */
      currSound (newSound, oldSound) {
        // 模式切换或进行过删除操作要进行该项检测
        if (newSound.id === oldSound.id || !newSound.id) {
          return
        }
        this.setCurrTime(0)
        if (this.playState) {
          this.$nextTick(() => {
            this.echoSound.play()
          })
        }
        this.setPlayState(true)
      }
    },
    methods: {
      /* 切换 sound 播放状态 */
      togglePlayState () {
        /* 若当前播放列表为空则不切换状态 */
        if (this.currIndex < 0) {
          return
        }
        if (this.playState) {
          this.setPlayState(false)
        } else {
          this.setPlayState(true)
        }
      },
      /* 上一首 */
      prev () {
        let index = this.currIndex
        // 播放列表为空
        if (index < 0) {
          return
        }
        let len = this.playList.length
        // 播放列表只有一首 sound 或“单曲循环”
        if (len === 1 || this.playMode === playMode.loopOne) {
          this.setCurrTime(0)
          this.setPlayState(true)
          this.echoSound.play()
          return
        }
        if (index === 0) {
          index = len - 1
        } else {
          index = (index - 1) % len
        }
        this.setCurrIndex(index)
      },
      /* 下一首 */
      next () {
        let index = this.currIndex
        // 播放列表为空
        if (index < 0) {
          return
        }
        let len = this.playList.length
        // 播放列表只有一首 sound 或“单曲循环”
        if (len === 1 || this.playMode === playMode.loopOne) {
          this.setCurrTime(0)
          this.setPlayState(true)
          this.echoSound.play()
          return
        }
        index = (index + 1) % len
        this.setCurrIndex(index)
      },
      /* 在修改模式之前先检查一下 */
      checkPlayMode (mode) {
        if (mode === this.playMode) {
          return
        }
        this.changePlayMode(mode)
      },
      /* 更新 sound 当前播放时间点 */
      updateTime () {
        this.audioTimeUpdateFlag = true
        this.setCurrTime(this.echoSound.currentTime)
      },
      /* audio 资源已准备好 */
      audioReady () {
        this.isAudioReady = true
      },
      /* 当前 sound 播放结束 */
      end () {
        this.next()
      },
      /* 更改 sound 播放进度 */
      changeSoundProgress (percent) {
        this.setCurrTime((this.currSound.duration * percent) || 0)
      },
      /* 更改音量 */
      changeVolume (percent) {
        this.volume = percent
      },
      /* 切换静音/非静音 */
      toggleMuted () {
        if (this.isMuted) {
          this.volume = this.prevVolume
        } else {
          this.volume = 0
        }
      },
      /* 格式化时间 */
      formatTime (second) {
        second = Math.floor(second) || 0
        let minute = Math.floor(second / 60)
        let restSecond = second % 60
        return minute + ':' + padNum(restSecond)
      },
      ...mapMutations({
        setPlayState: 'SET_PLAY_STATE',
        setCurrTime: 'SET_CURR_TIME',
        setCurrIndex: 'SET_CURR_INDEX'
      }),
      ...mapActions(['changePlayMode', 'deleteSound'])
    },
    components: {
      ProgressBar,
      Playlist
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
    border-top: 1px solid #e8e8e8;
    z-index: 99;
    background: #fff;
    .panel-left {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
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
          &.icon-prev, &.icon-next {
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
          &.play-state {
            display: block;
            width: 50px;
            height: 50px;
            margin: 0 auto;
            font-size: 50px;
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
        background: url("./echo-cover.png") no-repeat 3px 3px;
        background-size: 48px 48px;
        .cover {
          display: block;
          width: 100%;
          height: 100%;
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
        .mode-wrapper {
          display: inline-block;
          position: relative;
          margin-right: 20px;
          .mode-list {
            position: absolute;
            bottom: 26px;
            right: -7px;
            padding: 6px 5px;
            border: 1px solid #e8e8e8;
            z-index: 99;
            background: #fff;
            .mode-item {
              margin-bottom: 2px;
              padding: 2px;
              cursor: pointer;
              .controler {
                margin: 0;
              }
            }
          }
        }
        .controler {
          display: inline-block;
          width: 20px;
          height: 20px;
          margin-right: 20px;
          font-size: 20px;
          color: @color-text;
          cursor: pointer;
          &.mode {
            margin: 0;
          }
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
      .playlist {
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
        cursor: pointer;
      }
    }
    .playlist-wrapper {
      position: absolute;
      right: 0;
      bottom: 74px;
      width: 460px;
      height: 0;
      min-width: 460px;
      overflow: hidden;
      box-shadow: -2px -2px 10px rgba(0, 0, 0, .1);
      transition: height .2s ease-in-out;
      &.opend {
        height: 540px;
      }
    }
  }
</style>