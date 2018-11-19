<template>
  <!-- 频道页 -->
  <main class="channel">
    <div class="content">
      <div class="channel-navs">
        <ul class="order-nav">
          <li class="order">
            <a href="#/channel" class="link">
              <i class="curr-icon"></i>
              频道首页
            </a>
          </li>
          <li class="order">
            <a href="#/channel?order=latest" class="link">
              <i class="curr-icon"></i>
              最新
            </a>
          </li>
          <li class="order">
            <a href="#/channel?order=hot" class="link">
              <i class="curr-icon"></i>
              最热
            </a>
          </li>
        </ul>
        <div class="tag-nav">
          <h2 class="tag-title">频道分类</h2>
          <ul class="tag-list">
            <li class="tag-item">
              <a href="" class="link">
                <i class="curr-icon"></i>
                二次元
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
    created () {
      this._getChannelTags()
    },
    methods: {
      /* 获取频道标签数据 */
      _getChannelTags () {
        getChannelTags().then(res => {
          console.log('res', res)
          if (res.status === STATUS_OK) {
            this.handleChannelTags(res)
          }
        }).catch(err => {
          console.log('api/getChannelTags error', err)
        })
      },
      /* 处理频道标签数据 */
      handleChannelTags (data) {
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