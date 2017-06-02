import Vue from 'vue'
import Router from 'vue-router'

const Main = r => require.ensure([], () => r(require('@/components/Main')), 'main')
const Cluster = r => require.ensure([], () => r(require('@/components/Cluster')), 'cluster')
const ClusterDetail = r => require.ensure([], () => r(require('@/components/ClusterDetail')), 'clusterdetail')
const MachineDetail = r => require.ensure([], () => r(require('@/components/MachineDetail')), 'machinedetail')

const AddHost = r => require.ensure([], () => r(require('@/components/AddHost')), 'addhost')

const Application = r => require.ensure([], () => r(require('@/components/Application')), 'application')
const ApplicationDetail = r => require.ensure([], () => r(require('@/components/ApplicationDetail')), 'applicationdetail')

const Hub = r => require.ensure([], () => r(require('@/components/Hub')), 'hub')

const FileHub = r => require.ensure([], () => r(require('@/components/FileHub')), 'filehub')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      redirect: { name: 'Cluster' },
      component: Main
    },
    {
      path: '/cluster',
      name: 'Cluster',
      component: Cluster
    },
    {
      path: '/clusterdetail/:id',
      name: 'ClusterDetail',
      component: ClusterDetail
    },
    {
      path: '/machinedetail/:id',
      name: 'MachineDetail',
      component: MachineDetail
    },
    {
      path: '/addhost/:id',
      name: 'AddHost',
      component: AddHost
    },
    {
      path: '/application',
      name: 'Application',
      component: Application
    },
    {
      path: '/appdetail/:id',
      name: 'ApplicationDetail',
      component: ApplicationDetail
    },
    {
      path: '/hub',
      name: 'Hub',
      component: Hub
    },
    {
      path: '/filehub',
      name: 'FileHub',
      component: FileHub
    }
  ]
})
