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
        <div class="sound-controls"></div>
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
  import Sound from 'common/js/sound'
  import {getSound} from 'api/sound'
  import {STATUS_OK} from 'api/config'

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
      }
    },
    components: {
      SoundMv
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
          }
        }
      }
      .sound-controls {
        height: 48px;
        background: @color-background-l;
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