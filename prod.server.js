var express = require('express')
var config = require('./config/index')
var axios = require('axios')

var port = process.env.PORT || config.build.port

var app = express()

var apiRoutes = express.Router()

/* 获取首页回声榜和每日精选数据 */
apiRoutes.get('/getRankChoose', function (req, res) {
  const url = 'http://www.app-echo.com/api/other/index'
  axios.get(url, {
    headers: {
      host: 'www.app-echo.com',
      referer: 'http://www.app-echo.com/'
    }
  }).then(response => {
    res.json(response.data)
  }).catch(e => {
    console.log('api/getRankChoose error', e)
  })
})
/* 获取首页 echo 名人数据 */
apiRoutes.get('/getFamousUser', function (req, res) {
  const url = 'http://www.app-echo.com/api/famous/famous-user'
  axios.get(url, {
    headers: {
      host: 'www.app-echo.com',
      referer: 'http://www.app-echo.com/'
    },
    params: req.query
  }).then(response => {
    res.json(response.data)
  }).catch(e => {
    console.log('api/getFamousUser error', e)
  })
})
/* 获取首页专辑数据 */
apiRoutes.get('/getHomeAlbum', function (req, res) {
  const url = 'http://www.app-echo.com/api/album/list'
  axios.get(url, {
    headers: {
      host: 'www.app-echo.com',
      referer: 'http://www.app-echo.com/'
    },
    params: req.query
  }).then(response => {
    res.json(response.data)
  }).catch(e => {
    console.log('api/getHomeAlbum error', e)
  })
})
/* 获取首页今日推荐数据 */
apiRoutes.get('/getTodayRecom', function (req, res) {
  const url = 'http://www.app-echo.com/api/recommend/sound-day'
  axios.get(url, {
    headers: {
      host: 'www.app-echo.com',
      referer: 'http://www.app-echo.com/'
    },
    params: req.query
  }).then(response => {
    res.json(response.data)
  }).catch(e => {
    console.log('api/getTodayRecom error', e)
  })
})
/* 获取热门回声榜数据 */
apiRoutes.get('/rank/sound-hot', function (req, res) {
  const url = 'http://www.app-echo.com/api/rank/sound-hot'
  axios.get(url, {
    headers: {
      host: 'www.app-echo.com',
      referer: 'http://www.app-echo.com/'
    },
    params: req.query
  }).then(response => {
    res.json(response.data)
  }).catch(e => {
    console.log('api/rank/sound-hot error', e)
  })
})
/* 获取原创回声榜数据 */
apiRoutes.get('/rank/sound-origin', function (req, res) {
  const url = 'http://www.app-echo.com/api/rank/sound-origin'
  axios.get(url, {
    headers: {
      host: 'www.app-echo.com',
      referer: 'http://www.app-echo.com/'
    },
    params: req.query
  }).then(response => {
    res.json(response.data)
  }).catch(e => {
    console.log('api/rank/sound-origin error', e)
  })
})
/* 获取视频回声榜数据 */
apiRoutes.get('/rank/mv-hot', function (req, res) {
  const url = 'http://www.app-echo.com/api/rank/mv-hot'
  axios.get(url, {
    headers: {
      host: 'www.app-echo.com',
      referer: 'http://www.app-echo.com/'
    },
    params: req.query
  }).then(response => {
    res.json(response.data)
  }).catch(e => {
    console.log('api/rank/mv-hot error', e)
  })
})
/* 获取名人页 echo 群星数据 */
apiRoutes.get('/getTopUser', function (req, res) {
  const url = 'http://www.app-echo.com/api/famous/top-user'
  axios.get(url, {
    headers: {
      host: 'www.app-echo.com',
      referer: 'http://www.app-echo.com/'
    },
    params: req.query
  }).then(response => {
    res.json(response.data)
  }).catch(e => {
    console.log('api/getTopUser error', e)
  })
})
/* 获取名人页新入驻名人用户的数据 */
apiRoutes.get('/getLatestUser', function (req, res) {
  const url = 'http://www.app-echo.com/api/famous/latest-users'
  axios.get(url, {
    headers: {
      host: 'www.app-echo.com',
      referer: 'http://www.app-echo.com/'
    },
    params: req.query
  }).then(response => {
    res.json(response.data)
  }).catch(e => {
    console.log('api/getLatestUser error', e)
  })
})
/* 获取名人页 echo 推荐名人用户的数据 */
apiRoutes.get('/getRecomUser', function (req, res) {
  const url = 'http://www.app-echo.com/api/famous/recommend-users'
  axios.get(url, {
    headers: {
      host: 'www.app-echo.com',
      referer: 'http://www.app-echo.com/'
    },
    params: req.query
  }).then(response => {
    res.json(response.data)
  }).catch(e => {
    console.log('api/getRecomUser error', e)
  })
})
/* 获取名人页24小时热门名人用户的数据 */
apiRoutes.get('/getDailyHotUser', function (req, res) {
  const url = 'http://www.app-echo.com/api/famous/daily-commend-users'
  axios.get(url, {
    headers: {
      host: 'www.app-echo.com',
      referer: 'http://www.app-echo.com/'
    },
    params: req.query
  }).then(response => {
    res.json(response.data)
  }).catch(e => {
    console.log('api/getDailyHotUser error', e)
  })
})
/* 获取名人页面名人分类的 type 列表 */
apiRoutes.get('/getFamousTypeList', function (req, res) {
  const url = 'http://www.app-echo.com/api/famous/type-list'
  axios.get(url, {
    headers: {
      host: 'www.app-echo.com',
      referer: 'http://www.app-echo.com/'
    },
    params: req.query
  }).then(response => {
    res.json(response.data)
  }).catch(e => {
    console.log('api/getFamousTypeList error', e)
  })
})
/* 根据名人类别获取名人页面的名人列表 */
apiRoutes.get('/getFamousListByType', function (req, res) {
  const url = 'http://www.app-echo.com/api/famous/user-list-by-type'
  axios.get(url, {
    headers: {
      host: 'www.app-echo.com',
      referer: 'http://www.app-echo.com/'
    },
    params: req.query
  }).then(response => {
    res.json(response.data)
  }).catch(e => {
    console.log('api/getFamousListByType error', e)
  })
})
/* 获取频道页面频道标签数据 */
apiRoutes.get('/getChannelTags', function (req, res) {
  const url = 'http://www.app-echo.com/api/channel/tag'
  axios.get(url, {
    headers: {
      host: 'www.app-echo.com',
      referer: 'http://www.app-echo.com/'
    },
    params: req.query
  }).then(response => {
    res.json(response.data)
  }).catch(e => {
    console.log('api/getChannelTags error', e)
  })
})
/* 获取频道列表组件的频道列表数据 */
apiRoutes.get('/getChannelList', function (req, res) {
  const url = 'http://www.app-echo.com/api/channel/index'
  axios.get(url, {
    headers: {
      host: 'www.app-echo.com',
      referer: 'http://www.app-echo.com/'
    },
    params: req.query
  }).then(response => {
    res.json(response.data)
  }).catch(e => {
    console.log('api/getChannelList error', e)
  })
})
/* 获取频道详情信息数据 */
apiRoutes.get('/getChannelInfo', function (req, res) {
  const url = 'http://www.app-echo.com/api/channel/info'
  axios.get(url, {
    headers: {
      host: 'www.app-echo.com',
      referer: 'http://www.app-echo.com/'
    },
    params: req.query
  }).then(response => {
    res.json(response.data)
  }).catch(e => {
    console.log('api/getChannelInfo error', e)
  })
})
/* 获取 sound 详情信息 */
apiRoutes.get('/getSound', function (req, res) {
  const url = 'http://www.app-echo.com/api/sound/info'
  axios.get(url, {
    headers: {
      host: 'www.app-echo.com',
      referer: 'http://www.app-echo.com/'
    },
    params: req.query
  }).then(response => {
    res.json(response.data)
  }).catch(e => {
    console.log('api/getSound error', e)
  })
})
apiRoutes.get('/getSceneSoundList', function (req, res) {
  const url = 'http://www.app-echo.com/sound/api-infos'
  axios.get(url, {
    headers: {
      host: 'www.app-echo.com',
      referer: 'http://www.app-echo.com/'
    },
    params: req.query
  }).then(response => {
    res.json(response.data)
  }).catch(e => {
    console.log('api/getSceneSoundList error', e)
  })
})
/* 获取 mv 详情信息 */
apiRoutes.get('/getMv', function (req, res) {
  const url = 'http://www.app-echo.com/api/mv/info'
  axios.get(url, {
    headers: {
      host: 'www.app-echo.com',
      referer: 'http://www.app-echo.com/'
    },
    params: req.query
  }).then(response => {
    res.json(response.data)
  }).catch(e => {
    console.log('api/getMv error', e)
  })
})

// 本地服务器路由接口
app.use('/api', apiRoutes)

// 使用静态资源
app.use(express.static('./dist'))

// 监听端口
module.exports = app.listen(port, function (err) {
  if (err) {
    console.log('error', err)
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
})