import axios from 'axios'

/* 获取首页专辑数据 */
export function getHomeAlbum () {
  const url = '/api/getHomeAlbum'
  const data = {
    limit: 20,
    condation: encodeURIComponent('1:0,2:0')
  }
  return axios.get(url, {
    params: data
  }).then(res => {
    return Promise.resolve(res.data)
  })
}