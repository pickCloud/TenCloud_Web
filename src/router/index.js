import Vue from 'vue'
import Router from 'vue-router'
import Global from '../global.js'

const LayMain = r => require.ensure([], () => r(require('@/views/layout/Main')), 'laymain')
const Main = r => require.ensure([], () => r(require('@/components/Main')), 'main')
const Machines = r => require.ensure([], () => r(require('@/components/Machines')), 'machines')
const MachineDetail = r => require.ensure([], () => r(require('@/components/MachineDetail')), 'machinedetail')
const MachineAdd = r => require.ensure([], () => r(require('@/components/MachineAdd')), 'machineadd')

const AppDetail = r => require.ensure([], () => r(require('@/components/AppDetail')), 'appdetail')

const Projects = r => require.ensure([], () => r(require('@/components/Projects')), 'projects')
const ProjectAdd = r => require.ensure([], () => r(require('@/components/ProjectAdd')), 'projectadd')
const ProjectDetail = r => require.ensure([], () => r(require('@/components/ProjectDetail')), 'projectdetail')
const Build = r => require.ensure([], () => r(require('@/components/Build')), 'build')
const Deploy = r => require.ensure([], () => r(require('@/components/Deploy')), 'deploy')

const Verlist = r => require.ensure([], () => r(require('@/components/Verlist')), 'verlist')
const VerNotes = r => require.ensure([], () => r(require('@/components/VerNotes')), 'vernotes')

const Login = r => require.ensure([], () => r(require('@/views/layout/Login')), 'login')
const UserInfo = r => require.ensure([], () => r(require('@/components/UserInfo')), 'userinfo')

// const FileHub = r => require.ensure([], () => r(require('@/components/FileHub')), 'filehub')
const FileHubIn = r => require.ensure([], () => r(require('@/components/filehub/FileHubIn')), 'filehubin')
// const FileHubOut = r => require.ensure([], () => r(require('@/components/filehub/FileHubOut')), 'filehubout')

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: LayMain,
      // beforeEnter: (to, from, next) => {
      //   // if (Global.isLogin()) next()
      //   // else router.replace({name: 'Login'})
      //   // console.log(router)
      //   next()
      // },
      children: [
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
        },
        {
          path: '/build/:id',
          name: 'Build',
          meta: {level: 2},
          component: Build
        },
        {
          path: '/deploy/:id',
          name: 'Deploy',
          meta: {level: 2},
          component: Deploy
        },
        {
          path: '/verlist',
          name: 'Verlist',
          meta: {level: 2},
          component: Verlist
        },
        {
          path: '/vernotes/:id',
          name: 'VerNotes',
          meta: {level: 2},
          component: VerNotes
        },
        {
          path: '/userinfo',
          name: 'UserInfo',
          meta: {level: 2},
          component: UserInfo
        },
        {
          path: '/filehub/:id',
          name: 'FileHubIn',
          meta: {level: 1},
          component: FileHubIn
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      meta: {level: 0},
      component: Login
    }
  ]
})

router.beforeEach((to, from, next) => {
  // console.log(to)
  // console.log(from)
  // console.log(Global.isLogin)
  if (Global.isLogin === null) {
    Global.async('user_info', true).getData(null).then(d => {
      Global.isLogin = true
      if (to.name === 'Login') router.replace({name: 'Main'})
      else next()
      window.ROOT_DATA.userinfo = d.data
    })
  } else {
    if (Global.isLogin && to.name === 'Login' && from.name === null) router.replace({name: 'Main'})
    else next()
  }
})

export default router
