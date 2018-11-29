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
            <h1 class="title">梁昊龙—末日之恋</h1>
            <div class="sound-info">
              <p class="channel-plays">
                <span class="channel-name">
                  <a href="" class="link">高手在民间</a>
                  频道
                </span>
                <span class="play-info"><span class="count">10000+次</span>播放</span>
              </p> 
              <ul class="status-list">
                <li class="status-item share">
                  <i class="icon"></i>
                  <span class="num">6</span>
                </li>
                <li class="status-item like">
                  <i class="icon"></i>
                  <span class="num">334</span>
                </li>
                <li class="status-item comment">
                  <i class="icon"></i>
                  <span class="num">4</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="sound">
            <div class="cover-bg">
              <img src="" alt="" class="cover">
            </div>
          </div>
          <div class="sound-controls"></div>
          <div class="user-area">
            <div class="user">
              <div class="user-info">
                <p class="user-name">梁昊龙_APEinT</p>
                <span class="upload-date">2018-11-13 上传</span>
              </div>
              <div class="avatar-bg">
                <img src="" alt="" class="avatar">
                <i class="v-icon">v</i>
              </div>
            </div>
          </div>
        </div>
        <div class="sound-main"></div>
      </div>
    </div>
  </main>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'Sound'
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
              max-width: 400px;
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
            background: pink;
            .cover-bg {
              position: absolute;
              top: 50%;
              left: 40px;
              margin-top: -146px;
              padding: 5px;
              border-radius: 4px;
              background: #fff;
              .cover {
                display: block;
                width: 282px;
                height: 282px;
                border-radius: 4px;
                background: red;
              }
            }
          }
          .sound-controls {
            height: 48px;
            background: @color-background-l;
          }
          .user-area {
            padding: 25px 30px;
            text-align: right;
            .user {
              display: inline-block;
              overflow: hidden;
              .user-info {
                float: left;
                margin: 10px 15px 0;
                .user-name {
                  margin-bottom: 6px;
                  overflow: hidden;
                  max-width: 250px;
                  font-size: @font-size-small;
                  line-height: 18px;
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
              .avatar-bg {
                position: relative;
                float: left;
                width: 60px;
                height: 60px;
                .avatar {
                  display: block;
                  width: 100%;
                  height: 100%;
                  border-radius: 50%;
                  background: pink;
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
        }
      }
    }
  }
</style>
