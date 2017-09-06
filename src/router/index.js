// import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home'
import Setting from '@/components/Setting'
import Share from '@/components/Share'
import ManageCity from '@/components/ManageCity'
import Chuanyi from '@/pages/life/Chuanyi'
import Huazhuang from '@/pages/life/Huazhuang'
import Ziwaixian from '@/pages/life/Ziwaixian'
import Yundong from '@/pages/life/Yundong'
import Ganmao from '@/pages/life/Ganmao'
import Diaoyu from '@/pages/life/Diaoyu'
import Xiche from '@/pages/life/Xiche'
import Wuran from '@/pages/life/Wuran'

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
      path: '/setting',
      name: 'Setting',
      component: Setting
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
      path: '/gaomao',
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
      path: '/wuran',
      name: 'Wuran',
      component: Wuran
    }
  ]
})

export default router
