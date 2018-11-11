<template>
  <main class="famous-list">
    <div class="content">
      <h2 class="list-name">echo 群星</h2>
      <ul class="user-list">
        <li class="user-item">
          <a href="" class="user-link">
            <img src="" alt="" class="avatar">
          </a>
          <p class="user-name">
            <a href="" class="link">GEM鄧紫棋</a>
          </p>
          <p class="user-desc">香港知名歌手香港知名歌手香港知名歌手</p>
        </li>
      </ul>
    </div>
  </main>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'FamousList'
  }
</script>

<style lang="less" scoped rel="stylesheet/less">
  @import "~common/less/variable";

  .famous-list {
    padding: 15px 0 40px;
    background-color: @color-background;
    .content {
      width: 755px;
      margin: 0 auto;
      overflow: hidden;
      background-color: #fff;
      .list-name {
        width: 693px;
        height: 36px;
        margin: 15px auto 20px;
        font-size: @font-size-large-x;
        font-weight: normal;
        line-height: 36px;
        color: @color-text;        
      }
      .user-list {
        width: 693px;
        margin: 0 auto;
        padding-bottom: 45px;
        overflow: hidden;
        .user-item {
          float: left;
          width: 150px;
          margin: 0 30px 20px 0;
          &:nth-child(4n) {
            margin-right: 0;
          }
          .user-link {
            display: block;
            width: 150px;
            height: 150px;
            margin-bottom: 9px;
            .avatar {
              display: block;
              width: 100%;
              height: 100%;
              background: red;
            }
          }
          .user-name {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            .link {
              display: inline-block;
              height: 22px;
              font-size: @font-size-small;
              line-height: 22px;
              text-decoration: none;
              color: @color-text-d;
              &:after {
                display: inline-block;
                content: 'v';
                width: 16px;
                height: 16px;
                margin-left: 7px;
                border-radius: 50%;
                font-size: @font-size-small;
                line-height: 16px;
                text-align: center;
                color: #fff;
                background: @color-theme;
              }
            }
          }
          .user-desc {
            margin-top: 3px;
            overflow: hidden;
            font-size: @font-size-small-s;
            line-height: 16px;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: @color-text;
          }
        }
      }
    }
  }
</style>
