<template>
  <div class="m-pager">
    <div class="btn prev-btn"></div>
    <ul class="nums-btn-wrapper">
      <li class="btn num-btn">1</li>
    </ul>
    <div class="btn next-btn"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'Pager'
  }
</script>

<style lang="less" scoped rel="stylesheet/less">
  @import "~common/less/variable";

  .m-pager {
    display: inline-block;
    .btn {
      width: 26px;
      height: 26px;
      font-size: @font-size-small;
      line-height: 26px;
      text-align: center;
      cursor: pointer;
    }
    .prev-btn {
      float: left;
      margin-right: 20px;
      background: url("./prev.png") no-repeat center center;
    }
    .nums-btn-wrapper {
      float: left;
      font-size: 0;
      .num-btn {
        display: inline-block;
        margin-right: 8px;
        color: @color-text-ll;
        &:last-child {
          margin-right: 0;
        }
        &.current, &:hover {
          color: @color-theme;
        }
      }
    }
    .next-btn {
      float: left;
      margin-left: 20px;
      background: url("./next.png") no-repeat center center;
    }
  }
</style>