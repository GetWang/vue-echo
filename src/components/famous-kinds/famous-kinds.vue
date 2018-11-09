<template>
  <!-- 名人页名人分类组件 -->
  <div class="famous-kinds">
    <div class="kinds-header">
      <h2 class="title">名人分类</h2>
      <ul class="kinds-list">
        <li class="kinds-item"
            :class="{active: currTypeId === kind.typeId}"
            v-for="kind in famousTypeList"
            :key="'type-' + kind.typeId"
            @click="changeType(kind.typeId)">{{kind.typeTitle}}</li>
      </ul>
    </div>
    <ul class="kinds-user-list">
      <li class="kinds-user-item" v-for="user in famousListByType" :key="user.id">
        <a :href="'#/user/' + user.id" class="famous-link">{{user.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getFamousTypeList, getFamousListByType} from 'api/user'
  import {STATUS_OK} from 'api/config'
  import User from 'common/js/user'

  // 根据名人类别获取名人的个数限制
  const limit = 44
  // 初始名人类别 Id
  const initTypeId = 1

  export default {
    name: 'FamousKinds',
    data () {
      return {
        // 名人类别列表
        famousTypeList: [],
        // 当前的名人类别 Id
        currTypeId: initTypeId,
        // 某个分类的名人列表
        famousListByType: []
      }
    },
    created () {
      this._getFamousTypeList()
      this._getFamousListByType(initTypeId, limit)
    },
    methods: {
      /* 获取名人页面名人分类的 type 列表 */
      _getFamousTypeList () {
        getFamousTypeList().then(res => {
          if (res.status === STATUS_OK) {
            this.handleFamousTypeList(res)
          }
        }).catch(err => {
          console.log('api/getFamousTypeList error', err)
        })
      },
      /* 根据名人类别获取名人页面的名人列表 */
      _getFamousListByType (famous_type, limit) {
        getFamousListByType(famous_type, limit).then(res => {
          if (res.status === STATUS_OK) {
            this.handleFamousListByType(res)
          }
        }).catch(err => {
          console.log('api/getFamousListByType error', err)
        })
      },
      /* 处理名人分类的 type 列表 */
      handleFamousTypeList (data) {
        data.lists.forEach((item) => {
          this.famousTypeList.push({
            typeId: item.famous_type,
            typeTitle: item.famous_type_title
          })
        })
      },
      /* 处理某个类别的名人数据 */
      handleFamousListByType (data) {
        // 清空某个分类的名人列表
        this.famousListByType.splice(0, this.famousListByType.length)
        data.famous_users[0].users.forEach((item) => {
          this.famousListByType.push(new User(item))
        })
      },
      // 切换名人类型
      changeType (typeId) {
        if (typeId === this.currTypeId) {
          return
        }
        this.currTypeId = typeId
        this._getFamousListByType(typeId, limit)
      }
    }
  }
</script>

<style lang="less" scoped rel="stylesheet/less">
  @import "~common/less/variable";

  .famous-kinds {
    width: 695px;
    margin: 50px auto;
    .kinds-header {
      padding-bottom: 35px;
      border-bottom: 1px solid #e9e9e9;
      .title {
        height: 36px;
        margin-bottom: 25px;
        font-size: @font-size-large-x;
        font-weight: normal;
        line-height: 36px;
        color: @color-text;
      }
      .kinds-list {
        font-size: 0;
        .kinds-item {
          display: inline-block;
          margin: 0 22px 8px 0;
          font-size: @font-size-medium;
          line-height: 24px;
          color: @color-text-l;
          cursor: pointer;
          &.active {
            color: @color-theme;
          }
        }
      }
    }
    .kinds-user-list {
      padding-top: 40px;
      font-size: 0;
      .kinds-user-item {
        display: inline-block;
        width: 110px;
        margin: 0 70px 14px 0;
        overflow: hidden;
        font-size: @font-size-medium;
        text-overflow: ellipsis;
        white-space: nowrap;
        &:nth-child(4n) {
          margin-right: 0;
        }
        .famous-link {
          display: inline-block;
          height: 24px;
          line-height: 24px;
          text-decoration: none;
          color: @color-text-l;
        }
      }
    }
  }
</style>
