<template>
  <!-- 频道列表组件 -->
  <div class="channels-wrapper">
    <h1 class="list-title">{{title}}</h1>
    <ul class="channel-list">
      <li class="channel-item" v-for="channel in channelList" :key="channel.id">
        <div class="channel">
          <a :href="'#/channel/' + channel.id" class="link">
            <img :src="channel.pic_500" :alt="channel.name" class="cover">
          </a>
          <div class="disc-pic"></div>
          <div class="play-btn"></div>
          <a :href="'#/channel/' + channel.id" class="link">
            <div class="channel-info">
              <h2 class="channel-name">{{channel.name}}</h2>
              <ul class="status-info">
                <li class="status-item sound">
                  <i class="icon"></i>
                  <span class="count">{{channel.soundCount}}</span>
                </li>
                <li class="status-item follow">
                  <i class="icon"></i>
                  <span class="count">{{channel.followCount}}</span>
                </li>
                <li class="status-item share">
                  <i class="icon"></i>
                  <span class="count">{{channel.shareCount}}</span>
                </li>
              </ul>
            </div>
          </a>
        </div>
        <div class="sounds-wrapper">
          <h3 class="title">频道热门回声</h3>
          <ul class="sound-list">
            <li class="sound-item" v-for="sound in channel.soundList" :key="sound.id">
              <a :href="'#/sound/' + sound.id" class="sound-link">
                <img :src="sound.pic_100" :alt="sound.name" class="avatar">
                <div class="sound-info">
                  <h4 class="sound-name">{{sound.name}}</h4>
                  <p class="user">{{sound.userName}}</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
    <div class="pager-wrapper">
      <pager :pageSize="pageSize"
             :totalCount="totalCount"
             :maxBtnCount="maxBtnCount"
             @pageChange="_getChannelList"></pager>
    </div>
  </div>
</template>

<script type="text/ecmascript">
  import Pager from 'base/pager/pager'
  import {getChannelList} from 'api/channel'
  import {STATUS_OK} from 'api/config'
  import Channel from 'common/js/channel'

  export default {
    name: 'ChannelList',
    props: {
      // 列表标题
      title: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        // 频道列表
        channelList: [],
        // 当前页码
        currPage: 1,
        // 每页的大小
        pageSize: 5,
        // 当前类型频道的总个数
        totalCount: 0,
        // 分页器最多的数字按钮个数
        maxBtnCount: 10
      }
    },
    created () {
      this._getChannelList()
    },
    watch: {
      /* 当页面路由发生变化时，请求新的频道列表数据 */
      $route () {
        this._getChannelList()
      }
    },
    methods: {
      /* 获取频道列表组件的频道列表数据 */
      _getChannelList (page = 1) {
        getChannelList(this.getChannelType(), page).then(res => {
          console.log('res', res)
          if (res.status === STATUS_OK) {
            this.handleChannelList(res)
          }
        })
      },
      /* 处理频道列表数据 */
      handleChannelList (data) {
        this.totalCount = data.pages.totalCount
        // 先清空列表数据
        this.channelList.splice(0, this.channelList.length)
        data.channels.forEach((item) => {
          this.channelList.push(new Channel(item))
        })
        console.log('list', this.channelList)
      },
      /* 根据“this.$route.query”得出当前页面路径所属的频道类型 */
      getChannelType () {
        const typeObj = {}
        const query = this.$route.query
        if (query.order) {
          typeObj.type = 'order'
          typeObj.id = query.order
        } else if (query.tag) {
          typeObj.type = 'tag_id'
          typeObj.id = query.tag
        }
        return typeObj
      }
    },
    components: {
      Pager
    }
  }
</script>

<style lang="less" scoped rel="stylesheet/less">
  @import "~common/less/variable";

  .channels-wrapper {
    padding: 45px 19px 30px 29px;
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
          position: relative;
          float: left;
          width: 255px;
          height: 255px;
          margin-right: 14px;
          &:hover {
            .disc-pic {
              right: -192px;
            }
            .play-btn {
              right: -75px;
              opacity: 1;
            }
          }
          .cover {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 2;
            object-fit: cover;
            background: pink;
          }
          .disc-pic {
            position: absolute;
            top: 0;
            right: 0;
            width: 222px;
            height: 255px;
            z-index: 1;
            background: url("./disc-pic.png") no-repeat left center;
            transition: right .5s linear;
          }
          .play-btn {
            position: absolute;
            top: 50%;
            right: 0;
            width: 155px;
            height: 52px;
            margin-top: -26px;
            z-index: 3;
            background: url("./play.png") no-repeat left center;
            cursor: pointer;
            opacity: 0;
            transition: all .5s linear;
          }
          .link {
            text-decoration: none;
            .channel-info {
              position: absolute;
              bottom: 0;
              width: 100%;
              height: 80px;
              padding-left: 20px;
              box-sizing: border-box;
              z-index: 4;
              background: rgba(0, 0, 0, .15);
              .channel-name {
                margin-bottom: 2px;
                overflow: hidden;
                font-size: 20px;
                font-weight: normal;
                line-height: 30px;
                text-overflow: ellipsis;
                white-space: nowrap;
                color: #fff;
              }
              .status-info {
                font-size: 0;
                .status-item {
                  display: inline-block;
                  position: relative;
                  height: 22px;
                  margin-right: 7px;
                  padding-left: 20px;
                  font-size: 0;
                  line-height: 22px;
                  &:last-child {
                    margin-right: 0;
                  }
                  .icon {
                    position: absolute;
                    top: 50%;
                    left: 0;
                    width: 16px;
                    height: 16px;
                    margin-top: -8px;
                    background-repeat: no-repeat;
                    background-position: 0 0;
                    background-size: 100% auto;
                  }
                  .count {
                    font-size: @font-size-medium-x;
                    color: #fff;
                  }
                  &.sound {
                    .icon {
                      background-image: url("./sound-icon.png");
                    }
                  }
                  &.follow {
                    .icon {
                      background-image: url("./follow-icon.png");
                    }
                  }
                  &.share {
                    .icon {
                      background-image: url("./share-icon.png");
                    }
                  }
                }
              }
            }
          }
        }
        .sounds-wrapper {
          float: left;
          width: 465px;
          .title {
            margin-bottom: 10px;
            font-size: @font-size-medium-x;
            font-weight: normal;
            line-height: 26px;
            color: @color-text;
          }
          .sound-list {
            font-size: 0;
            .sound-item {
              float: left;
              margin: 0 10px 15px 0;
              background: @color-background-l;
              &:nth-child(2n) {
                margin-right: 0;
              }
              &:nth-child(5), &:nth-child(6) {
                margin-bottom: 0;
              }
              .sound-link {
                display: block;
                overflow: hidden;
                text-decoration: none;
                .avatar {
                  float: left;
                  width: 60px;
                  height: 60px;
                  margin-right: 10px;
                  background: pink;
                }
                .sound-info {
                  float: left;
                  width: 157px;
                  .sound-name, .user {
                    overflow: hidden;
                    font-size: @font-size-small-s;
                    font-weight: normal;
                    line-height: 18px;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    color: @color-text-d;
                  }
                  .sound-name {
                    margin: 6px 0 2px;
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
</style>