<template>
  <!-- 名人页面 echo 名人切换组件 -->
  <div class="famous-slide">
    <div class="famous-header">
      <h2 class="title">echo名人</h2>
      <div class="operate-wrapper">
        <span class="operate-btn prev" @click="prevPage" :class="[prevDisableCls]"></span>
        <span class="operate-btn next" @click="nextPage" :class="[nextDisableCls]"></span>
      </div>
    </div>
    <div class="list-wrapper">
      <ul class="famous-list" :style="translateXStyle">
        <li class="famous-item" v-for="famous in famousUserList" :key="famous.id">
          <a class="famous-link" :href="'#/user/' + famous.id">
            <img :src="famous.avatar_150" :alt="famous.name" class="avatar">
            <p class="famous-name">{{famous.name}}</p>
            <p class="follower"><span class="num">{{famous.followed_count}}人</span>关注</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getFamousUser} from 'api/user'
  import {STATUS_OK} from 'api/config'
  import User from 'common/js/user'

  // echo 名人总个数
  const limit = 10
  // 每页的 echo 名人个数
  const size = 4
  // 页中每项的长度
  const itemWidth = 165

  export default {
    name: 'FamousSlide',
    data () {
      return {
        // echo 名人列表
        famousUserList: [],
        // 当前页
        currPage: 1,
        // 总页数
        totalPage: Math.ceil(limit / size),
        // “.famous-list” 元素在 X 轴上移动的距离
        translateXWidth: 0
      }
    },
    created () {
      this._getFamousUser(limit)
    },
    computed: {
      /* 上一页按钮禁用类名 */
      prevDisableCls () {
        return this.currPage === 1 ? 'disable' : ''
      },
      /* 下一页按钮禁用类名 */
      nextDisableCls () {
        return this.currPage === this.totalPage ? 'disable' : ''
      },
      /* “.famous-list” 元素在 X 轴上移动的样式 */
      translateXStyle () {
        return {
          transform: `translateX(-${this.translateXWidth}px)`
        }
      }
    },
    methods: {
      /* 获取名人页面 echo 名人数据 */
      _getFamousUser (limit) {
        getFamousUser(limit).then(res => {
          if (res.status === STATUS_OK) {
            this.handleFamousUser(res)
          }
        }).catch(err => {
          console.log('api/getFamousUser error', err)
        })
      },
      /* 处理名人页面 echo 名人数据 */
      handleFamousUser (data) {
        data.lists.forEach((item) => {
          this.famousUserList.push(new User(item))
        })
      },
      /* 上一页名人 */
      prevPage () {
        if (this.currPage <= 1) {
          return
        }
        this.translateXWidth = (this.currPage - 2) * size * itemWidth
        // 确保 “this.currPage” 属性值不小于 1
        this.currPage = Math.max(1, --this.currPage)
      },
      /* 下一页名人 */
      nextPage () {
        if (this.currPage >= this.totalPage) {
          return
        }
        this.translateXWidth = this.currPage * size * itemWidth
        // 确保 “this.currPage” 属性值不大于 “this.totalPage”
        this.currPage = Math.min(this.totalPage, ++this.currPage)
      }
    }
  }
</script>

<style lang="less" scoped rel="stylesheet/less">
  @import "~common/less/variable";

  .famous-slide {
    width: 695px;
    margin: 50px auto;
    .famous-header {
      position: relative;
      margin-bottom: 25px;
      .title {
        height: 36px;
        font-size: @font-size-large-x;
        line-height: 36px;
        text-align: left;
        color: @color-text;
      }
      .operate-wrapper {
        position: absolute;
        top: 5px;
        right: 0;
        font-size: 0;
        .operate-btn {
          display: inline-block;
          width: 26px;
          height: 26px;
          margin-left: 15px;
          background-repeat: no-repeat;
          background-position: center center;
          background-size: 100% auto;
          cursor: pointer;
          &.prev {
            background-image: url("./prev.png");
          }
          &.next {
            background-image: url("./next.png");
          }
          &.disable {
            opacity: .5;
            cursor: default;
          }
        }
      }
    }
    .list-wrapper {
      overflow: hidden;
      .famous-list {
        font-size: 0;
        white-space: nowrap;
        transition: all .4s linear;
        .famous-item {
          display: inline-block;
          width: 150px;
          margin-right: 15px;
          &:last-child {
            margin-right: 0;
          }
          .famous-link {
            display: block;
            text-decoration: none;
            .avatar {
              display: block;
              width: 150px;
              height: 150px;
              margin-bottom: 8px;
            }
            .famous-name {
              margin-bottom: 5px;
              overflow: hidden;
              font-size: @font-size-small;
              line-height: 18px;
              text-overflow: ellipsis;
              white-space: nowrap;
              color: @color-text-d;
              &:after {
                content: 'v';
                display: inline-block;
                width: 15px;
                height: 15px;
                margin: 2px 0 0 5px;
                border-radius: 50%;
                font-size: @font-size-small-s;
                line-height: 15px;
                text-align: center;
                vertical-align: top;
                color: #fff;
                background-color: @color-theme-d;
              }
            }
            .follower {
              font-size: @font-size-small-s;
              line-height: 14px;
              color: @color-text-l;
              .num {
                margin-right: 4px;
              }
            }
          }
        }
      }
    }
  }
</style>