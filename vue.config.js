const path = require('path')
const bodyParser = require('body-parser')
const axios = require('axios')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  devServer: {
    before(app) {
      /* 获取首页回声榜和每日精选数据 */
      app.get('/api/getRankChoose', function (req, res) {
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
      app.get('/api/getFamousUser', function (req, res) {
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
      app.get('/api/getHomeAlbum', function (req, res) {
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
      app.get('/api/getTodayRecom', function (req, res) {
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
      app.get('/api/rank/sound-hot', function (req, res) {
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
      app.get('/api/rank/sound-origin', function (req, res) {
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
      app.get('/api/rank/mv-hot', function (req, res) {
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
      app.get('/api/getTopUser', function (req, res) {
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
      app.get('/api/getLatestUser', function (req, res) {
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
      app.get('/api/getRecomUser', function (req, res) {
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
      app.get('/api/getDailyHotUser', function (req, res) {
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
      app.get('/api/getFamousTypeList', function (req, res) {
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
      app.get('/api/getFamousListByType', function (req, res) {
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
      app.get('/api/getChannelTags', function (req, res) {
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
      app.get('/api/getChannelList', function (req, res) {
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
      app.get('/api/getChannelInfo', function (req, res) {
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
      app.get('/api/getSound', function (req, res) {
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
      app.get('/api/getSceneSoundList', function (req, res) {
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
      app.get('/api/getMv', function (req, res) {
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
    }
  },
  chainWebpack (config) {
    config.resolve.alias
      .set('components', resolve('src/components'))
      .set('common', resolve('src/common'))
      .set('api', resolve('src/api'))
      .set('base', resolve('src/base'))
  },
  publicPath: ''
}
