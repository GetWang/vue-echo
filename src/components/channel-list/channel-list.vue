<template>
  <div class="channels-wrapper">
    <h1 class="list-title">{{title}}</h1>
    <ul class="channel-list">
      <li class="channel-item">
        <div class="channel">
          <img src="" alt="" class="cover">
          <div class="channel-info">
            <h2 class="channel-name">3D音乐奇幻旋律馆</h2>
            <div class="status-info"></div>
          </div>
        </div>
        <div class="sounds-wrapper">
          <h3 class="title">频道热门回声</h3>
          <ul class="sound-list">
            <li class="sound-item"></li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript">
  export default {
    name: 'ChannelList',
    props: {
      // 列表标题
      title: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="less" scoped rel="stylesheet/less">
  @import "~common/less/variable";

  .channels-wrapper {
    padding: 45px 20px 30px 30px;
    .list-title {
      margin-bottom: 34px;
      font-size: @font-size-large-x;
      font-weight: normal;
      line-height: 28px;
      color: @color-text;
    }
    .channel-list {
      .channel-item {
        margin-bottom: 65px;
        overflow: hidden;
        .channel {
          float: left;
          width: 255px;
          height: 255px;
          margin-right: 14px;
          background: pink;
        }
        .sounds-wrapper {
          float: left;
          .title {
            margin-bottom: 10px;
            font-size: @font-size-medium-x;
            font-weight: normal;
            line-height: 26px;
            color: @color-text;
          }
        }
      }
    }
  }
</style>