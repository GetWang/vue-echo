<template>
  <!-- sound、mv 视频组件 -->
  <div class="sound-mv">
    <div class="content-header">
      <div class="back-btn" @click="$router.push('/')">返回</div>
    </div>
    <div class="content-main">
      <div class="sound-header">
        <div class="title-wrapper">
          <h1 class="title">{{soundMv.name}}</h1>
          <div class="sound-info">
            <p class="channel-plays">
              <span class="channel-name" v-if="soundMv.channelId">
                <a :href="'#/channel/' + soundMv.channelId" class="link">{{soundMv.channelName}}</a>
                频道
              </span>
              <span class="play-info"><span class="count">{{soundMv.viewCount}}次</span>播放</span>
            </p>
            <ul class="status-list">
              <li class="status-item share">
                <i class="icon"></i>
                <span class="num">{{normalizeNum(soundMv.shareCount)}}</span>
              </li>
              <li class="status-item like">
                <i class="icon"></i>
                <span class="num">{{normalizeNum(soundMv.likeCount)}}</span>
              </li>
              <li class="status-item comment">
                <i class="icon"></i>
                <span class="num">{{normalizeNum(soundMv.commentCount)}}</span>
              </li>
            </ul>
          </div>
        </div>
        <!-- sound 或 mv 插槽 -->
        <slot name="soundWrapper"></slot>
      </div>
      <div class="sound-main">
        <div class="intro-area">
          <h2 class="title">简介</h2>
          <!-- 简介信息插槽 -->
          <slot name="intro"></slot>
        </div>
        <div class="comment-area">
          <h2 class="title">热门评论</h2>
          <ul class="comment-list">
            <li class="comment-item" v-for="comment in soundMv.commentList" :key="comment.id">
              <a :href="'#/user/' + comment.user.id" class="user-link">
                <img :src="comment.user.avatar" :alt="comment.user.name" class="avatar">
              </a>
              <div class="detail">
                <div class="user-info">
                  <a :href="'#/user/' + comment.user.id" class="user-name">{{comment.user.name}}</a>
                  <span class="date">{{normalizeTime(comment.createTime)}}</span>
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
</template>

<script type="text/ecmascript-6">
  import {toDateString} from 'common/js/util'

  export default {
    name: 'SoundMv',
    props: {
      // sound 或 mv 数据
      soundMv: {
        type: Object,
        default () {
          return {
            id: '',
            name: '',
            shareCount: 0,
            likeCount: 0,
            commentCount: 0,
            viewCount: 0,
            userId: '',
            userName: '',
            channelId: '',
            channelName: '',
            commentList: []
          }
        }
      }
    },
    methods: {
      /* 将大于或等于 10000 的数字转成“xxx 万”的形式 */
      normalizeNum (num) {
        if (+num >= 10000) {
          return (+num / 10000).toFixed(1) + '万'
        }
        return num
      },
      /* 修正评论时间的格式 */
      normalizeTime (time) {
        return toDateString(time)
      }
    }
  }
</script>

<style lang="less" scoped rel="stylesheet/less">
  @import "~common/less/variable";

  .sound-mv {
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
        padding-bottom: 30px;
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
              text-align: right;
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
</style>
