import axios from 'axios'

/* 获取首页和名人页面的 echo 名人数据 */
export function getFamousUser (limit) {
  const url = '/api/getFamousUser'
  const data = {
    limit
  }
  return axios.get(url, {
    params: data
  }).then(res => {
    return Promise.resolve(res.data)
  })
}