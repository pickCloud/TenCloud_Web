import Vue from 'vue'
import Router from 'vue-router'

const Main = r => require.ensure([], () => r(require('@/components/Main')), 'main')
const Cluster = r => require.ensure([], () => r(require('@/components/Cluster')), 'cluster')

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
    }
  ]
})
