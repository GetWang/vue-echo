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

/* 获取名人页新入驻名人用户的数据 */
export function getLatestUser (page, limit) {
  const url = '/api/getLatestUser'
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

/* 获取名人页 echo 推荐名人用户的数据 */
export function getRecomUser (page, limit) {
  const url = '/api/getRecomUser'
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

/* 获取名人页24小时热门名人用户的数据 */
export function getDailyHotUser (page, limit) {
  const url = '/api/getDailyHotUser'
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

/* 获取名人页面名人分类的 type 列表 */
export function getFamousTypeList () {
  const url = '/api/getFamousTypeList'
  return axios.get(url).then(res => {
    return Promise.resolve(res.data)
  })
}

/* 根据名人类别获取名人页面的名人列表 */
export function getFamousListByType (famous_type, limit) {
  const url = '/api/getFamousListByType'
  const data = {
    famous_type,
    limit
  }
  return axios.get(url, {
    params: data
  }).then(res => {
    return Promise.resolve(res.data)
  })
}