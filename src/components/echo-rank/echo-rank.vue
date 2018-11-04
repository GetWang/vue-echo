<template>
  <div class="echo-rank">
    <div class="day-rank">
      <div class="rank-header">
        <div class="day-top1">
          <div class="top1-pic">
            <a class="top1-link" href="">
              <img src="" alt="" class="cover">
            </a>
          </div>
          <div class="sound-info">
            <h1 class="title">热门日榜 TOP 1</h1>
            <h2 class="sound-name"><a href="" class="link">忘记拥抱 梁昊龙忘记拥抱 梁昊龙忘记拥抱 梁昊龙忘记拥抱 梁昊龙忘记拥抱</a></h2>
            <p class="user-info">
              <a href="" class="link">
                <img src="" alt="" class="avatar">
                <span class="user-name">梁昊龙_APEinT梁昊龙_APEinT梁昊龙_APEinT梁昊龙_APEinT梁昊龙_APEinT梁昊龙_APEinT</span>
              </a>
            </p>
            <div class="play-btn"><span class="text">一键播放</span></div>
          </div>
        </div>
      </div>
    </div>
    <ul class="other-rank">
      <li class="rank"></li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'EchoRank'
  }
</script>

<style lang="less" scoped rel="stylesheet/less">
  @import "~common/less/variable";

  .echo-rank {
    .day-rank {
      .rank-header {
        position: relative;
        height: 300px;
        margin-bottom: 60px;
        background: pink;
        .day-top1 {
          position: absolute;
          top: 88px;
          left: 125px;
          .top1-pic {
            float: left;
            width: 435px;
            height: 264px;
            margin-right: 44px;
            background: url("./top1-pic.png") no-repeat 0 0;
            background-size: 100% auto;
            .top1-link {
              display: block;
              width: 250px;
              height: 250px;
              margin-left: 87px;
              .cover {
                display: block;
                width: 100%;
                height: 100%;
                background: red;
              }
            }
          }
          .sound-info {
            float: left;
            width: 500px;
            color: #fff;
            .title {
              height: 42px;
              margin: 20px 0 13px;
              font-size: 30px;
              font-weight: 500;
              line-height: 42px;
            }
            .sound-name {
              height: 43px;
              margin-bottom: 8px;
              overflow: hidden;
              font-size: 26px;
              font-weight: 500;
              line-height: 43px;
              text-overflow: ellipsis;
              white-space: nowrap;
              .link {
                text-decoration: none;
                color: #fff;
              }
            }
            .user-info {
              margin-bottom: 30px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              .link {
                position: relative;
                display: inline-block;
                height: 30px;
                padding-left: 30px;
                font-size: @font-size-medium-x;
                text-decoration: none;
                line-height: 30px;
                color: #fff;
                .avatar {
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 30px;
                  height: 30px;
                  border-radius: 50%;
                  background: red;
                }
                .user-name {
                  margin-left: 10px;
                }
              }
            }
            .play-btn {
              width: 220px;
              height: 50px;
              border-radius: 25px;
              font-size: 20px;
              line-height: 50px;
              text-align: center;
              background-color: @color-theme;
              cursor: pointer;
              .text {
                padding-left: 27px;
                background: url("./play.png") no-repeat 0 4px;
                background-size: 10px 14px;
              }
            }
          }
        }
      }
    }
  }
</style>