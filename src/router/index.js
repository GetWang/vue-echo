import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import SoundHot from 'components/sound-hot/sound-hot'
import SoundOrigin from 'components/sound-origin/sound-origin'
import MVHot from 'components/mv-hot/mv-hot'
import Famous from 'components/famous/famous'
import FamousList from 'components/famous-list/famous-list'
import Channel from 'components/channel/channel'
import ChannelDetail from 'components/channel-detail/channel-detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Root',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/rank',
      name: 'Rank',
      redirect: '/rank/sound-hot'
    },
    {
      path: '/rank/sound-hot',
      name: 'SoundHot',
      component: SoundHot
    },
    {
      path: '/rank/sound-origin',
      name: 'SoundOrigin',
      component: SoundOrigin
    },
    {
      path: '/rank/mv-hot',
      name: 'MVHot',
      component: MVHot
    },
    {
      path: '/famous',
      name: 'Famous',
      component: Famous
    },
    {
      path: '/famous/:listName',
      name: 'FamousList',
      component: FamousList
    },
    {
      path: '/channel',
      name: 'Channel',
      component: Channel
    },
    {
      path: '/channel/:id',
      name: 'ChannelDetail',
      component: ChannelDetail
    }
  ]
})
