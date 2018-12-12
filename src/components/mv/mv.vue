<template>
  <!-- mv 视频详情页面 -->
  <main class="mv-detail">
    <!-- sound、mv 组件 -->
    <sound-mv :soundMv="mv">
      <!-- sound 或 mv 插槽的内容 -->
      <div class="mv" slot="soundWrapper">
        <!-- 视频播放器组件 -->
        <mv-player></mv-player>
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
        }
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
