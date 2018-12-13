<template>
  <div class="mv-player">
    <div class="cover-bg">
      <img src="" alt="" class="cover">
      <div class="play-btn" title="Play Video"></div>
    </div>
    <video src=""></video>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'MvPlayer'
  }
</script>

<style lang="less" scoped rel="stylesheet/less">
  @import "~common/less/variable";

  .mv-player {
    position: relative;
    height: 100%;
    .cover-bg {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 100%;
      z-index: 5;
      background: #000;
      .cover {
        display: block;
        width: 100%;
        height: 100%;
      }
      .play-btn {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 90px;
        height: 90px;
        margin: -45px 0 0 -45px;
        border: 4px solid #fff;
        border-radius: 50%;
        box-sizing: border-box;
        background: rgba(43, 51, 63, .7);
        transition: all .2s ease;
        cursor: pointer;
        &:hover {
          background: rgba(43, 51, 63, .4);
        }
      }
    }
    video {
      width: 100%;
      height: 100%;
    }
  }
</style>