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
  export default {
    name: 'FamousKinds'
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
