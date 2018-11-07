<template>
  <!-- 原创回声榜页面 -->
  <main class="sound-origin">
    <echo-rank :daily-rank="dailyRank" :other-rank-list="otherRankList" :rank-type="rankType"></echo-rank>
  </main>
</template>

<script type="text/ecmascript-6">
  import EchoRank from 'components/echo-rank/echo-rank'
  import {getSoundOriginRank} from 'api/rank'
  import {STATUS_OK} from 'api/config'
  import Sound from 'common/js/sound'

  // 回声榜数据的时间段
  const periodArr = ['daily', 'weekly', 'monthly']
  // 回声榜时间段标题
  const periodTitleArr = ['原创日榜 TOP 1', '原创回声周榜', '原创回声月榜']
  // 每个榜单的 sound 数量
  const limitNum = 10

  export default {
    name: 'SoundOrigin',
    data () {
      return {
        // 日榜数据
        dailyRank: {
          title: '',
          list: []
        },
        // 周榜和月榜数据
        otherRankList: [],
        // 回声榜类型
        rankType: 'origin'
      }
    },
    created () {
      this._getSoundOriginRank()
    },
    methods: {
      /* 获取原创回声榜数据 */
      _getSoundOriginRank () {
        periodArr.forEach((period) => {
          getSoundOriginRank(period, limitNum).then(res => {
            if (res.status === STATUS_OK) {
              this.handleRank(res, period)
            }
          })
        })
      },
      /* 处理回声榜数据 */
      handleRank (data, period) {
        let rankList = data.lists[period]
        if (period === periodArr[0]) {
          this.dailyRank.title = periodTitleArr[0]
          this.$set(this.dailyRank, 'top1', new Sound(rankList[0]))
          for (let i = 1, len = rankList.length; i < len; i++) {
            this.dailyRank.list.push(new Sound(rankList[i]))
          }
        } else if (period === periodArr[1]) {
          this.weeklyRank = {
            title: periodTitleArr[1],
            list: rankList.map((item) => {
              return new Sound(item)
            })
          }
        } else if (period === periodArr[2]) {
          this.monthlyRank = {
            title: periodTitleArr[2],
            list: rankList.map((item) => {
              return new Sound(item)
            })
          }
        }
        if (this.weeklyRank && this.monthlyRank) {
          this.otherRankList.push(this.weeklyRank, this.monthlyRank)
          this.weeklyRank = null
          this.monthlyRank = null
        }
      }
    },
    components: {
      EchoRank
    }
  }
</script>

<style lang="less" scoped rel="stylesheet/less">

</style>