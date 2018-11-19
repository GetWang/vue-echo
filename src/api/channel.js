import axios from 'axios'

/* 获取频道页面频道标签数据 */
export function getChannelTags () {
  const url = '/api/getChannelTags'
  return axios.get(url).then(res => {
    return Promise.resolve(res.data)
  })
}