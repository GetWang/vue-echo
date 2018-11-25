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
        <div class="channel-main"></div>
      </div>
    </div>
  </main>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'ChannelDetail'
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
      }
    }
  }
</style>
