<template>
  <main class="sound-hot">
    <echo-rank></echo-rank>
  </main>
</template>

<script type="text/ecmascript-6">
  import EchoRank from 'components/echo-rank/echo-rank'
  import {getSoundHotRank} from 'api/rank'
  import {STATUS_OK} from 'api/config'

  // 回声榜数据的时间段
  const periodArr = ['daily', 'weekly', 'monthly']

  export default {
    name: 'SoundHot',
    data () {
      return {
        // 日榜数据
        dailyRank: {},
        // 周榜和月榜数据
        otherRank: []
      }
    },
    created () {
      this._getSoundHotRank()
    },
    methods: {
      /* 获取热门回声榜数据 */
      _getSoundHotRank () {
        const limit = 10
        periodArr.forEach((period) => {
          getSoundHotRank(period, limit).then(res => {
            console.log('res', res)
            if (res.status === STATUS_OK) {
              this.handleRank(res, period)
            }
          })
        })
      },
      /* 处理回声榜数据 */
      handleRank (data, period) {}
    },
    components: {
      EchoRank
    }
  }
</script>

<style lang="less" scoped rel="stylesheet/less">

</style>