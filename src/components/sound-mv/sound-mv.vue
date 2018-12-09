<template>
  <div class="sound-mv">
    <div class="content-header">
      <div class="back-btn" @click="$router.push('/')">返回</div>
    </div>
    <div class="content-main">
      <div class="sound-header">
        <div class="title-wrapper">
          <h1 class="title">梁昊龙—末日之恋</h1>
          <div class="sound-info">
            <p class="channel-plays">
              <span class="channel-name">
                <a href="" class="link">高手在民间</a>
                频道
              </span>
              <span class="play-info"><span class="count">1000+次</span>播放</span>
            </p>
            <ul class="status-list">
              <li class="status-item share">
                <i class="icon"></i>
                <span class="num">6</span>
              </li>
              <li class="status-item like">
                <i class="icon"></i>
                <span class="num">371</span>
              </li>
              <li class="status-item comment">
                <i class="icon"></i>
                <span class="num">5</span>
              </li>
            </ul>
          </div>
        </div>
        <slot name="soundWrapper"></slot>
      </div>
      <div class="sound-main">
        <div class="intro-area">
          <h2 class="title">简介</h2>
          <div class="intro"></div>
        </div>
        <div class="comment-area">
          <h2 class="title">热门评论</h2>
          <ul class="comment-list">
            <li class="comment-item">
              <a href="" class="user-link">
                <img src="" alt="" class="avatar">
              </a>
              <div class="detail">
                <div class="user-info">
                  <a href="" class="user-name">森男系</a>
                  <span class="date">2015-08-01</span>
                </div>
                <p class="comment-content">很好听的</p>
              </div>
              <div class="status">
                <span class="praise">赞(52)</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'SoundMv'
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
