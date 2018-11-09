<template>
  <!-- 名人页名人分类组件 -->
  <div class="famous-kinds">
    <div class="kinds-header">
      <h2 class="title">名人分类</h2>
      <ul class="kinds-list">
        <li class="kinds-item">歌手</li>
      </ul>
    </div>
    <ul class="kinds-user-list">
      <li class="kinds-user-item">
        <a href="" class="famous-link">JC陈泳彤</a>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getFamousTypeList, getFamousListByType} from 'api/user'
  // import {STATUS_OK} from 'api/config'

  // 根据名人类别获取名人的个数限制
  const limit = 44

  export default {
    name: 'FamousKinds',
    created () {
      this._getFamousTypeList()
      this._getFamousListByType(1, limit)
    },
    methods: {
      /* 获取名人页面名人分类的 type 列表 */
      _getFamousTypeList () {
        getFamousTypeList().then(res => {
          console.log('res-type', res)
        }).catch(err => {
          console.log('api/getFamousTypeList error', err)
        })
      },
      /* 根据名人类别获取名人页面的名人列表 */
      _getFamousListByType (famous_type, limit) {
        getFamousListByType(famous_type, limit).then(res => {
          console.log('res-famous-list', res)
        }).catch(err => {
          console.log('api/getFamousListByType error', err)
        })
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
