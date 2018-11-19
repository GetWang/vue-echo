<template>
  <!-- 频道页 -->
  <main class="channel">
    <div class="content">
      <div class="channel-navs">
        <ul class="order-nav">
          <li class="order" v-for="order in channelOrders" :key="order.id">
            <a :href="order.link" class="link">
              <i class="curr-icon" v-show="order.link === currHash"></i>
              {{order.name}}
            </a>
          </li>
        </ul>
        <div class="tag-nav">
          <h2 class="tag-title">频道分类</h2>
          <ul class="tag-list">
            <li class="tag-item" v-for="tag in tagList" :key="tag.id">
              <a :href="tag.link" class="link">
                <i class="curr-icon" v-show="tag.link === currHash"></i>
                {{tag.name}}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="list-wrapper">right</div>
    </div>
  </main>
</template>

<script type="text/ecmascript-6">
  import {getChannelTags} from 'api/channel'
  import {STATUS_OK} from 'api/config'

  export default {
    name: 'Channel',
    data () {
      return {
        // 频道标签列表
        tagList: [],
        // 当前页面的 hash 值
        currHash: ''
      }
    },
    created () {
      this._getChannelTags()
      // 初始化“this.currHash”
      this.currHash = '#' + this.$route.fullPath
      // 左侧导航的上部分的频道 order
      this.channelOrders = [{
        id: 'home',
        name: '频道首页',
        link: '#/channel'
      }, {
        id: 'latest',
        name: '最新',
        link: '#/channel?order=latest'
      }, {
        id: 'hot',
        name: '最热',
        link: '#/channel?order=hot'
      }]
    },
    watch: {
      /* 监听页面路由的变化，在发生变化时修改“this.currHash” */
      $route (to, from) {
        this.currHash = '#' + to.fullPath
      }
    },
    methods: {
      /* 获取频道标签数据 */
      _getChannelTags () {
        getChannelTags().then(res => {
          if (res.status === STATUS_OK) {
            this.handleChannelTags(res)
          }
        }).catch(err => {
          console.log('api/getChannelTags error', err)
        })
      },
      /* 处理频道标签数据 */
      handleChannelTags (data) {
        data.categories.forEach((item) => {
          this.tagList.push({
            id: item.id,
            name: item.name,
            link: '#/channel?tag=' + item.id
          })
        })
      }
    }
  }
</script>

<style lang="less" scoped rel="stylesheet/less">
  @import "~common/less/variable";

  .channel {
    padding: 15px 0 40px;
    background: @color-background;
    .content {
      width: 1000px;
      margin: 0 auto;
      overflow: hidden;
      .channel-navs {
        float: left;
        width: 200px;
        margin-right: 15px;
        .order-nav {
          margin-bottom: 50px;
          border-radius: 4px;
          background: #fff;
          .order {
            .link {
              display: block;
              position: relative;
              height: 60px;
              border-bottom: 1px solid @color-background-l;
              box-sizing: border-box;
              font-size: @font-size-medium;
              line-height: 60px;
              text-align: center;
              text-decoration: none;
              color: @color-text;
              .curr-icon {
                position: absolute;
                top: 50%;
                left: 20px;
                width: 24px;
                height: 24px;
                margin-top: -12px;
                background: url("./channel-sprite.png") no-repeat 0 0;
              }
            }
          }
        }
        .tag-nav {
          .tag-title {
            margin-bottom: 22px;
            font-size: @font-size-medium-x;
            font-weight: normal;
            line-height: 22px;
            color: @color-text;
          }
          .tag-list {
            background: #fff;
            .tag-item {
              .link {
                display: block;
                position: relative;
                height: 60px;
                border-bottom: 1px solid @color-background-l;
                box-sizing: border-box;
                font-size: @font-size-medium;
                line-height: 60px;
                text-align: center;
                text-decoration: none;
                color: @color-text;
                .curr-icon {
                  position: absolute;
                  top: 50%;
                  left: 20px;
                  width: 24px;
                  height: 24px;
                  margin-top: -12px;
                  background: url("./channel-sprite.png") no-repeat 0 0;
                }
              }
            }
          }
        }
      }
      .list-wrapper {
        float: left;
        background: #fff;
      }
    }
  }
</style>