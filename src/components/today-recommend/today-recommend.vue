<template>
  <!-- 首页的今日推荐组件 -->
  <div class="today-recommend">
    <div class="recom-header">
      <h2 class="title">今日推荐</h2>
      <div class="play-btn">
        <i class="play-icon"></i>
        <span class="text">一键播放</span>
      </div>
    </div>
    <ul class="recom-list">
      <li class="recom-item">
        <a href="" class="sound-link">
          <div class="top">
            <img src="" alt="" class="cover">
            <div class="duration">03:34</div>
          </div>
          <div class="sound-info">
            <h3 class="sound-name">听妈妈的话 晚点再恋爱吧 「Boys Like You」 </h3>
            <h4 class="channel"><a href="" class="link">欧美流行指南</a>频道</h4>
            <ul class="sound-status">
              <li class="status status-share">
                <i class="icon"></i>
                <span class="count">88</span>
              </li>
              <li class="status status-like">
                <i class="icon"></i>
                <span class="count">88</span>
              </li>
              <li class="status status-comment">
                <i class="icon"></i>
                <span class="count">88</span>
              </li>
            </ul>
          </div>
        </a>
      </li>
    </ul>
    <div class="load-more">
      <span class="to-load">加载更多</span>
      <span class="loading">加载ing</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getTodayRecom} from 'api/home'

  export default {
    name: 'TodayRecommend',
    created () {
      this._getTodayRecom()
    },
    methods: {
      /* 获取首页今日推荐数据 */
      _getTodayRecom (page = 1) {
        getTodayRecom(page).then(res => {
          console.log('res', res)
        }).catch(err => {
          console.log('api/getTodayRecom error', err)
        })
      }
    }
  }
</script>

<style lang="less" scoped rel="stylesheet/less">
  @import "~common/less/variable";

  .today-recommend {
    width: 712px;
    margin: 50px auto 20px;
    .recom-header {
      margin-bottom: 25px;
      padding: 0 9px;
      overflow: hidden;
      .title {
        float: left;
        height: 28px;
        margin-right: 24px;
        font-size: @font-size-large-x;
        font-weight: normal;
        line-height: 28px;
        color: @color-text;
      }
      .play-btn {
        position: relative;
        float: left;
        width: 96px;
        height: 28px;
        padding-left: 30px;
        border-radius: 14px;
        box-sizing: border-box;
        line-height: 28px;
        background-color: @color-theme;
        cursor: pointer;
        .play-icon {
          position: absolute;
          top: 4px;
          left: 4px;
          width: 19px;
          height: 19px;
          background: url("~common/image/play.png") no-repeat 0 0;
          background-size: 100% 100%;
        }
        .text {
          font-size: @font-size-small;
          color: #fff;
        }
      }
    }
    .recom-list {
      overflow: hidden;
      .recom-item {
        float: left;
        width: 160px;
        margin: 0 9px 25px;
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
              background: red;
            }
            .duration {
              position: absolute;
              left: 8px;
              bottom: 5px;
              height: 14px;
              padding-left: 19px;
              font-size: @font-size-small-s;
              line-height: 14px;
              color: #fff;
              background: url("./play-mini.png") no-repeat 0 0;
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
                  background-image: url("./sound-status-sprite.png");
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
    .load-more {
      width: 672px;
      height: 40px;
      margin: 0 auto;
      font-size: @font-size-small;
      line-height: 40px;
      text-align: center;
      color: @color-text-ll;
      background-color: @color-background-l;
      cursor: pointer;
      .loading {
        padding-left: 22px;
        background: url("./loading.gif") no-repeat 0 1px;
        background-size: auto 16px;
      }
    }
  }
</style>