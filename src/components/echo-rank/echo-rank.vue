<template>
  <div class="echo-rank">
    <div class="daily-rank">
      <div class="rank-header">
        <div class="daily-top1">
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
      <ul class="rank-list">
        <li class="rank-item">
          <a href="" class="sound-link">
            <img src="" alt="" class="cover">
            <div class="sound-info">
              <span class="rank-num">2</span>
              <div class="intro">
                <h2 class="sound-name">分秒必争///陪我长大钢琴版分秒必争///陪我长大钢琴版分秒必争///陪我长大钢琴版分秒必争///陪我长大钢琴版分秒必争///陪我长大钢琴版</h2>
                <p class="user-name"><a href="" class="link">钢琴师MT1990钢琴师MT1990钢琴师MT1990钢琴师MT1990</a></p>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <ul class="other-rank">
      <li class="rank">
        <div class="rank-header">
          <h1 class="title">热门回声周榜</h1>
          <div class="play-btn">
            <i class="play-icon"></i>
            <span class="text">播放全部</span>
          </div>
        </div>
        <ul class="rank-list">
          <li class="rank-item">
            <a href="" class="sound-link">
              <img src="" alt="" class="cover">
              <div class="sound-info">
                <span class="rank-num">1</span>
                <div class="intro">
                  <h2 class="sound-name">分秒必争///陪我长大钢琴版分秒必争///陪我长大钢琴版分秒必争///陪我长大钢琴版分秒必争///陪我长大钢琴版分秒必争///陪我长大钢琴版</h2>
                  <p class="user-name"><a href="" class="link">钢琴师MT1990钢琴师MT1990钢琴师MT1990钢琴师MT1990</a></p>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </li>
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
    padding-bottom: 50px;
    .daily-rank {
      margin-bottom: 50px;
      .rank-header {
        position: relative;
        height: 300px;
        margin-bottom: 115px;
        background: pink;
        .daily-top1 {
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
      .rank-list {
        width: 1140px;
        margin: 0 auto;
        overflow: hidden;
        .rank-item {
          float: left;
          width: 245px;
          margin: 0 20px 30px;
          .sound-link {
            display: block;
            text-decoration: none;
            .cover {
              display: block;
              width: 245px;
              height: 245px;
              background: red;
            }
            .sound-info {
              padding-top: 5px;
              overflow: hidden;
              .rank-num {
                float: left;
                width: 25px;
                margin-right: 20px;
                font-size: 40px;
                line-height: 44px;
                color: @color-rank-hot;
              }
              .intro {
                float: left;
                width: 200px;
                height: 68px;
                .sound-name {
                  max-height: 46px;
                  overflow: hidden;
                  font-size: @font-size-medium;
                  font-weight: normal;
                  line-height: 22px;
                  color: @color-text-dd;
                }
                .user-name {
                  height: 22px;
                  overflow: hidden;
                  font-size: @font-size-small;
                  line-height: 22px;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  .link {
                    text-decoration: none;
                    color: @color-text-ll;
                  }
                }
              }
            }
          }
        }
      }
    }
    .other-rank {
      .rank {
        width: 1140px;
        margin: 0 auto 50px;
        &:last-child {
          margin-bottom: 0;
        }
        .rank-header {
          margin-bottom: 25px;
          padding: 0 20px;
          overflow: hidden;
          .title {
            float: left;
            height: 36px;
            margin-right: 25px;
            font-size: @font-size-large-x;
            font-weight: normal;
            line-height: 36px;
            color: @color-text;
          }
          .play-btn {
            position: relative;
            float: left;
            width: 100px;
            height: 28px;
            margin-top: 4px;
            padding-left: 34px;
            border-radius: 14px;
            box-sizing: border-box;
            line-height: 28px;
            background-color: @color-theme;
            cursor: pointer;
            .play-icon {
              position: absolute;
              top: 4px;
              left: 8px;
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
        .rank-list {
          overflow: hidden;
          .rank-item {
            float: left;
            width: 245px;
            margin: 0 20px 30px;
            .sound-link {
              display: block;
              text-decoration: none;
              .cover {
                display: block;
                width: 245px;
                height: 245px;
                background: red;
              }
              .sound-info {
                padding-top: 5px;
                overflow: hidden;
                .rank-num {
                  float: left;
                  width: 25px;
                  margin-right: 20px;
                  font-size: 40px;
                  line-height: 44px;
                  color: @color-rank-hot;
                }
                .intro {
                  float: left;
                  width: 200px;
                  height: 68px;
                  .sound-name {
                    max-height: 46px;
                    overflow: hidden;
                    font-size: @font-size-medium;
                    font-weight: normal;
                    line-height: 22px;
                    color: @color-text-dd;
                  }
                  .user-name {
                    height: 22px;
                    overflow: hidden;
                    font-size: @font-size-small;
                    line-height: 22px;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    .link {
                      text-decoration: none;
                      color: @color-text-ll;
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