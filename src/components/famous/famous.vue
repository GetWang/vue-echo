<template>
  <!-- 名人页面 -->
  <main class="famous">
    <div class="content">
      <!-- echo 名人 -->
      <famous-slide></famous-slide>
      <!-- echo 群星 -->
      <div class="top-user">
        <div class="top-header">
          <h2 class="title">echo 群星</h2>
          <a class="enter-top" href="">查看全部</a>
        </div>
        <ul class="top-list">
          <li class="top-item" v-for="top in topUserList" :key="top.id">
            <a :href="'#/user/' + top.id" class="user-link">
              <img :src="top.avatar_50" alt="" class="avatar">
              <i class="v-icon">v</i>
            </a>
            <a :href="'#/user/' + top.id" class="user-name">{{top.name}}</a>
            <p class="user-desc">{{top.desc}}</p>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script type="text/ecmascript-6">
  import FamousSlide from 'components/famous-slide/famous-slide'
  import {getTopUser} from 'api/user'
  import {STATUS_OK} from 'api/config'
  import User from 'common/js/user'

  export default {
    name: 'Famous',
    data () {
      return {
        // echo 群星列表
        topUserList: []
      }
    },
    created () {
      this._getTopUser(1, 12)
    },
    methods: {
      /* 获取 echo 群星数据 */
      _getTopUser (page, limit) {
        getTopUser(page, limit).then(res => {
          if (res.status === STATUS_OK) {
            this.handleTopUser(res)
          }
        })
      },
      /* 处理 echo 群星数据 */
      handleTopUser (data) {
        data.lists.forEach((item) => {
          this.topUserList.push(new User(item))
        })
      }
    },
    components: {
      FamousSlide
    }
  }
</script>

<style lang="less" scoped rel="stylesheet/less">
  @import "~common/less/variable";

  .famous {
    padding: 15px 0 40px;
    background-color: @color-background;
    .content {
      width: 755px;
      margin: 0 auto;
      padding-top: 30px;
      overflow: hidden;
      background-color: #fff;
      .top-user {
        width: 695px;
        margin: 50px auto;
        .top-header {
          position: relative;
          margin-bottom: 25px;
          .title {
            height: 36px;
            font-size: @font-size-large-x;
            line-height: 36px;
            text-align: left;
            color: @color-text;
          }
          .enter-top {
            position: absolute;
            right: 0;
            bottom: 0;
            font-size: @font-size-medium;
            line-height: 36px;
            text-decoration: none;
            color: @color-theme;
          }
        }
        .top-list {
          overflow: hidden;
          .top-item {
            float: left;
            width: 96px;
            margin: 0 9px 11px;
            text-align: center;
            .user-link {
              display: inline-block;
              position: relative;
              text-decoration: none;
              .avatar {
                display: block;
                width: 50px;
                height: 50px;
                border-radius: 50%;
              }
              .v-icon {
                position: absolute;
                bottom: 0;
                right: 0;
                width: 16px;
                height: 16px;
                border-radius: 50%;
                font-size: @font-size-small;
                line-height: 16px;
                color: #fff;
                background-color: @color-theme;
              }
            }
            .user-name {
              display: block;
              margin: 8px 0 4px;
              overflow: hidden;
              font-size: @font-size-small;
              line-height: 18px;
              text-decoration: none;
              text-overflow: ellipsis;
              white-space: nowrap;
              color: @color-text-d;
            }
            .user-desc {
              height: 36px;
              overflow: hidden;
              font-size: @font-size-small-s;
              line-height: 18px;
              color: @color-text-l;
            }
          }
        }
      }
    }
  }
</style>