import axios from 'axios'

/* 获取 sound 详情信息 */
export function getSound (id, comment) {
  const url = '/api/getSound'
  const data = {
    id,
    comment
  }
  return axios.get(url, {
    params: data
  }).then(res => {
    return Promise.resolve(res.data)
  })
}