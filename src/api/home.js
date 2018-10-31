import axios from 'axios'

/* 获取首页回声榜和每日精选数据 */
export function getRankChoose () {
  const url = '/api/getRankChoose'
  return axios.get(url).then(res => {
    return Promise.resolve(res.data)
  })
}