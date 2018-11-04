import axios from 'axios'

/* 获取热门回声榜数据 */
export function getSoundHotRank (periods, limit) {
  const url = '/api/rank/sound-hot'
  const data = {
    periods,
    limit
  }
  return axios.get(url, {
    params: data
  }).then(res => {
    return Promise.resolve(res.data)
  })
}

/* 获取原创回声榜数据 */
export function getSoundOriginRank (periods, limit) {
  const url = '/api/rank/sound-origin'
  const data = {
    periods,
    limit
  }
  return axios.get(url, {
    params: data
  }).then(res => {
    return Promise.resolve(res.data)
  })
}

/* 获取视频回声榜数据 */
export function getMVHotRank (periods, limit) {
  const url = '/api/rank/mv-hot'
  const data = {
    periods,
    limit
  }
  return axios.get(url, {
    params: data
  }).then(res => {
    return Promise.resolve(res.data)
  })
}