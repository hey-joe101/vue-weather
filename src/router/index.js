// import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home'
import Chuanyi from '@/pages/life/Chuanyi'
import Huazhuang from '@/pages/life/Huazhuang'
import Ziwaixian from '@/pages/life/Ziwaixian'
import Yundong from '@/pages/life/Yundong'
import Ganmao from '@/pages/life/Ganmao'
import Diaoyu from '@/pages/life/Diaoyu'
import Xiche from '@/pages/life/Xiche'
import Kongtiao from '@/pages/life/Kongtiao'
import Share from '@/pages/more/Share'
import ManageCity from '@/pages/more/ManageCity'
import Settings from '@/pages/more/Settings'
import EarlyWarn from '@/pages/more/EarlyWarn'

// Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/earlyWarn',
      name: 'EarlyWarn',
      component: EarlyWarn
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    },
    {
      path: '/share',
      name: 'Share',
      component: Share
    },
    {
      path: '/manageCity',
      name: 'ManageCity',
      component: ManageCity
    },
    {
      path: '/chuanyi',
      name: 'Chuanyi',
      component: Chuanyi
    },
    {
      path: '/huazhuang',
      name: 'Huazhuang',
      component: Huazhuang
    },
    {
      path: '/ziwaixian',
      name: 'Ziwaixian',
      component: Ziwaixian
    },
    {
      path: '/yundong',
      name: 'Yundong',
      component: Yundong
    },
    {
      path: '/ganmao',
      name: 'Ganmao',
      component: Ganmao
    },
    {
      path: '/diaoyu',
      name: 'Diaoyu',
      component: Diaoyu
    },
    {
      path: '/xiche',
      name: 'Xiche',
      component: Xiche
    },
    {
      path: '/kongtiao',
      name: 'Kongtiao',
      component: Kongtiao
    }
  ]
})

export default router
