<template>
  <!-- 名人页面 -->
  <main class="famous">
    <div class="content">
      <!-- echo 名人 -->
      <famous-slide></famous-slide>
      <!-- echo 群星 -->
      <div class="top-user">
        <div class="top-header">
          <h2 class="title">echo 群星</h2>
          <a class="enter-top" href="">查看全部</a>
        </div>
        <ul class="top-list">
          <li class="top-item">
            <a href="" class="user-link">
              <img src="" alt="" class="avatar">
              <i class="v-icon">v</i>
            </a>
            <a href="" class="user-name">周杰伦周杰伦周杰伦周杰伦</a>
            <p class="user-desc">中国流行男歌手，著名音乐人中国流行男歌手，著名音乐人</p>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script type="text/ecmascript-6">
  import FamousSlide from 'components/famous-slide/famous-slide'

  export default {
    name: 'Famous',
    components: {
      FamousSlide
    }
  }
</script>

<style lang="less" scoped rel="stylesheet/less">
  @import "~common/less/variable";

  .famous {
    padding: 15px 0 40px;
    background-color: @color-background;
    .content {
      width: 755px;
      margin: 0 auto;
      padding-top: 30px;
      overflow: hidden;
      background-color: #fff;
      .top-user {
        width: 695px;
        margin: 50px auto;
        .top-header {
          position: relative;
          margin-bottom: 25px;
          .title {
            height: 36px;
            font-size: @font-size-large-x;
            line-height: 36px;
            text-align: left;
            color: @color-text;
          }
          .enter-top {
            position: absolute;
            right: 0;
            bottom: 0;
            font-size: @font-size-medium;
            line-height: 36px;
            text-decoration: none;
            color: @color-theme;
          }
        }
        .top-list {
          overflow: hidden;
          .top-item {
            float: left;
            width: 96px;
            margin: 0 9px 11px;
            text-align: center;
            .user-link {
              display: inline-block;
              position: relative;
              text-decoration: none;
              .avatar {
                display: block;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background: red;
              }
              .v-icon {
                position: absolute;
                bottom: 0;
                right: 0;
                width: 16px;
                height: 16px;
                border-radius: 50%;
                font-size: @font-size-small;
                line-height: 16px;
                color: #fff;
                background-color: @color-theme;
              }
            }
            .user-name {
              display: block;
              margin: 8px 0 4px;
              overflow: hidden;
              font-size: @font-size-small;
              line-height: 18px;
              text-decoration: none;
              text-overflow: ellipsis;
              white-space: nowrap;
              color: @color-text-d;
            }
            .user-desc {
              height: 36px;
              overflow: hidden;
              font-size: @font-size-small-s;
              line-height: 18px;
              color: @color-text-l;
            }
          }
        }
      }
    }
  }
</style>