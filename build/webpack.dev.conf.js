'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')
// 加载 axios 模块
const axios = require('axios')

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,

  // these devServer options should be customized in /config/index.js
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
            referer: 'http://www.app-echo.com'
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
            referer: 'http://www.app-echo.com'
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
            referer: 'http://www.app-echo.com'
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
            referer: 'http://www.app-echo.com'
          },
          params: req.query
        }).then(response => {
          res.json(response.data)
        }).catch(e => {
          console.log('api/getTopUser error', e)
        })
      })
    },
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
      ],
    },
    hot: true,
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay
      ? { warnings: false, errors: true }
      : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll,
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.dev.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})
