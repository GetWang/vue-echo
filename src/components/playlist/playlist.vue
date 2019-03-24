<template>
  <!-- 播放列表组件 -->
  <div class="playlist">
    <!-- 列表类型切换 tabs -->
    <div class="tab-list">
      <div class="tab-item" :class="{current: !isShowLikelist}"
           @click="changeList('playlist')">
        <i class="icon-sound"></i>
        <span class="text">播放列表</span>
      </div>
      <div class="tab-item" :class="{current: isShowLikelist}"
           @click="changeList('likelist')">
        <i class="icon-unlike"></i>
        <span class="text">我喜欢的</span>
      </div>
    </div>
    <!-- 列表操作按钮区 -->
    <div class="operator-wrapper">
      <div class="clear-btn" v-show="!isShowLikelist"
           @click="clearPlaylist">清空</div>
      <div class="play-all-btn" v-show="isShowLikelist"
           @click="playAllSounds(currList)">播放全部</div>
    </div>
    <!-- sound 列表 -->
    <ul class="sound-list">
      <li class="sound-item" :class="[getStatusCls(sound.id)]"
          v-for="(sound, index) in currList" :key="sound.id">
        <p class="sound-name" @click="setCurrIndex(index)">{{sound.name}}</p>
        <div class="control-wrapper">
          <i class="like-btn icon-unlike"></i>
          <i class="delete-btn icon-close" @click="deleteSound(index)"></i>
          <span class="duration">{{formatTime(sound.duration)}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import {padNum} from 'common/js/util'
  import {mapGetters, mapMutations, mapActions} from 'vuex'

  export default {
    name: 'Playlist',
    data () {
      return {
        // 当前列表类型，初始为“播放列表”
        currListType: 'playlist'
      }
    },
    computed: {
      /* 是否显示“喜欢列表” */
      isShowLikelist () {
        return this.currListType === 'likelist'
      },
      /* 组件当前的“播放列表” */
      currList () {
        return this.isShowLikelist ? [] : this.playList
      },
      ...mapGetters(['playList', 'currSound'])
    },
    methods: {
      /* 获取每首 sound 的 status 类名 */
      getStatusCls (id) {
        return this.currSound.id === id ? 'current' : 'dot'
      },
      /* 更改当前列表 */
      changeList (type) {
        if (type === this.currListType) {
          return
        }
        this.currListType = type
      },
      /* 格式化时间 */
      formatTime (second) {
        second = Math.floor(second)
        let minute = Math.floor(second / 60)
        let restSecond = second % 60
        return padNum(minute) + ':' + padNum(restSecond)
      },
      ...mapMutations({
        setCurrIndex: 'SET_CURR_INDEX'
      }),
      ...mapActions(['deleteSound', 'clearPlaylist', 'playAllSounds'])
    }
  }
</script>

<style lang="less" scoped rel="stylesheet/less">
  @import "~common/less/variable";

  .playlist {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #fff;
    .tab-list {
      margin: 20px 0 16px;
      font-size: 0;
      text-align: center;
      .tab-item {
        display: inline-block;
        width: 105px;
        height: 38px;
        border-bottom: 2px solid @color-background-l;
        font-size: @font-size-small;
        line-height: 38px;
        color: @color-text;
        cursor: pointer;
        .text {
          margin-left: 3px;
        }
        .icon-sound {
          font-size: 21px;
          vertical-align: middle;
        }
        .icon-unlike {
          font-size: 17px;
          vertical-align: middle;
        }
        &.current {
          border-color: @color-theme;
          color: @color-theme;
        }
      }
    }
    .operator-wrapper {
      margin-right: 20px;
      text-align: right;
      .clear-btn {
        display: inline-block;
        height: 22px;
        padding: 0 8px;
        line-height: 22px;
        font-size: @font-size-small;
        color: @color-theme;
        cursor: pointer;
      }
      .play-all-btn {
        display: inline-block;
        width: 76px;
        height: 22px;
        border-radius: 11px;
        font-size: @font-size-small-s;
        line-height: 22px;
        text-align: center;
        color: #fff;
        background: @color-theme;
        cursor: pointer;
        &:before {
          content: '\e900';
          margin-right: 3px;
          font-size: 13px;
          font-family: "echo-icon" !important;
          vertical-align: top;
        }
      }
    }
    .sound-list {
      height: 78%;
      margin-top: 18px;
      padding: 0 15px 0 36px;
      overflow: auto;
      .sound-item {
        position: relative;
        height: 22px;
        margin-bottom: 20px;
        padding-bottom: 4px;
        border-bottom: 1px solid @color-background-l;
        color: @color-text-ll;
        &.dot:before {
          content: '';
          position: absolute;
          top: 9px;
          left: -19px;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #e8e8e8;
        }
        &.current:after {
          content: '\e911';
          position: absolute;
          top: 2px;
          left: -28px;
          font-size: 20px;
          font-family: "echo-icon" !important;
          color: @color-theme;
        }
        .sound-name {
          float: left;
          width: 72%;
          height: 100%;
          overflow: hidden;
          font-size: @font-size-small;
          line-height: 22px;
          text-overflow: ellipsis;
          white-space: nowrap;
          cursor: default;
        }
        .control-wrapper {
          float: right;
          height: 100%;
          line-height: 22px;
          .like-btn, .delete-btn {
            margin-right: 15px;
            font-size: 17px;
            vertical-align: middle;
          }
          .like-btn {
            margin-right: 10px;
          }
          .duration {
            font-size: @font-size-small-s;
          }
        }
      }
    }
  }
</style>