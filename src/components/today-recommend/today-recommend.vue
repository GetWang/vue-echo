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
      <li class="recom-item" v-for="recom in recomList" :key="recom.id">
        <a :href="'#/sound/' + recom.id" class="sound-link">
          <div class="top">
            <img :src="recom.pic_200" :alt="recom.name" class="cover">
            <div class="duration">{{formatTime(recom.duration)}}</div>
          </div>
          <div class="sound-info">
            <h3 class="sound-name">{{recom.name}}</h3>
            <h4 class="channel"><a :href="'#/channel/' + recom.channelId" class="link">{{recom.channelName}}</a>频道</h4>
            <ul class="sound-status">
              <li class="status status-share">
                <i class="icon"></i>
                <span class="count">{{recom.shareCount}}</span>
              </li>
              <li class="status status-like">
                <i class="icon"></i>
                <span class="count">{{recom.likeCount}}</span>
              </li>
              <li class="status status-comment">
                <i class="icon"></i>
                <span class="count">{{recom.commentCount}}</span>
              </li>
            </ul>
          </div>
        </a>
      </li>
    </ul>
    <div class="load-more" @click="loadMore">
      <span class="to-load" v-if="isLoading === false">加载更多</span>
      <span class="loading" v-else>加载ing</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getTodayRecom} from 'api/home'
  import {STATUS_OK} from 'api/config'
  import Sound from 'common/js/sound'

  export default {
    name: 'TodayRecommend',
    data () {
      return {
        // 今日推荐列表
        recomList: [],
        // 当前页码
        currPage: 1,
        // 加载中状态标志位
        isLoading: false
      }
    },
    created () {
      this._getTodayRecom()
    },
    methods: {
      /* 获取首页今日推荐数据 */
      _getTodayRecom (page = 1) {
        getTodayRecom(page).then(res => {
          if (res.status === STATUS_OK) {
            this.handleToayRecom(res)
          }
        }).catch(err => {
          console.log('api/getTodayRecom error', err)
        })
      },
      /* 处理首页今日推荐数据 */
      handleToayRecom (data) {
        data.list.forEach((item) => {
          this.recomList.push(new Sound(item.sound))
        })
        this.isLoading = false
      },
      /* 加载更多 */
      loadMore () {
        this.isLoading = true
        this.currPage++
        this._getTodayRecom(this.currPage)
      },
      /* 格式化时间 */
      formatTime (second) {
        let minute = Math.floor(second / 60)
        let restSecond = second % 60
        return this.padNum(minute, 2) + ':' + this.padNum(restSecond, 2)
      },
      /* 为位数不足的数值添加前导零 */
      padNum (num, bit) {
        let str = String(num)
        while (str.length < bit) {
          str = '0' + str
        }
        return str
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
            }
            .duration {
              position: absolute;
              left: 8px;
              bottom: 5px;
              height: 14px;
              padding-left: 19px;
              font-size: @font-size-small-s;
              font-family: "Microsoft YaHei", sans-serif;
              line-height: 14px;
              color: #fff;
              background: url("~common/image/play-mini.png") no-repeat 0 0;
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
              font-weight: normal;
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
                  background-image: url("~common/image/sound-status-sprite.png");
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