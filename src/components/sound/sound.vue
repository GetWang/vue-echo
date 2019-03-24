<template>
  <!-- 回声 sound 详情页 -->
  <main class="sound-detail">
    <!-- sound、mv 视频组件 -->
    <sound-mv :soundMv="sound">
      <!-- sound 或 mv 插槽的内容 -->
      <div class="sound-wrapper" slot="soundWrapper">
        <div class="sound">
          <img :src="sound.pic_500" :alt="sound.name" class="sound-bg">
          <div class="bg-mask"></div>
          <div class="cover-bg">
            <img :src="sound.pic_500" :alt="sound.name" class="cover">
          </div>
        </div>
        <div class="sound-controls">
          <i class="play-state" :class="[playStateCls]"
             @click="togglePlayState"></i>
          <div class="sound-process-controler">
            <span class="curr-time">{{formatedCurrTime}}</span>
            <div class="sound-process-wrapper">
              <progress-bar :percent="progressPercent"
                            @percentChange="changeCurrTime"></progress-bar>
            </div>
            <span class="duration">{{formatTime(sound.duration)}}</span>
          </div>
          <i class="play-mode"></i>
          <i class="icon-favorite"></i>
        </div>
        <div class="user-area">
          <ul class="tag-list">
            <li class="tag"
              v-if="i < 10"
              v-for="(tag, i) in sound.tagList"
              :key="tag.id">{{tag.name}}</li>
          </ul>
          <div class="user">
            <div class="user-info">
              <a :href="'#/user/' + sound.userId" class="user-name">{{sound.userName}}</a>
              <span class="upload-date">2018-11-13 上传</span>
            </div>
            <a :href="'#/user/' + sound.userId" class="user-link">
              <img :src="sound.avatar" :alt="sound.userName" class="avatar">
              <i class="v-icon">v</i>
            </a>
          </div>
        </div>
      </div>
      <!-- 简介信息插槽的内容 -->
      <div class="intro" slot="intro">
        <ul class="song-info">
          <li class="info-item" v-for="(info, i) in sound.songInfo" :key="'info-' + i">
            <span class="type">{{info.type}}</span>：<span class="name">{{info.name}}</span>
          </li>
        </ul>
        <p class="lyric">{{sound.info + '\n' + sound.lyric}}</p>
      </div>
    </sound-mv>
  </main>
</template>

<script type="text/ecmascript-6">
  import SoundMv from 'components/sound-mv/sound-mv'
  import ProgressBar from 'base/progress-bar/progress-bar'
  import Sound from 'common/js/sound'
  import {getSound} from 'api/sound'
  import {STATUS_OK} from 'api/config'
  import {padNum} from 'common/js/util'
  import {mapGetters, mapMutations, mapActions} from 'vuex'

  export default {
    name: 'Sound',
    data () {
      return {
        // 回声 sound
        sound: {
          id: '',
          name: '',
          shareCount: 0,
          likeCount: 0,
          commentCount: 0,
          viewCount: 0,
          songInfo: [],
          duration: 0,
          info: '',
          lyric: '',
          tagList: [],
          userId: '',
          userName: '',
          channelId: '',
          channelName: '',
          commentList: []
        }
      }
    },
    created () {
      this._getSound(this.$route.params.id)
    },
    computed: {
      /* 判断当前页面中的 sound 是否和播放器中的当前的 sound 一致 */
      isSameSound () {
        return this.playList[this.currIndex] && (this.playList[this.currIndex].id === this.sound.id)
      },
      /* 播放状态 icon 类名 */
      playStateCls () {
        if (this.isSameSound) {
          return this.playState ? 'icon-pause' : 'icon-play'
        }
        return 'icon-play'
      },
      /* sound 播放进度百分比 */
      progressPercent () {
        if (this.isSameSound) {
          return this.currTime / this.sound.duration
        }
        return 0
      },
      /* 格式化后的“当前播放时间” */
      formatedCurrTime () {
        if (this.isSameSound) {
          return this.formatTime(this.currTime)
        }
        return this.formatTime(0)
      },
      ...mapGetters([
        'playState',
        'currTime',
        'playList',
        'currIndex'
      ])
    },
    methods: {
      /* 获取 sound 详情信息 */
      _getSound (id, comment = 1) {
        getSound(id, comment).then(res => {
          console.log('res', res)
          if (res.status === STATUS_OK) {
            this.handleSound(res)
          }
        })
      },
      /* 处理 sound 详情信息 */
      handleSound (data) {
        const keyArr = ['name', 'author', 'album_name']
        const songInfo = []
        if (data.info.song_info) {
          keyArr.forEach((item) => {
            let obj = data.info.song_info[item]
            if (obj && obj.name !== '' && obj.name !== '无') {
              songInfo.push(obj)
            }
          })
        }
        this.sound = new Sound(Object.assign({
          songInfo,
          comments: data.comments
        }, data.info))
        console.log('sound', this.sound)
      },
      /* 切换播放状态 */
      togglePlayState () {
        if (this.playState && this.isSameSound) {
          this.setPlayState(false)
        } else {
          this.insertSound(this.sound)
        }
      },
      /* 更改当前 sound 播放进度 */
      changeCurrTime (percent) {
        this.setCurrTime(this.sound.duration * percent)
      },
      /* 格式化时间 */
      formatTime (second) {
        second = Math.floor(second)
        let minute = Math.floor(second / 60)
        let restSecond = second % 60
        return padNum(minute) + ':' + padNum(restSecond)
      },
      ...mapMutations({
        setPlayState: 'SET_PLAY_STATE',
        setCurrTime: 'SET_CURR_TIME'
      }),
      ...mapActions(['insertSound'])
    },
    components: {
      SoundMv,
      ProgressBar
    }
  }
</script>

<style lang="less" scoped rel="stylesheet/less">
  @import "~common/less/variable";

  .sound-detail {
    padding: 15px 0 60px;
    background: @color-background;
    .sound-wrapper {
      .sound {
        position: relative;
        height: 372px;
        overflow: hidden;
        .sound-bg {
          display: block;
          width: 100%;
          margin-top: -230px;
          filter: blur(18px);
        }
        .bg-mask {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 100%;
          background: rgba(255, 255, 255, .6);
        }
        .cover-bg {
          position: absolute;
          top: 50%;
          left: 40px;
          margin-top: -146px;
          padding: 5px;
          border-radius: 4px;
          box-shadow: 0 0 4px 0 rgba(0, 0, 0, .3);
          background: rgba(255, 255, 255, .85);
          .cover {
            display: block;
            width: 282px;
            height: 282px;
            border-radius: 4px;
            object-fit: cover;
          }
        }
      }
      .sound-controls {
        position: relative;
        height: 48px;
        padding-left: 90px;
        background: @color-background-l;
        .play-state {
          position: absolute;
          top: 50%;
          left: 40px;
          width: 40px;
          height: 40px;
          margin-top: -20px;
          border: 1px solid #ddd;
          border-radius: 50%;
          box-sizing: border-box;
          font-size: 40px;
          line-height: 40px;
          text-align: center;
          color: @color-theme;
          cursor: pointer;
        }
        .sound-process-controler {
          position: relative;
          float: left;
          width: 720px;
          height: 100%;
          .curr-time, .duration {
            float: left;
            width: 32px;
            height: 100%;
            overflow: hidden;
            font-size: @font-size-small-s;
            line-height: 48px;
            color: #8c8c8c;
          }
          .duration {
            float: right;
          }
          .sound-process-wrapper {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 620px;
            height: 6px;
            margin: auto;
          }
        }
      }
      .user-area {
        padding: 15px 30px 25px;
        overflow: hidden;
        .tag-list {
          float: left;
          width: 670px;
          font-size: 0;
          .tag {
            display: inline-block;
            height: 28px;
            margin: 5px 10px 5px 0;
            padding: 0 12px;
            border: 1px solid #e8e8e8;
            border-radius: 14px;
            font-size: @font-size-small;
            line-height: 28px;
            color: @color-text-ll;
            background: @color-background-l;
          }
        }
        .user {
          float: right;
          padding-top: 10px;
          overflow: hidden;
          .user-info {
            float: left;
            margin: 10px 15px 0;
            text-align: right;
            .user-name {
              display: block;
              margin-bottom: 6px;
              overflow: hidden;
              max-width: 250px;
              font-size: @font-size-small;
              line-height: 18px;
              text-decoration: none;
              text-overflow: ellipsis;
              white-space: nowrap;
              color: @color-text-l;
            }
            .upload-date {
              font-size: @font-size-small-s;
              line-height: 16px;
              color: #8e8e8e;
            }
          }
          .user-link {
            position: relative;
            float: left;
            width: 60px;
            height: 60px;
            .avatar {
              display: block;
              width: 100%;
              height: 100%;
              border-radius: 50%;
            }
            .v-icon {
              position: absolute;
              bottom: 0;
              right: 0;
              width: 20px;
              height: 20px;
              border-radius: 50%;
              font-size: @font-size-medium;
              font-style: normal;
              line-height: 20px;
              text-align: center;
              color: #fff;
              background: @color-theme-d;
            }
          }
        }
      }
    }
    .intro {
      padding: 0 60px 35px;
      font-size: @font-size-small;
      line-height: 24px;
      word-break: break-all;
      word-wrap: break-word;
      white-space: pre-line;
      color: @color-text-dd;
      .song-info {
        margin-bottom: 30px;
      }
    }
  }
</style>