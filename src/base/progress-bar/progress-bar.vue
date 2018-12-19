<template>
  <div class="progress-bar" :style="barStyle">
    <div class="progress" :style="{backgroundColor: progressColor}"></div>
    <div class="progress-btn" :style="btnStyle"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'ProgressBar',
    props: {
      // 进度条背景色
      barBgColor: {
        type: String,
        default: '#b9ddcf'
      },
      // 进度颜色
      progressColor: {
        type: String,
        default: '#21be8e'
      },
      // 进度条的高度
      barHeight: {
        type: Number,
        default: 4
      }
    },
    data () {
      const _this = this
      const btnWidth = _this.barHeight * 3 - 1
      return {
        // 进度条样式
        barStyle: {
          height: _this.barHeight + 'px',
          backgroundColor: _this.barBgColor
        },
        // 进度条按钮样式
        btnStyle: {
          top: -(btnWidth - _this.barHeight) / 2 + 'px',
          left: -btnWidth / 2 + 'px',
          width: btnWidth + 'px',
          height: btnWidth + 'px',
          borderWidth: Math.floor(btnWidth * 0.3) + 'px',
          backgroundColor: _this.progressColor
        }
      }
    }
  }
</script>

<style lang="less" scoped rel="stylesheet/less">
  .progress-bar {
    position: relative;
    .progress {
      width: 25px;
      height: 100%;
    }
    .progress-btn {
      position: absolute;
      top: 0;
      left: 0;
      border: 1px solid #fff;
      border-radius: 50%;
      box-sizing: border-box;
      box-shadow: 0 0 0 1px #d0d0d0;
    }
  }
</style>
