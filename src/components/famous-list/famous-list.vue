<template>
  <main class="famous-list">
    <div class="content">
      <h2 class="list-name">{{currListTitle}}</h2>
      <ul class="user-list">
        <li class="user-item" v-for="user in userList" :key="user.id">
          <a :href="'#/user/' + user.id" class="user-link">
            <img :src="user.avatar_150" :alt="user.name" class="avatar">
          </a>
          <p class="user-name">
            <a :href="'#/user/' + user.id" class="link">{{user.name}}</a>
          </p>
          <p class="user-desc">{{user.desc}}</p>
        </li>
      </ul>
      <div class="pager-wrapper">
        <pager></pager>
      </div>
    </div>
  </main>
</template>

<script type="text/ecmascript-6">
  import Pager from 'base/pager/pager'
  import {getTopUser, getLatestUser, getRecomUser, getDailyHotUser} from 'api/user'
  import {STATUS_OK} from 'api/config'
  import User from 'common/js/user'

  // 名人列表页面的类型名字
  const famousListNames = ['top-user', 'latest-user', 'recommend-user', 'daily-hot-user']
  // 名人列表页面的标题
  const famousListTitles = ['echo 群星', '新入驻', 'echo 推荐', '24小时热门']

  export default {
    name: 'FamousList',
    data () {
      return {
        // 当前名人列表页面的类型名字
        currListName: '',
        // 当前名人列表页面的标题
        currListTitle: '',
        // 当前列表页数
        currPage: 1,
        // 名人列表
        userList: []
      }
    },
    created () {
      this.checkCurrListName()
      this._getUserList(1, 16)
    },
    methods: {
      /* 检查名人列表页面类型的名字是否存在 */
      checkCurrListName () {
        this.currListName = this.$route.params.listName
        let len = famousListNames.length
        for (let i = 0; i < len; i++) {
          if (this.currListName === famousListNames[i]) {
            this.currListTitle = famousListTitles[i]
            return
          }
        }
        this.$router.replace('/famous')
      },
      /* 获取当前名人列表页面数据 */
      _getUserList (page, limit) {
        if (this.currListName === famousListNames[0]) {
          getTopUser(page, limit).then(res => {
            if (res.status === STATUS_OK) {
              this.handleUserList(res)
            }
          })
        } else if (this.currListName === famousListNames[1]) {
          getLatestUser(page, limit).then(res => {
            if (res.status === STATUS_OK) {
              this.handleUserList(res)
            }
          })
        } else if (this.currListName === famousListNames[2]) {
          getRecomUser(page, limit).then(res => {
            if (res.status === STATUS_OK) {
              this.handleUserList(res)
            }
          })
        } else if (this.currListName === famousListNames[3]) {
          getDailyHotUser(page, limit).then(res => {
            if (res.status === STATUS_OK) {
              this.handleUserList(res)
            }
          })
        }
      },
      /* 处理当前名人列表数据 */
      handleUserList (data) {
        data.lists.forEach((item) => {
          this.userList.push(new User(item))
        })
      }
    },
    components: {
      Pager
    }
  }
</script>

<style lang="less" scoped rel="stylesheet/less">
  @import "~common/less/variable";

  .famous-list {
    padding: 15px 0 40px;
    background-color: @color-background;
    .content {
      width: 755px;
      margin: 0 auto;
      overflow: hidden;
      background-color: #fff;
      .list-name {
        width: 693px;
        height: 36px;
        margin: 15px auto 20px;
        font-size: @font-size-large-x;
        font-weight: normal;
        line-height: 36px;
        color: @color-text;
      }
      .user-list {
        width: 693px;
        margin: 0 auto;
        padding-bottom: 45px;
        overflow: hidden;
        .user-item {
          float: left;
          width: 150px;
          margin: 0 30px 20px 0;
          &:nth-child(4n) {
            margin-right: 0;
          }
          .user-link {
            display: block;
            width: 150px;
            height: 150px;
            margin-bottom: 9px;
            .avatar {
              display: block;
              width: 100%;
              height: 100%;
            }
          }
          .user-name {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            .link {
              display: inline-block;
              height: 22px;
              font-size: @font-size-small;
              line-height: 22px;
              text-decoration: none;
              color: @color-text-d;
              &:after {
                display: inline-block;
                content: 'v';
                width: 16px;
                height: 16px;
                margin-left: 7px;
                border-radius: 50%;
                font-size: @font-size-small;
                line-height: 16px;
                text-align: center;
                color: #fff;
                background: @color-theme;
              }
            }
          }
          .user-desc {
            margin-top: 3px;
            overflow: hidden;
            font-size: @font-size-small-s;
            line-height: 16px;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: @color-text;
          }
        }
      }
      .pager-wrapper {
        margin: 20px 0;
        text-align: center;
      }
    }
  }
</style>
