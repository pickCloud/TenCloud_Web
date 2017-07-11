import Vue from 'vue'
import Router from 'vue-router'

const Main = r => require.ensure([], () => r(require('@/components/Main')), 'main')
const Machines = r => require.ensure([], () => r(require('@/components/Machines')), 'machines')
const MachineDetail = r => require.ensure([], () => r(require('@/components/MachineDetail')), 'machinedetail')
const MachineAdd = r => require.ensure([], () => r(require('@/components/MachineAdd')), 'machineadd')

const AppDetail = r => require.ensure([], () => r(require('@/components/AppDetail')), 'appdetail')
// const MachineDetail = r => require.ensure([], () => r(require('@/components/MachineDetail')), 'machinedetail')
//
// const AddHost = r => require.ensure([], () => r(require('@/components/AddHost')), 'addhost')
//
// const Application = r => require.ensure([], () => r(require('@/components/Application')), 'application')
// const ApplicationDetail = r => require.ensure([], () => r(require('@/components/ApplicationDetail')), 'applicationdetail')
//
// const Project = r => require.ensure([], () => r(require('@/components/Project')), 'project')
// const ProDetail = r => require.ensure([], () => r(require('@/components/ProDetail')), 'prodetail')
// const ProAdd = r => require.ensure([], () => r(require('@/components/ProAdd')), 'proadd')
//
// const Hub = r => require.ensure([], () => r(require('@/components/Hub')), 'hub')
// const HubDetail = r => require.ensure([], () => r(require('@/components/HubDetail')), 'hubdetail')
// const Build = r => require.ensure([], () => r(require('@/components/Build')), 'build')
// const Deploy = r => require.ensure([], () => r(require('@/components/Deploy')), 'deploy')
//
// const FileHub = r => require.ensure([], () => r(require('@/components/FileHub')), 'filehub')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      redirect: { name: 'Machines' },
      meta: {level: 0},
      component: Main
    },
    {
      path: '/machines',
      name: 'Machines',
      meta: {level: 1},
      component: Machines
    },
    {
      path: '/machinedetail/:id',
      name: 'MachineDetail',
      meta: {level: 2},
      component: MachineDetail
    },
    {
      path: '/machineadd/:id',
      name: 'MachineAdd',
      meta: {level: 2},
      component: MachineAdd
    },
    {
      path: '/appdetail/:mid/:name/:cid',
      name: 'AppDetail',
      meta: {level: 2},
      component: AppDetail
    }
  ]
})
