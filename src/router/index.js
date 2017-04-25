import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'

import Cluster from '@/components/Cluster'
import AddHost from '@/components/AddHost'

import Project from '@/components/Project'
import ProInfo from '@/components/ProInfo'
import ProAdd from '@/components/ProAdd'

import Hub from '@/components/Hub'

import Apps from '@/components/Apps'
import AppsInfo from '@/components/AppsInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/cluster',
      name: 'Cluster',
      component: Cluster
    },
    {
      path: '/addhost',
      name: 'AddHost',
      component: AddHost
    },
    {
      path: '/project',
      name: 'Project',
      component: Project
    },
    {
      path: '/proadd',
      name: 'ProAdd',
      component: ProAdd
    },
    {
      path: '/proinfo/:id',
      name: 'ProInfo',
      component: ProInfo
    },
    {
      path: '/apps',
      name: 'Apps',
      component: Apps
    },
    {
      path: '/appsinfo/:id',
      name: 'AppsInfo',
      component: AppsInfo
    },
    {
      path: '/hub',
      name: 'Hub',
      component: Hub
    }
  ]
})
