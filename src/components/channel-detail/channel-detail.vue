<template>
  <!-- 频道详情页 -->
  <main class="channel-detail">
    <div class="content">
      <div class="content-header">
        <div class="back-btn" @click="$router.push('/channel')">返回</div>
      </div>
      <div class="content-main">
        <div class="channel-header">
          <div class="title-wrapper">
            <h1 class="title">3D音乐奇幻旋律馆</h1>
            <ul class="status-list">
              <li class="status-item sound">4.6万</li>
              <li class="status-item follow">135.7万</li>
              <li class="status-item share">1.7万</li>
            </ul>
          </div>
          <div class="channel">
            <img src="" alt="" class="cover">
            <div class="channel-info">
              <h2 class="intro-title">频道简介</h2>
              <p class="intro">echo独家3D音乐，颠覆你的听觉体验</p>
            </div>
          </div>
        </div>
        <div class="channel-main">
          <div class="type-tabs">
            <span class="tab hot current">最热</span>
            <span class="tab new">最新</span>
          </div>
          <ul class="sound-list">
            <li class="sound-item">
              <a href="" class="sound-link">
                <div class="top">
                  <img src="" alt="" class="cover">
                  <div class="duration">04:24</div>
                </div>
                <div class="sound-info">
                  <h3 class="sound-name">「3D音效」Fade 超人气小清新电音</h3>
                  <h4 class="channel"><a href="" class="link">3D音乐奇幻旋律馆</a>频道</h4>
                  <ul class="sound-status">
                    <li class="status status-share">
                      <i class="icon"></i>
                      <span class="count">25544</span>
                    </li>
                    <li class="status status-like">
                      <i class="icon"></i>
                      <span class="count">65484</span>
                    </li>
                    <li class="status status-comment">
                      <i class="icon"></i>
                      <span class="count">1545</span>
                    </li>
                  </ul>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>

<script type="text/ecmascript-6">
  import {getChannelInfo} from 'api/channel'

  export default {
    name: 'ChannelDetail',
    data () {
      return {
        // 频道 sound 类型
        channelOrder: 'hot',
        // 当前页码
        currPage: 1
      }
    },
    created () {
      this._getChannelInfo(this.$route.params.id, this.channelOrder, this.currPage)
    },
    methods: {
      /* 获取频道详情信息数据 */
      _getChannelInfo (id, order, page) {
        getChannelInfo(id, order, page).then(res => {
          console.log('res', res)
        })
      }
    }
  }
</script>

<style lang="less" scoped rel="stylesheet/less">
  @import "~common/less/variable";

  .channel-detail {
    padding: 15px 0 40px;
    background: @color-background;
    .content {
      width: 1000px;
      margin: 0 auto;
      border-radius: 4px;
      overflow: hidden;
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
        background: #fff;
        .channel-header {
          padding: 53px 23px 60px 26px;
          .title-wrapper {
            margin-bottom: 30px;
            overflow: hidden;
            .title {
              float: left;
              font-size: 28px;
              font-weight: normal;
              line-height: 32px;
              color: @color-text-dd;
            }
            .status-list {
              float: right;
              font-size: 0;
              .status-item {
                display: inline-block;
                margin-left: 20px;
                padding-left: 25px;
                font-size: @font-size-small;
                line-height: 18px;
                color: @color-text-l;
                // background: pink;
                background-repeat: no-repeat;
                background-position: left center;
                &.sound {
                  background-image: url("./sound-icon.png");
                }
                &.follow {
                  background-image: url("./follow-icon.png");
                }
                &.share {
                  background-image: url("./share-icon.png");
                }
              }
            }
          }
          .channel {
            overflow: hidden;
            .cover {
              float: left;
              width: 256px;
              height: 136px;
              margin-right: 16px;
              background: pink;
            }
            .channel-info {
              float: left;
              max-width: 500px;
              .intro-title {
                margin-bottom: 3px;
                font-size: @font-size-medium;
                font-weight: normal;
                line-height: 22px;
                color: #9b9b9b;
              }
              .intro {
                overflow: hidden;
                font-size: @font-size-small-s;
                line-height: 18px;
                text-overflow: ellipsis;
                white-space: nowrap;
                color: @color-text;
              }
            }
          }
        }
        .channel-main {
          padding-bottom: 20px;
          .type-tabs {
            border-bottom: 1px solid #e8e8e8;
            .tab {
              display: inline-block;
              margin: 0 0 -2px 40px;
              font-size: @font-size-medium-x;
              line-height: 26px;
              color: @color-text-ll;
              cursor: pointer;
              &.current {
                border-bottom: 4px solid @color-theme;
              }
            }
          }
          .sound-list {
            width: 964px;
            margin: 0 auto;
            padding: 50px 0 20px;
            overflow: hidden;
            .sound-item {
              float: left;
              width: 160px;
              margin: 0 16px 25px;
              background-color: @color-background-l;
              .sound-link {
                display: block;
                text-decoration: none;
                .top {
                  position: relative;
                  .cover {
                    display: block;
                    width: 100%;
                    height: auto;
                    height: 160px;
                    background: pink;
                  }
                  .duration {
                    position: absolute;
                    left: 8px;
                    bottom: 5px;
                    height: 14px;
                    padding-left: 19px;
                    font-size: @font-size-small-s;
                    font-family: "Microsoft YaHei", sans-serif;
                    line-height: 14px;
                    color: #fff;
                    background: url("~common/image/play-mini.png") no-repeat 0 0;
                    background-size: auto 14px;
                  }
                }
                .sound-info {
                  padding: 12px 0 5px;
                  .sound-name {
                    height: 36px;
                    overflow: hidden;
                    margin: 0 15px 15px;
                    font-size: @font-size-small;
                    font-weight: normal;
                    line-height: 18px;
                    color: @color-text-d;
                  }
                  .channel {
                    margin: 0 15px 8px;
                    overflow: hidden;
                    font-size: @font-size-small;
                    font-weight: normal;
                    line-height: 16px;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    color: #9a9a9a;
                    .link {
                      margin-right: 5px;
                      text-decoration: none;
                      color: @color-theme;
                    }
                  }
                  .sound-status {
                    font-size: 0;
                    .status {
                      display: inline-block;
                      width: 33.33%;
                      text-align: center;
                      .icon {
                        display: inline-block;
                        width: 14px;
                        height: 14px;
                        background-image: url("~common/image/sound-status-sprite.png");
                        background-repeat: no-repeat;
                      }
                      .count {
                        display: block;
                        margin-top: 2px;
                        overflow: hidden;
                        font-size: @font-size-small-s;
                        line-height: 16px;
                        text-align: center;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        color: @color-text-l;
                      }
                      &-share {
                        .icon {
                          background-position: 0 -22px;
                        }
                      }
                      &-like {
                        .icon {
                          background-position: -16px -22px;
                        }
                      }
                      &-comment {
                        .icon {
                          background-position: -33px -22px;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>
