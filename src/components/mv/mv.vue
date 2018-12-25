<template>
  <!-- mv 视频详情页面 -->
  <main class="mv-detail" :class="{'video-fullscreen': isVideoFullScr}">
    <!-- sound、mv 组件 -->
    <sound-mv :soundMv="mv">
      <!-- sound 或 mv 插槽的内容 -->
      <div class="mv" slot="soundWrapper">
        <!-- 视频播放器组件 -->
        <mv-player :cover="mv.cover_url"
                   :mvSource="mv.source"
                   @fullScrChange="handleFullScreen"></mv-player>
      </div>
      <!-- 简介信息插槽的内容 -->
      <div class="intro" slot="intro">
        <p class="info">{{mv.info}}</p>
      </div>
    </sound-mv>
  </main>
</template>

<script type="text/ecmascript-6">
  import SoundMv from 'components/sound-mv/sound-mv'
  import MvPlayer from 'components/mv-player/mv-player'
  import MV from 'common/js/mv'
  import {getMv} from 'api/mv'
  import {STATUS_OK} from 'api/config'

  export default {
    name: 'MV',
    data () {
      return {
        // 回声 mv
        mv: {
          id: '',
          name: '',
          shareCount: 0,
          likeCount: 0,
          commentCount: 0,
          viewCount: 0,
          info: '',
          userId: '',
          userName: '',
          commentList: []
        },
        // 视频是否全屏播放
        isVideoFullScr: false
      }
    },
    created () {
      this._getMv(this.$route.params.id)
    },
    methods: {
      /* 获取 mv 详情信息 */
      _getMv (id) {
        getMv(id).then(res => {
          console.log('res', res)
          if (res.status === STATUS_OK) {
            this.handleMv(res)
          }
        }).catch(err => {
          console.log('api/getMv error', err)
        })
      },
      /* 处理 mv 详情数据 */
      handleMv (data) {
        this.mv = new MV(Object.assign({
          comments: data.comments
        }, data.info))
        console.log('mv', this.mv)
      },
      /* 处理视频的全屏/非全屏播放状态 */
      handleFullScreen (isFullScreen) {
        this.isVideoFullScr = isFullScreen
      }
    },
    components: {
      SoundMv,
      MvPlayer
    }
  }
</script>

<style lang="less" scoped rel="stylesheet/less">
  @import "~common/less/variable";

  .mv-detail {
    padding: 15px 0 60px;
    background: @color-background;
    /* 视频全屏播放时，调整页面样式 */
    &.video-fullscreen {
      height: 0;
      overflow: hidden;
    }
    .mv {
      height: 566px;
    }
    .intro {
      padding: 0 60px 35px;
      font-size: @font-size-small;
      line-height: 24px;
      word-break: break-all;
      word-wrap: break-word;
      white-space: pre-line;
      color: @color-text-dd;
    }
  }
</style>
