import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'

const Cluster = r => require.ensure([], () => r(require('@/components/Cluster')), 'cluster')
const ClusterDetails = r => require.ensure([], () => r(require('@/components/cluster-details')), 'cluster')
const MachineDetails = r => require.ensure([], () => r(require('@/components/machine-details')), 'cluster')
const AddHost = r => require.ensure([], () => r(require('@/components/AddHost')), 'cluster')

const Project = r => require.ensure([], () => r(require('@/components/Project')), 'project')
const ProInfo = r => require.ensure([], () => r(require('@/components/ProInfo')), 'project')
const ProAdd = r => require.ensure([], () => r(require('@/components/ProAdd')), 'project')
const ProDeploy = r => require.ensure([], () => r(require('@/components/ProDeploy')), 'project')
const ProBuild = r => require.ensure([], () => r(require('@/components/ProBuild')), 'project')

const Hub = r => require.ensure([], () => r(require('@/components/Hub')), 'hub')
const Hubup = r => require.ensure([], () => r(require('@/components/Hubup')), 'hub')
const HubInfo = r => require.ensure([], () => r(require('@/components/HubInfo')), 'hub')
const FileHub = r => require.ensure([], () => r(require('@/components/FileHub')), 'filehub')
const FileDetails = r => require.ensure([], () => r(require('@/components/file-details')), 'filehub')

const Apps = r => require.ensure([], () => r(require('@/components/Apps')), 'apps')
const AppsInfo = r => require.ensure([], () => r(require('@/components/AppsInfo')), 'apps')

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
      path: '/cluster-details/:id',
      name: 'Cluster-Details',
      component: ClusterDetails
    },
    {
      path: '/machine-details/:id',
      name: 'Machine-Details',
      component: MachineDetails
    },
    {
      path: '/addhost/:id',
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
      path: '/prodeploy/:id',
      name: 'ProDeploy',
      component: ProDeploy
    },
    {
      path: '/probuild/:id',
      name: 'ProBuild',
      component: ProBuild
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
    },
    {
      path: '/hubup',
      name: 'Hubup',
      component: Hubup
    },
    {
      path: '/hubinfo/:id',
      name: 'HubInfo',
      component: HubInfo
    },
    {
      path: '/filehub',
      name: 'FileHub',
      component: FileHub
    },
    {
      path: '/file-details/:id',
      name: 'File-Details',
      component: FileDetails
    }
  ]
})
