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

/* 获取名人页 echo 群星数据 */
export function getTopUser (page, limit) {
  const url = '/api/getTopUser'
  const data = {
    page,
    limit
  }
  return axios.get(url, {
    params: data
  }).then(res => {
    return Promise.resolve(res.data)
  })
}