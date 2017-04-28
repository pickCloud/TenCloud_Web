import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'

import Cluster from '@/components/Cluster'
import ClusterDetails from '@/components/cluster-details'
import MachineDetails from '@/components/machine-details'
import AddHost from '@/components/AddHost'

import Project from '@/components/Project'
import ProInfo from '@/components/ProInfo'
import ProAdd from '@/components/ProAdd'
import ProDeploy from '@/components/ProDeploy'
import ProBuild from '@/components/ProBuild'

import Hub from '@/components/Hub'
import Hubup from '@/components/Hubup'
import HubInfo from '@/components/HubInfo'
import FileHub from '@/components/FileHub'
import FileDetails from '@/components/file-details'

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
      path: '/cluster-details/:id',
      name: 'Cluster-Details',
      component: ClusterDetails
    },
    {
      path: '/machine-details',
      name: 'Machine-Details',
      component: MachineDetails
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
