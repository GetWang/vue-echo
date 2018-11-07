<template>
  <!-- 视频回声榜页面 -->
  <main class="mv-hot">
    <echo-rank :daily-rank="dailyRank" :other-rank-list="otherRankList" :rank-type="rankType"></echo-rank>
  </main>
</template>

<script type="text/ecmascript-6">
  import EchoRank from 'components/echo-rank/echo-rank'
  import {getMVHotRank} from 'api/rank'
  import {STATUS_OK} from 'api/config'
  import MV from 'common/js/mv'

  // 回声榜数据的时间段
  const periodArr = ['daily', 'weekly', 'monthly']
  // 回声榜时间段标题
  const periodTitleArr = ['视频日榜 TOP 1', '视频回声周榜', '视频回声月榜']
  // 每个榜单的 sound 数量
  const limitNum = 10

  export default {
    name: 'MVHot',
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
        rankType: 'mv'
      }
    },
    created () {
      this._getMVHotRank()
    },
    methods: {
      /* 获取视频回声榜数据 */
      _getMVHotRank () {
        periodArr.forEach((period) => {
          getMVHotRank(period, limitNum).then(res => {
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
          this.$set(this.dailyRank, 'top1', new MV(rankList[0]))
          for (let i = 1, len = rankList.length; i < len; i++) {
            this.dailyRank.list.push(new MV(rankList[i]))
          }
        } else if (period === periodArr[1]) {
          this.weeklyRank = {
            title: periodTitleArr[1],
            list: rankList.map((item) => {
              return new MV(item)
            })
          }
        } else if (period === periodArr[2]) {
          this.monthlyRank = {
            title: periodTitleArr[2],
            list: rankList.map((item) => {
              return new MV(item)
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