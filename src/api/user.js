import axios from 'axios'

/* 获取首页 echo 名人数据 */
export function getFamousUser () {
  const url = '/api/getFamousUser'
  const data = {
    limit: 5
  }
  return axios.get(url, {
    params: data
  }).then(res => {
    return Promise.resolve(res.data)
  })
}