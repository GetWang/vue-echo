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

/* 获取首页声音场景对应的 sound 列表 */
export function getSceneSoundList (ids) {
  const url = '/api/getSceneSoundList'
  const data = {
    ids
  }
  return axios.get(url, {
    params: data
  }).then(res => {
    return Promise.resolve(res.data)
  })
}