<template>
  <div class="progress-bar" ref="progressBar"
       :style="barStyle" @click="barClick">
    <div class="progress" ref="progress"
         :style="{backgroundColor: progressColor}"></div>
    <div class="progress-btn"
         :style="btnStyle"
         ref="progressBtn"
         @mousedown="btnMouseDown"
         @mousemove="btnMouseMove"
         @mouseup="btnMouseUp"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {judgeNumInRegion} from 'common/js/util'

  export default {
    name: 'ProgressBar',
    props: {
      // 百分比
      percent: {
        type: Number,
        default: 0
      },
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
          backgroundColor: _this.progressColor,
          transform: 'translateX(0)'
        }
      }
    },
    created () {
      // 在拖拽按钮上发生 mousedown 事件的标志
      this.btnDownFlag = false
      // 存储拖拽按钮上的鼠标事件信息
      this.btnMouseObj = {
        startX: 0
      }
      // 进度条元素离视口左侧的距离
      this.barRectLeft = 0
      // 进度条的宽度
      this.barWidth = 0
      // 实时进度的宽度
      this.progressWidth = 0
      // 在拖拽按钮上 mousedown 事件发生时，进度的宽度
      this.downProcessWidth = 0
    },
    watch: {
      /* 当传入的百分比发生变化时，更改进度条的进度和按钮的位置 */
      percent (newPercent) {
        this.barWidth || (this.barWidth = this.$refs.progressBar.clientWidth)
        const offsetWidth = this.barWidth * newPercent
        this._offset(offsetWidth)
      }
    },
    methods: {
      /* 进度条点击事件处理 */
      barClick (e) {
        this.barRectLeft || (this.barRectLeft = this.$refs.progressBar.getBoundingClientRect().left)
        this.barWidth || (this.barWidth = this.$refs.progressBar.clientWidth)
        console.log('bartWidth', this.barWidth)
        console.log('rectLeft', this.barRectLeft)
        console.log('pageX', e.pageX)
        const offsetWidth = e.pageX - this.barRectLeft
        this._offset(offsetWidth)
        this._triggerPercent(offsetWidth)
      },
      /* 处理拖拽按钮上的 mousedown 事件 */
      btnMouseDown (e) {
        console.log('down-e', e)
        this.barWidth || (this.barWidth = this.$refs.progressBar.clientWidth)
        this.downProcessWidth = this.$refs.progress.clientWidth
        console.log('downProcessWidth', this.downProcessWidth)
        this.btnDownFlag = true
        this.btnMouseObj.startX = e.pageX
      },
      /* 处理拖拽按钮上的 mousemove 事件 */
      btnMouseMove (e) {
        if (this.btnDownFlag) {
          console.log('move-e', e)
          const deltaX = e.pageX - this.btnMouseObj.startX
          console.log('deltaX', deltaX)
          this.progressWidth = this.downProcessWidth + deltaX
          this._offset(this.progressWidth)
        }
      },
      /* 处理拖拽按钮上的 mouseup 事件 */
      btnMouseUp (e) {
        console.log('up-e', e)
        this.btnDownFlag = false
        this._triggerPercent(this.progressWidth)
      },
      /* 控制进度和按钮的偏移 */
      _offset (width) {
        width = judgeNumInRegion(width, 0, this.barWidth)
        console.log('offset', width)
        this.$refs.progress.style.width = width + 'px'
        this.btnStyle.transform = `translateX(${width}px)`
      },
      /* 派发进度改变事件 */
      _triggerPercent (width) {
        width = judgeNumInRegion(width, 0, this.barWidth)
        const percent = parseFloat((width / this.barWidth).toFixed(3))
        console.log('percent', percent)
        this.$emit('percentChange', percent)
      }
    }
  }
</script>

<style lang="less" scoped rel="stylesheet/less">
  .progress-bar {
    position: relative;
    cursor: pointer;
    .progress {
      width: 0;
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
