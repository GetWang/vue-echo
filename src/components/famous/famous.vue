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
          <a class="enter-top" href="#/famous/top-user">查看全部</a>
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
        <li class="user-recom-item" v-for="(item, i) in recomFamousList" :key="'type-' + i">
          <h2 class="title">{{item.title}}</h2>
          <div class="recom-content">
            <ul class="user-list">
              <li class="user-item" v-for="user in item.list" :key="user.id">
                <a :href="'#/user/' + user.id" class="user-link">
                  <img :src="user.avatar_50" :alt="user.name" class="avatar">
                  <i class="v-icon">v</i>
                </a>
                <div class="user-info">
                  <a :href="'#/user/' + user.id" class="user-name">{{user.name}}</a>
                  <p class="desc">{{user.desc}}</p>
                </div>
              </li>
            </ul>
            <p class="view-more">
              <a :href="'#/famous/' + item.name" class="more-link">查看全部&nbsp;&gt;</a>
            </p>
          </div>
        </li>
      </ul>
      <!-- 名人分类 -->
      <famous-kinds></famous-kinds>
    </div>
  </main>
</template>

<script type="text/ecmascript-6">
  import FamousSlide from 'components/famous-slide/famous-slide'
  import FamousKinds from 'components/famous-kinds/famous-kinds'
  import {getTopUser, getLatestUser, getRecomUser, getDailyHotUser} from 'api/user'
  import {STATUS_OK} from 'api/config'
  import User from 'common/js/user'

  // 新入驻、echo 推荐、24小时热门名人用户类型
  const famousType = ['latest-user', 'recommend-user', 'daily-hot-user']
  // 新入驻、echo 推荐、24小时热门名人用户标题
  const famousTypeTitle = ['新入驻', 'echo 推荐', '24小时热门']

  export default {
    name: 'Famous',
    data () {
      return {
        // echo 群星列表
        topUserList: [],
        // 新入驻、echo 推荐、24小时热门名人用户列表
        recomFamousList: []
      }
    },
    created () {
      this._getTopUser(1, 12)
      this._getLatestUser(1, 5)
      this._getRecomUser(1, 5)
      this._getDailyHotUser(1, 5)
    },
    methods: {
      /* 获取 echo 群星数据 */
      _getTopUser (page, limit) {
        getTopUser(page, limit).then(res => {
          if (res.status === STATUS_OK) {
            this.handleTopUser(res)
          }
        }).catch(err => {
          console.log('api/getTopUser error', err)
        })
      },
      /* 获取新入驻名人用户的数据 */
      _getLatestUser (page, limit) {
        getLatestUser(page, limit).then(res => {
          if (res.status === STATUS_OK) {
            this.handleRecomFamous(res, famousType[0])
          }
        }).catch(err => {
          console.log('api/getLatestUser error', err)
        })
      },
      /* 获取 echo 推荐名人用户的数据 */
      _getRecomUser (page, limit) {
        getRecomUser(page, limit).then(res => {
          if (res.status === STATUS_OK) {
            this.handleRecomFamous(res, famousType[1])
          }
        }).catch(err => {
          console.log('api/getRecomUser error', err)
        })
      },
      /* 获取24小时热门名人用户的数据 */
      _getDailyHotUser (page, limit) {
        getDailyHotUser(page, limit).then(res => {
          if (res.status === STATUS_OK) {
            this.handleRecomFamous(res, famousType[2])
          }
        }).catch(err => {
          console.log('api/getDailyHotUser error', err)
        })
      },
      /* 处理 echo 群星数据 */
      handleTopUser (data) {
        data.lists.forEach((item) => {
          this.topUserList.push(new User(item))
        })
      },
      /* 处理新入驻、echo 推荐、24小时热门名人用户数据 */
      handleRecomFamous (data, type) {
        if (type === famousType[0]) {
          this.latestUserObj = {
            name: famousType[0],
            title: famousTypeTitle[0],
            list: data.lists.map((item) => {
              return new User(item)
            })
          }
        } else if (type === famousType[1]) {
          this.recomUserObj = {
            name: famousType[1],
            title: famousTypeTitle[1],
            list: data.lists.map((item) => {
              return new User(item)
            })
          }
        } else if (type === famousType[2]) {
          this.dailyHotUserObj = {
            name: famousType[2],
            title: famousTypeTitle[2],
            list: data.lists.map((item) => {
              return new User(item)
            })
          }
        }
        if (this.latestUserObj && this.recomUserObj && this.dailyHotUserObj) {
          this.recomFamousList.push(this.latestUserObj, this.recomUserObj, this.dailyHotUserObj)
          this.latestUserObj = null
          this.recomUserObj = null
          this.dailyHotUserObj = null
        }
      }
    },
    components: {
      FamousSlide,
      FamousKinds
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
          margin-right: 16px;
          &:last-child {
            margin-right: 0;
          }
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