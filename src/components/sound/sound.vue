<template>
  <!-- 回声 sound 详情页 -->
  <main class="sound-detail">
    <div class="content">
      <div class="content-header">
        <div class="back-btn" @click="$router.push('/')">返回</div>
      </div>
      <div class="content-main">
        <div class="sound-header">
          <div class="title-wrapper">
            <h1 class="title">{{sound.name}}</h1>
            <div class="sound-info">
              <p class="channel-plays">
                <span class="channel-name">
                  <a :href="'#/channel/' + sound.channelId" class="link">{{sound.channelName}}</a>
                  频道
                </span>
                <span class="play-info"><span class="count">{{sound.viewCount}}次</span>播放</span>
              </p>
              <ul class="status-list">
                <li class="status-item share">
                  <i class="icon"></i>
                  <span class="num">{{normalizeNum(sound.shareCount)}}</span>
                </li>
                <li class="status-item like">
                  <i class="icon"></i>
                  <span class="num">{{normalizeNum(sound.likeCount)}}</span>
                </li>
                <li class="status-item comment">
                  <i class="icon"></i>
                  <span class="num">{{normalizeNum(sound.commentCount)}}</span>
                </li>
              </ul>
            </div>
          </div>
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
        <div class="sound-main">
          <div class="intro-area">
            <h2 class="title">简介</h2>
            <div class="intro">
              <ul class="song-info">
                <li class="info-item" v-for="(info, i) in sound.songInfo" :key="'info-' + i">
                  <span class="type">{{info.type}}</span>：<span class="name">{{info.name}}</span>
                </li>
              </ul>
              <p class="lyric">{{sound.info + '\n' + sound.lyric}}</p>
            </div>
          </div>
          <div class="comment-area">
            <h2 class="title">热门评论</h2>
            <ul class="comment-list">
              <li class="comment-item" v-for="comment in sound.commentList" :key="comment.id">
                <a :href="'#/user/' + comment.user.id" class="user-link">
                  <img :src="comment.user.avatar" :alt="comment.user.name" class="avatar">
                </a>
                <div class="detail">
                  <div class="user-info">
                    <a :href="'#/user/' + comment.user.id" class="user-name">{{comment.user.name}}</a>
                    <span class="date">2015-08-01</span>
                  </div>
                  <p class="comment-content">{{comment.content}}</p>
                </div>
                <div class="status">
                  <span class="praise">赞({{comment.likeCount}})</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script type="text/ecmascript-6">
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
      },
      /* 将大于或等于 10000 的数字转成“xxx 万”的形式 */
      normalizeNum (num) {
        if (+num >= 10000) {
          return (+num / 10000).toFixed(1) + '万'
        }
        return num
      }
    }
  }
</script>

<style lang="less" scoped rel="stylesheet/less">
  @import "~common/less/variable";

  .sound-detail {
    padding: 15px 0 60px;
    background: @color-background;
    .content {
      width: 1000px;
      margin: 0 auto;
      .content-header {
        position: relative;
        height: 82px;
        background: @color-background-l;
        .back-btn {
          position: absolute;
          left: 40px;
          top: 50%;
          height: 26px;
          margin-top: -13px;
          padding-left: 42px;
          font-size: @font-size-medium-x;
          line-height: 26px;
          color: @color-text-ll;
          background: url("~common/image/prev-back.png") no-repeat left center;
          cursor: pointer;
        }
      }
      .content-main {
        .sound-header {
          background: #fff;
          .title-wrapper {
            position: relative;
            height: 86px;
            .title {
              position: absolute;
              top: 50%;
              left: 40px;
              margin-top: -14px;
              overflow: hidden;
              max-width: 650px;
              font-size: @font-size-large;
              font-weight: normal;
              text-overflow: ellipsis;
              white-space: nowrap;
              line-height: 28px;
            }
            .sound-info {
              position: absolute;
              right: 40px;
              top: 50%;
              height: 46px;
              margin-top: -23px;
              .channel-plays {
                margin-bottom: 8px;
                font-size: @font-size-small-s;
                line-height: 16px;
                color: #aaa;
                .channel-name {
                  margin-right: 8px;
                  .link {
                    margin-right: 2px;
                    text-decoration: none;
                    color: #8ed72b;
                  }
                }
                .play-info {
                  .count {
                    margin-right: 5px;
                    color: #8ed72b;
                  }
                }
              }
              .status-list {
                font-size: 0;
                .status-item {
                  display: inline-block;
                  position: relative;
                  height: 20px;
                  margin-left: 18px;
                  padding-left: 18px;
                  font-size: @font-size-small;
                  line-height: 20px;
                  color: @color-text-l;
                  .icon {
                    position: absolute;
                    top: 1px;
                    left: 0;
                    width: 18px;
                    height: 18px;
                    background-image: url("~common/image/sound-status-sprite.png");
                    background-repeat: no-repeat;
                  }
                  .num {
                    margin-left: 5px;
                  }
                  &.share {
                    .icon {
                      background-position: 0 -100px;
                    }
                  }
                  &.like {
                    .icon {
                      background-position: -22px -100px;
                    }
                  }
                  &.comment {
                    .icon {
                      background-position: -45px -100px;
                    }
                  }
                }
              }
            }
          }
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
        .sound-main {
          margin-top: 15px;
          overflow: hidden;
          .intro-area {
            float: left;
            width: 418px;
            margin-right: 15px;
            border-radius: 4px;
            background: #fff;
            .title {
              height: 28px;
              padding: 30px;
              font-size: @font-size-large-x;
              font-weight: normal;
              line-height: 28px;
              color: @color-text-l;
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
          .comment-area {
            float: left;
            width: 563px;
            border-radius: 4px;
            background: #fff;
            .title {
              height: 28px;
              padding: 30px;
              font-size: @font-size-large-x;
              font-weight: normal;
              line-height: 28px;
              color: @color-text-l;
            }
            .comment-list {
              padding: 0 20px 30px 30px;
              .comment-item {
                padding: 10px 0;
                border-bottom: 1px solid #efefef;
                .user-link {
                  float: left;
                  width: 50px;
                  height: 50px;
                  margin-right: 20px;
                  .avatar {
                    display: block;
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                  }
                }
                .detail {
                  float: left;
                  padding-top: 8px;
                  max-width: 440px;
                  .user-info {
                    margin-bottom: 5px;
                    .user-name {
                      margin-right: 6px;
                      font-size: @font-size-small;
                      line-height: 18px;
                      text-decoration: none;
                      color: #898989;
                    }
                    .date {
                      font-size: @font-size-small-s;
                      line-height: 16px;
                      color: #b7b7b7;
                    }
                  }
                  .comment-content {
                    margin-bottom: 5px;
                    font-size: @font-size-small;
                    line-height: 18px;
                    word-break: break-all;
                    word-wrap: break-word;
                    color: #535353;
                  }
                }
                .status {
                  clear: both;
                  text-align: right;
                  font-size: @font-size-small-s;
                  line-height: 16px;
                  color: #b7b7b7;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
