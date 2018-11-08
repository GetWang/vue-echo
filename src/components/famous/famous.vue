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
      <!-- 新入驻、echo 推荐、24小时热门 -->
      <ul class="user-recom-list">
        <li class="user-recom-item">
          <h2 class="title">新入驻</h2>
          <div class="recom-content">
            <ul class="user-list">
              <li class="user-item">
                <a href="" class="user-link">
                  <img src="" alt="" class="avatar">
                  <i class="v-icon">v</i>
                </a>
                <div class="user-info">
                  <a href="" class="user-name">JC陈泳彤JC陈泳彤JC陈泳彤</a>
                  <p class="desc">中国香港流行乐女歌手中国香港流行乐女歌手</p>
                </div>
              </li>
            </ul>
            <p class="view-more">
              <a href="" class="more-link">查看全部&nbsp;&gt;</a>
            </p>
          </div>
        </li>
      </ul>
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
            font-weight: normal;
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
      .user-recom-list {
        width: 695px;
        margin: 50px auto;
        font-size: 0;
        .user-recom-item {
          display: inline-block;
          width: 220px;
          margin-right: 18px;
          .title {
            height: 36px;
            margin-bottom: 25px;
            font-size: @font-size-large-x;
            font-weight: normal;
            line-height: 36px;
            text-align: left;
            color: @color-text;
          }
          .recom-content {
            padding: 15px 10px 15px 13px;
            background-color: @color-background-l;
            .user-list {
              .user-item {
                margin-bottom: 15px;
                overflow: hidden;
                .user-link {
                  position: relative;
                  float: left;
                  width: 40px;
                  height: 40px;
                  margin-right: 7px;
                  .avatar {
                    display: block;
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    background: red;
                  }
                  .v-icon {
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    width: 16px;
                    height: 16px;
                    border-radius: 50%;
                    font-size: @font-size-small;
                    font-style: normal;
                    line-height: 16px;
                    text-align: center;
                    color: #fff;
                    background: @color-theme;
                  }
                }
                .user-info {
                  float: left;
                  width: 145px;
                  .user-name {
                    display: block;
                    height: 18px;
                    margin-bottom: 4px;
                    overflow: hidden;
                    font-size: @font-size-small-s;
                    line-height: 18px;
                    text-decoration: none;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    color: @color-text-d;
                  }
                  .desc {
                    height: 16px;
                    overflow: hidden;
                    font-size: @font-size-small-s;
                    line-height: 16px;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    color: @color-text-l;
                  }
                }
              }
            }
            .view-more {
              text-align: right;
              .more-link {
                display: inline-block;
                font-size: @font-size-small-s;
                line-height: 18px;
                text-decoration: none;
                color: #bababa;
              }
            }
          }
        }
      }
    }
  }
</style>