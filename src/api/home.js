import axios from 'axios'

/* 获取首页回声榜和每日精选数据 */
export function getRankChoose () {
  const url = '/api/getRankChoose'
  return axios.get(url).then(res => {
    return Promise.resolve(res.data)
  })
}

/* 获取首页今日推荐数据 */
export function getTodayRecom (page) {
  const url = '/api/getTodayRecom'
  const data = {
    page
  }
  return axios.get(url, {
    params: data
  }).then(res => {
    return Promise.resolve(res.data)
  })
}