<template>
  <div class="m-pager">
    <div class="btn prev-btn"
         :class="{disable: currPage === 1}"
         @click="prevPage"></div>
    <ul class="nums-btn-wrapper">
      <li class="btn num-btn"
          :class="{current: currPage === startPage + i}"
          @click="changePageNum(startPage + i)"
          v-for="i in btnCount" :key="i">{{startPage + i}}</li>
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
      },
      // 数字按钮的最多个数
      maxBtnCount: {
        type: Number,
        default: 12
      }
    },
    data () {
      return {
        // 当前页码
        currPage: 1,
        // 起始显示的数字页码中间值
        startPage: 0
      }
    },
    watch: {
      /* 当总的数量发生变化时，重置相关数据 */
      totalCount () {
        this.startPage = 0
        this.currPage = 1
      },
      /* 当页码发生变化时，派发 “页码更改” 事件 */
      currPage (newPage, oldPage) {
        console.log(newPage, oldPage)
        this.$emit('pageChange', newPage)
        if (this.pageCount > this.maxBtnCount) {
          this.alignPageCenter()
        }
      }
    },
    computed: {
      /* 总页数 */
      pageCount () {
        return Math.ceil(this.totalCount / this.pageSize)
      },
      /* 数字页码按钮的数量 */
      btnCount () {
        if (this.pageCount > this.maxBtnCount) {
          this.computePageCenter()
          return this.maxBtnCount
        } else {
          return this.pageCount
        }
      }
    },
    methods: {
      /* 计算页码居中相关的信息 */
      computePageCenter () {
        let num = this.maxBtnCount - 1
        this.pageCenter = {
          // 居中数字按钮左边的数字按钮个数
          leftNum: Math.floor(num / 2),
          // 居中数字按钮右边的数字按钮个数
          rightNum: Math.ceil(num / 2)
        }
      },
      /* 使当前页码居中显示 */
      alignPageCenter () {
        // 当前页码居中时“this.maxBtnCount”个数字按钮的起始页码
        let firstNum = this.currPage - this.pageCenter.leftNum
        // 当前页码居中时“this.maxBtnCount”个数字按钮的结束页码
        let lastNum = this.currPage + this.pageCenter.rightNum
        if (firstNum <= 1) {
          // 此时起始显示的页码中间值为 0
          this.startPage = 0
        } else if (firstNum > 1 && lastNum <= this.pageCount) {
          this.startPage = firstNum - 1
        } else if (lastNum > this.pageCount) {
          this.startPage = this.pageCount - this.maxBtnCount
        }
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
        &.current {
          cursor: default;
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