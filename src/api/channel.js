import axios from 'axios'

/* 获取频道页面频道标签数据 */
export function getChannelTags () {
  const url = '/api/getChannelTags'
  return axios.get(url).then(res => {
    return Promise.resolve(res.data)
  })
}

/* 获取频道列表组件的频道列表数据 */
export function getChannelList (typeObj, page) {
  const url = '/api/getChannelList'
  const data = (typeObj && typeObj.type) ? {[typeObj.type]: typeObj.id} : {}
  data.page = page
  return axios.get(url, {
    params: data
  }).then(res => {
    return Promise.resolve(res.data)
  })
}