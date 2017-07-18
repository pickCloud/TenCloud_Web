import Vue from 'vue'
import Router from 'vue-router'

const Main = r => require.ensure([], () => r(require('@/components/Main')), 'main')
const Machines = r => require.ensure([], () => r(require('@/components/Machines')), 'machines')
const MachineDetail = r => require.ensure([], () => r(require('@/components/MachineDetail')), 'machinedetail')
const MachineAdd = r => require.ensure([], () => r(require('@/components/MachineAdd')), 'machineadd')

const AppDetail = r => require.ensure([], () => r(require('@/components/AppDetail')), 'appdetail')

const Projects = r => require.ensure([], () => r(require('@/components/Projects')), 'projects')
const ProjectAdd = r => require.ensure([], () => r(require('@/components/ProjectAdd')), 'projectadd')
const ProjectDetail = r => require.ensure([], () => r(require('@/components/ProjectDetail')), 'projectdetail')

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
    },
    {
      path: '/projects',
      name: 'Projects',
      meta: {level: 1},
      component: Projects
    },
    {
      path: '/projectadd',
      name: 'ProjectAdd',
      meta: {level: 2},
      component: ProjectAdd
    },
    {
      path: '/projecteditor/:id',
      name: 'ProjectEditor',
      meta: {level: 2},
      component: ProjectAdd
    },
    {
      path: '/projectdetail/:id',
      name: 'ProjectDetail',
      meta: {level: 2},
      component: ProjectDetail
    }
  ]
})
