import Vue from 'vue'
import Router from 'vue-router'

const Main = r => require.ensure([], () => r(require('@/components/Main')), 'main')
const Cluster = r => require.ensure([], () => r(require('@/components/Cluster')), 'cluster')
const ClusterDetail = r => require.ensure([], () => r(require('@/components/ClusterDetail')), 'clusterdetail')
const MachineDetail = r => require.ensure([], () => r(require('@/components/MachineDetail')), 'machinedetail')

const AddHost = r => require.ensure([], () => r(require('@/components/AddHost')), 'addhost')

const Application = r => require.ensure([], () => r(require('@/components/Application')), 'application')
const ApplicationDetail = r => require.ensure([], () => r(require('@/components/ApplicationDetail')), 'applicationdetail')

const Project = r => require.ensure([], () => r(require('@/components/Project')), 'project')
const ProDetail = r => require.ensure([], () => r(require('@/components/ProDetail')), 'prodetail')
const ProAdd = r => require.ensure([], () => r(require('@/components/ProAdd')), 'proadd')

const Hub = r => require.ensure([], () => r(require('@/components/Hub')), 'hub')
const HubDetail = r => require.ensure([], () => r(require('@/components/HubDetail')), 'hubdetail')
const Build = r => require.ensure([], () => r(require('@/components/Build')), 'build')
const Deploy = r => require.ensure([], () => r(require('@/components/Deploy')), 'deploy')

const FileHub = r => require.ensure([], () => r(require('@/components/FileHub')), 'filehub')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      redirect: { name: 'Cluster' },
      meta: {level: 0},
      component: Main
    },
    {
      path: '/cluster',
      name: 'Cluster',
      meta: {level: 1},
      component: Cluster
    },
    {
      path: '/clusterdetail/:id',
      name: 'ClusterDetail',
      meta: {level: 2},
      component: ClusterDetail
    },
    {
      path: '/machinedetail/:id',
      name: 'MachineDetail',
      meta: {level: 3},
      component: MachineDetail
    },
    {
      path: '/addhost/:id',
      name: 'AddHost',
      meta: {level: 2},
      component: AddHost
    },
    {
      path: '/application',
      name: 'Application',
      meta: {level: 1},
      component: Application
    },
    {
      path: '/appdetail/:id',
      name: 'ApplicationDetail',
      meta: {level: 2},
      component: ApplicationDetail
    },
    {
      path: '/project',
      name: 'Project',
      meta: {level: 1},
      component: Project
    },
    {
      path: '/proadd',
      name: 'ProAdd',
      meta: {level: 2},
      component: ProAdd
    },
    {
      path: '/prodetail/:id',
      name: 'ProDetail',
      meta: {level: 2},
      component: ProDetail
    },
    {
      path: '/hub',
      name: 'Hub',
      meta: {level: 1},
      component: Hub
    },
    {
      path: '/hubdetail/:id',
      name: 'HubDetail',
      meta: {level: 2},
      component: HubDetail
    },
    {
      path: '/deploy/:id',
      name: 'Deploy',
      meta: {level: 2},
      component: Deploy
    },
    {
      path: '/build/:id',
      name: 'Build',
      meta: {level: 2},
      component: Build
    },
    {
      path: '/filehub',
      name: 'FileHub',
      meta: {level: 1},
      component: FileHub
    }
  ]
})
