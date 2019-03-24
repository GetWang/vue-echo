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
            <h1 class="title">{{channel.name}}</h1>
            <ul class="status-list">
              <li class="status-item sound">{{normalizeNum(channel.soundCount)}}</li>
              <li class="status-item follow">{{normalizeNum(channel.followCount)}}</li>
              <li class="status-item share">{{normalizeNum(channel.shareCount)}}</li>
            </ul>
          </div>
          <div class="channel">
            <img :src="channel.pic" :alt="channel.name" class="cover">
            <div class="channel-info">
              <h2 class="intro-title">频道简介</h2>
              <p class="intro">{{channel.info}}</p>
              <div class="play-btn" @click="playAllSounds(channel.soundList)">
                <i class="play-icon"></i>
                <span class="text">一键播放</span>
              </div>
            </div>
          </div>
        </div>
        <div class="channel-main">
          <div class="type-tabs">
            <span class="tab hot"
                  :class="{current: this.channelOrder === 'hot'}"
                  @click="changeOrder('hot')">最热</span>
            <span class="tab new"
                  :class="{current: this.channelOrder === 'new'}"
                  @click="changeOrder('new')">最新</span>
          </div>
          <ul class="sound-list">
            <li class="sound-item" v-for="sound in channel.soundList" :key="sound.id">
              <a :href="'#/sound/' + sound.id" class="sound-link">
                <div class="top">
                  <img :src="sound.pic_200" :alt="sound.name" class="cover">
                  <div class="duration">{{formatTime(sound.duration)}}</div>
                </div>
                <div class="sound-info">
                  <h3 class="sound-name">{{sound.name}}</h3>
                  <h4 class="channel"><a :href="'#/channel/' + sound.channelId" class="link">{{channel.name}}</a>频道</h4>
                  <ul class="sound-status">
                    <li class="status status-share">
                      <i class="icon"></i>
                      <span class="count">{{normalizeNum(sound.shareCount)}}</span>
                    </li>
                    <li class="status status-like">
                      <i class="icon"></i>
                      <span class="count">{{normalizeNum(sound.likeCount)}}</span>
                    </li>
                    <li class="status status-comment">
                      <i class="icon"></i>
                      <span class="count">{{normalizeNum(sound.commentCount)}}</span>
                    </li>
                  </ul>
                </div>
              </a>
            </li>
          </ul>
          <div class="pager-wrapper">
            <pager :pageSize="pageSize"
                   :totalCount="totalCount"
                   :maxBtnCount="maxBtnCount"
                   @pageChange="changePage"></pager>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script type="text/ecmascript-6">
  import Pager from 'base/pager/pager'
  import {getChannelInfo} from 'api/channel'
  import {STATUS_OK} from 'api/config'
  import Channel from 'common/js/channel'
  import {padNum} from 'common/js/util'
  import {mapActions} from 'vuex'

  export default {
    name: 'ChannelDetail',
    data () {
      return {
        // 频道 sound 类型
        channelOrder: 'hot',
        // 当前页码
        currPage: 1,
        // 频道详情
        channel: {
          name: '',
          info: '',
          pic: '',
          soundCount: 0,
          followCount: 0,
          shareCount: 0,
          soundList: []
        },
        // 每页的大小
        pageSize: 1,
        // 总的 sound 数量
        totalCount: 0,
        // 分页器最多的数字按钮数量
        maxBtnCount: 10
      }
    },
    created () {
      this._getChannelInfo(this.$route.params.id, this.channelOrder, this.currPage)
    },
    methods: {
      /* 获取频道详情信息数据 */
      _getChannelInfo (id, order, page) {
        getChannelInfo(id, order, page).then(res => {
          if (res.status === STATUS_OK) {
            this.handleChannelInfo(res)
          }
        }).catch(err => {
          console.log('api/getChannelInfo error', err)
        })
      },
      /* 处理频道详情信息数据 */
      handleChannelInfo (data) {
        this.pageSize = data.pages._pageSize
        this.totalCount = data.pages.totalCount
        this.channel = new Channel(Object.assign({sound: data.sounds}, data.channel))
      },
      /* 更改频道的 order */
      changeOrder (order) {
        if (order === this.channelOrder) {
          return
        }
        this.channelOrder = order
        this.currPage = 1
        this._getChannelInfo(this.$route.params.id, this.channelOrder, this.currPage)
      },
      /* 切换 sound 列表分页内容 */
      changePage (page) {
        this.currPage = page
        this._getChannelInfo(this.$route.params.id, this.channelOrder, this.currPage)
      },
      /* 格式化时间 */
      formatTime (second) {
        let minute = Math.floor(second / 60)
        let restSecond = second % 60
        return padNum(minute) + ':' + padNum(restSecond)
      },
      /* 将大于或等于 10000 的数字转成“xxx 万”的形式 */
      normalizeNum (num) {
        if (+num >= 10000) {
          return (+num / 10000).toFixed(1) + '万'
        }
        return num
      },
      ...mapActions(['playAllSounds'])
    },
    components: {
      Pager
    }
  }
</script>

<style lang="less" scoped rel="stylesheet/less">
  @import "~common/less/variable";

  .channel-detail {
    padding: 15px 0 60px;
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
              object-fit: cover;
            }
            .channel-info {
              float: left;
              width: 620px;
              .intro-title {
                margin-bottom: 3px;
                font-size: @font-size-medium;
                font-weight: normal;
                line-height: 22px;
                color: #9b9b9b;
              }
              .intro {
                height: 60px;
                margin-bottom: 18px;
                overflow: hidden;
                font-size: @font-size-small-s;
                line-height: 18px;
                color: @color-text;
              }
              .play-btn {
                position: relative;
                display: inline-block;
                width: 96px;
                height: 32px;
                padding-left: 32px;
                border: 1px solid #d9d9d9;
                border-radius: 50px;
                box-sizing: border-box;
                line-height: 30px;
                cursor: pointer;
                .play-icon {
                  position: absolute;
                  top: 6px;
                  left: 6px;
                  width: 19px;
                  height: 19px;
                  background: url("~common/image/play.png") no-repeat 0 0;
                  background-size: 100% 100%;
                }
                .text {
                  font-size: @font-size-small-s;
                  color: @color-text;
                }
                &:hover {
                  border-color: @color-theme;
                }
              }
            }
          }
        }
        .channel-main {
          padding-bottom: 20px;
          .type-tabs {
            border-bottom: 1px solid #e8e8e8;
            .tab {
              display: inline-block;
              margin: 0 0 -2px 40px;
              font-size: @font-size-medium-x;
              line-height: 26px;
              color: @color-text-ll;
              cursor: pointer;
              &.current {
                border-bottom: 4px solid @color-theme;
              }
            }
          }
          .sound-list {
            width: 964px;
            margin: 0 auto;
            padding: 50px 0 40px;
            overflow: hidden;
            .sound-item {
              float: left;
              width: 160px;
              margin: 0 16px 25px;
              background-color: @color-background-l;
              .sound-link {
                display: block;
                text-decoration: none;
                .top {
                  position: relative;
                  .cover {
                    display: block;
                    width: 100%;
                    height: 160px;
                    object-fit: cover;
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
          .pager-wrapper {
            text-align: center;
          }
        }
      }
    }
  }
</style>
