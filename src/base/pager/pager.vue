<template>
  <div class="m-pager">
    <div class="btn prev-btn"
         :class="{disable: currPage === 1}"
         @click="prevPage"></div>
    <ul class="nums-btn-wrapper">
      <li class="btn num-btn"
          :class="{current: currPage === i}"
          @click="changePageNum(i)"
          v-for="i in pageCount" :key="i">{{i}}</li>
    </ul>
    <div class="btn next-btn"
         :class="{disable: currPage === pageCount}"
         @click="nextPage"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'Pager',
    props: {
      // 每页的大小
      pageSize: {
        type: Number,
        default: 1
      },
      // 总的数量
      totalCount: {
        type: Number,
        default: 0
      }
    },
    data () {
      return {
        // 总页数
        pageCount: 0,
        // 当前页码
        currPage: 1
      }
    },
    created () {
      this.computePageCount()
    },
    watch: {
      /* 总的数量发生变化，更新总页数 */
      totalCount () {
        this.computePageCount()
      },
      /* 当页码发生变化时，派发 “页码更改” 事件 */
      currPage (newPage, oldPage) {
        console.log(newPage, oldPage)
        this.$emit('pageChange', newPage)
      }
    },
    methods: {
      /* 计算总页数 */
      computePageCount () {
        this.pageCount = Math.ceil(this.totalCount / this.pageSize)
      },
      /* 指定新的页码 */
      changePageNum (num) {
        this.currPage = num
      },
      /* 上一页名人 */
      prevPage () {
        let page = this.currPage
        if (page <= 1) {
          return
        }
        // 确保 “this.currPage” 属性值不小于 1
        this.currPage = Math.max(1, --page)
      },
      /* 下一页名人 */
      nextPage () {
        let page = this.currPage
        if (page >= this.pageCount) {
          return
        }
        // 确保 “this.currPage” 属性值不大于 “this.pageCount”
        this.currPage = Math.min(this.pageCount, ++page)
      }
    }
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
      &.disable {
        cursor: default;
      }
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
      &.disable {
        cursor: default;
      }
    }
  }
</style>