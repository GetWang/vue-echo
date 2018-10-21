import Vue from 'vue'
import Router from 'vue-router'
import MHome from '@/components/m-home/m-home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MHome',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'MHome',
      component: MHome
    }
  ]
})
