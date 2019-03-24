<template>
  <!-- 回声榜组件 -->
  <div class="echo-rank" :class="[rankType]"
       v-if="dailyRank.title && otherRankList.length > 0">
    <div class="daily-rank">
      <div class="rank-header">
        <div class="daily-top1">
          <div class="top1-pic">
            <a class="top1-link" :href="linkPrefix + dailyRank.top1.id">
              <img :src="dailyRank.top1.pic_200 || dailyRank.top1.cover_url_260" :alt="dailyRank.top1.name" class="cover">
            </a>
          </div>
          <div class="sound-info">
            <h1 class="title">{{dailyRank.title}}</h1>
            <h2 class="sound-name">
              <a :href="linkPrefix + dailyRank.top1.id" class="link">{{dailyRank.top1.name}}</a>
            </h2>
            <p class="user-info">
              <a :href="'#/user/' + dailyRank.top1.userId" class="link">
                <img :src="dailyRank.top1.avatar_50" :alt="dailyRank.top1.userName" class="avatar">
                <span class="user-name">{{dailyRank.top1.userName}}</span>
              </a>
            </p>
            <div class="play-btn" v-if="rankType !== 'mv'"
                 @click="playAllSounds([].concat(dailyRank.top1, dailyRank.list))">
              <span class="text">一键播放</span>
            </div>
          </div>
        </div>
      </div>
      <ul class="rank-list">
        <li class="rank-item" v-for="(item, index) in dailyRank.list" :key="item.id">
          <a :href="linkPrefix + item.id" class="sound-link">
            <img :src="item.pic_200 || item.cover_url_260" :alt="item.name" class="cover">
            <div class="sound-info">
              <span class="rank-num">{{index + 2}}</span>
              <div class="intro">
                <h2 class="sound-name">{{item.name}}</h2>
                <p class="user-name">
                  <a :href="'#/user/' + item.userId" class="link">{{item.userName}}</a>
                </p>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <ul class="other-rank">
      <li class="rank" v-for="(rank, i) in otherRankList" :key="'rank-' + i">
        <div class="rank-header">
          <h1 class="title">{{rank.title}}</h1>
          <div class="play-btn" v-if="rankType !== 'mv'"
               @click="playAllSounds(rank.list)">
            <i class="play-icon"></i>
            <span class="text">播放全部</span>
          </div>
        </div>
        <ul class="rank-list">
          <li class="rank-item" v-for="(item, index) in rank.list" :key="item.id">
            <a :href="linkPrefix + item.id" class="sound-link">
              <img :src="item.pic_200 || item.cover_url_260" :alt="item.name" class="cover">
              <div class="sound-info">
                <span class="rank-num">{{index + 1}}</span>
                <div class="intro">
                  <h2 class="sound-name">{{item.name}}</h2>
                  <p class="user-name">
                    <a :href="'#/user/' + item.userId" class="link">{{item.userName}}</a>
                  </p>
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
  import {mapActions} from 'vuex'

  export default {
    name: 'EchoRank',
    props: {
      // 日榜数据
      dailyRank: {
        type: Object,
        default: () => ({})
      },
      // 周榜、月榜数据
      otherRankList: {
        type: Array,
        default: () => []
      },
      // 回声榜类型
      rankType: {
        type: String,
        default: ''
      }
    },
    created () {
      // 视频回声榜类型常量
      this.mvType = 'mv'
    },
    computed: {
      // 榜单中每个 sound 或 mv 的链接前缀
      linkPrefix () {
        return this.rankType === this.mvType ? '#/mv/' : '#/sound/'
      }
    },
    methods: {
      ...mapActions(['playAllSounds'])
    }
  }
</script>

<style lang="less" scoped rel="stylesheet/less">
  @import "~common/less/variable";

  .echo-rank {
    padding-bottom: 50px;
    .daily-rank {
      margin-bottom: 50px;
      .rank-header {
        height: 300px;
        margin-bottom: 115px;
        padding-top: 88px;
        box-sizing: border-box;
        .daily-top1 {
          // 解决浏览器视口宽度减小到某一值时，右边浮动的 sound 信息部分被挤到下一行显示的 bug
          width: 985px;
          margin: 0 auto;
          overflow: hidden;
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
                // 使图片正常（不变形，即拉伸或压缩）显示
                object-fit: cover;
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
              // 使图片正常（不变形，即拉伸或压缩）显示
              object-fit: cover;
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
                // 使图片正常（不变形，即拉伸或压缩）显示
                object-fit: cover;
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
    &.hot {
      .daily-rank {
        .rank-header {
          background-color: @color-rank-hot;
        }
      }
    }
    &.origin {
      .daily-rank {
        .rank-header {
          background-color: @color-rank-origin;
        }
        .rank-list {
          .rank-item {
            .sound-link {
              .sound-info {
                .rank-num {
                  color: @color-rank-origin;
                }
              }
            }
          }
        }
      }
      .other-rank {
        .rank {
          .rank-list {
            .rank-item {
              .sound-link {
                .sound-info {
                  .rank-num {
                    color: @color-rank-origin;
                  }
                }
              }
            }
          }
        }
      }
    }
    &.mv {
      .daily-rank {
        .rank-header {
          padding-top: 120px;
          background-color: @color-rank-mv;
          .daily-top1 {
            width: 1080px;
            .top1-pic {
              width: 553px;
              height: 208px;
              margin-right: 0;
              background: url("./top1-mv-pic.png") no-repeat center bottom;
              .top1-link {
                width: 380px;
                height: 200px;
                margin-left: 91px;
              }
            }
            .sound-info {
              margin-left: -30px;
            }
          }
        }
        .rank-list {
          .rank-item {
            .sound-link {
              .cover {
                height: 129px;
              }
              .sound-info {
                .rank-num {
                  color: @color-rank-mv;
                }
              }
            }
          }
        }
      }
      .other-rank {
        .rank {
          .rank-list {
            .rank-item {
              .sound-link {
                .cover {
                  height: 129px;
                }
                .sound-info {
                  .rank-num {
                    color: @color-rank-mv;
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