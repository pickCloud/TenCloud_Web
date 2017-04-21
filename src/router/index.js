import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Cluster from '@/components/Cluster'
import Project from '@/components/Project'
import Hub from '@/components/Hub'
import Apps from '@/components/Apps'

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
      path: '/project',
      name: 'Project',
      component: Project
    },
    {
      path: '/hub',
      name: 'Hub',
      component: Hub
    },
    {
      path: '/apps',
      name: 'Apps',
      component: Apps
    }
  ]
})
