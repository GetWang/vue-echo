import axios from 'axios'

/* 获取 mv 详情信息 */
export function getMv (id) {
  const url = '/api/getMv'
  const data = {
    id
  }
  return axios.get(url, {
    params: data
  }).then(res => {
    return Promise.resolve(res.data)
  })
}