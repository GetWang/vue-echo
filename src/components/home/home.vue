<template>
  <!-- 首页 -->
  <main class="home">
    <section class="content-left">
      <sound-scene></sound-scene>
      <!-- 回声榜 -->
      <ul class="echo-rank">
        <li class="rank">
          <div class="rank-header">
            <h2 class="rank-name">热门回声榜</h2>
            <span class="enter-rank">进入榜单</span>
          </div>
          <div class="rank-main">
            <a href="" class="rank-type"></a>
            <div class="rank-list">
              <div class="rank-item top1">
                <img src="" alt="" class="cover">
                <div class="sound-info">
                  <h3 class="rank1">TOP 1</h3>
                  <p class="sound-name">怀旧金曲 女声版「难念的经」带你领略不一样的侠女柔情</p>
                  <div class="user-info">
                    <img src="" alt="" class="avatar">
                    <span class="username">鹏鹏</span>
                  </div>
                </div>
              </div>
              <ul class="rank-top2and3">
                <li class="rank-item top2">
                  <img src="" alt="" class="cover">
                  <div class="sound-info">
                    <div class="sound-name"><i class="rank-num">2</i>怀旧金曲 女声版「难念的经」带你领略不一样的侠女柔情</div>
                    <p class="username">酱紫</p>
                </div>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </section>
    <section class="content-right">right</section>
  </main>
</template>

<script type="text/ecmascript-6">
  import SoundScene from 'components/sound-scene/sound-scene'
  import { getRankChoose } from 'api/home'
  import { STATUS_OK } from 'api/config'

  export default {
    name: 'Home',
    created () {
      this._getRankChoose()
    },
    methods: {
      _getRankChoose () {
        getRankChoose().then(res => {
          if (res.data.status === STATUS_OK) {
            this.handleRankChoose(res.data)
          }
        })
      },
      handleRankChoose (data) {
        console.log('res', data)
      }
    },
    components: {
      SoundScene
    }
  }
</script>

<style lang="less" scoped rel="stylesheet/less">
  @import "~common/less/variable";

  .home {
    width: 1000px;
    margin: 15px auto;
    overflow: hidden;
    .content-left {
      float: left;
      background-color: #fff;
      .echo-rank {
        .rank {
          margin: 35px 30px;
          .rank-header {
            position: relative;
            margin-bottom: 19px;
            .rank-name {
              font-size: @font-size-large-x;
              line-height: 28px;
              text-align: left;
              color: @color-text;
            }
            .enter-rank {
              position: absolute;
              right: 0;
              bottom: 0;
              font-size: @font-size-medium;
              line-height: 20px;
              color: @color-theme;
            }
          }
          .rank-main {
            overflow: hidden;
            .rank-type {
              float: left;
              width: 90px;
              height: 150px;
              margin-right: 5px;
              background-repeat: no-repeat;
              background-position: 0 0;
              background-size: 100% 100%;
              background-image: url("./sound-hot-rank.png");
            }
            .rank-list {
              float: left;
              overflow: hidden;
              .rank-item {
                overflow: hidden;
                .cover {
                  display: block;
                  float: left;
                }
                .sound-info {
                  float: right;
                }
                &.top1 {
                  float: left;
                  margin-right: 5px;
                  .cover {
                    width: 150px;
                    height: 150px;
                    background: pink;
                  }
                  .sound-info {
                    width: 182px;
                    height: 150px;
                    margin-left: -10px;
                    padding: 17px 20px 10px;
                    box-sizing: border-box;
                    background: url("./top1-bg.png") no-repeat 0 0;
                    background-size: 100% 100%;
                    .rank1 {
                      margin-bottom: 10px;
                      font-size: @font-size-medium-x;
                      color: @color-rank-hot;
                    }
                    .sound-name {
                      height: 40px;
                      margin-bottom: 28px;
                      overflow: hidden;
                      font-size: @font-size-small;
                      line-height: 20px;
                      color: @color-text;
                    }
                    .user-info {
                      position: relative;
                      padding-left: 22px;
                      .avatar {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 22px;
                        height: 22px;
                        background: green;
                      }
                      .username {
                        display: inline-block;
                        height: 22px;
                        margin-left: 8px;
                        font-size: @font-size-small-s;
                        line-height: 22px;
                        color: @color-text-l;
                      }
                    }
                  }
                }
                &.top2, &.top3 {
                  margin-bottom: 2px;
                  .cover {
                    width: 73px;
                    height: 73px;
                    background: blue;
                  }
                  .sound-info {
                    width: 199px;
                    height:73px;
                    padding: 8px 30px 0 10px;
                    border: 1px solid #f4f4f4;
                    border-left: none;
                    box-sizing: border-box;
                    background-color: #fff;
                    .sound-name {
                      height: 36px;
                      margin-bottom: 10px;
                      overflow: hidden;
                      font-size: @font-size-small;
                      line-height: 18px;
                      color: @color-text;
                      .rank-num {
                        margin-right: 8px;
                        padding: 1px 5px;
                        font-size: @font-size-small-s;
                        font-style: normal;
                        line-height: 16px;
                        color: #fff;
                        background-color: @color-rank-hot;
                      }
                    }
                    .username {
                      font-size: @font-size-small-s;
                      line-height: 14px;
                      color: @color-text-l;
                    }
                  }
                }
              }
              .rank-top2and3 {
                float: left;
              }
            }
          }
        }
      }
    }
    .content-right {
      float: right;
    }
  }
</style>