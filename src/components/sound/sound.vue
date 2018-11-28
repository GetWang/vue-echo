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
                <li class="status-item share">6</li>
                <li class="status-item like">334</li>
                <li class="status-item comment">4</li>
              </ul>
            </div>
          </div>
          <div class="sound"></div>
        </div>
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
              font-size: @font-size-large;
              font-weight: normal;
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
                  margin-left: 18px;
                  padding-left: 25px;
                  font-size: @font-size-small;
                  line-height: 20px;
                  color: @color-text-l;
                  background-image: url("~common/image/sound-status-sprite.png");
                  background-repeat: no-repeat;
                  &.share {
                    background-position: 0 -99px;
                  }
                  &.like {
                    background-position: -16px -99px;
                  }
                  &.comment {
                    background-position: -33px -99px;
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
