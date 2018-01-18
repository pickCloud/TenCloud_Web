import Vue from 'vue'
import Router from 'vue-router'
import axios from '../store/request/axios'

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
const Resign = r => require.ensure([], () => r(require('@/views/layout/Resign')), 'resign')
const LostPassWord = r => require.ensure([], () => r(require('@/views/layout/lostPassWord')), 'lostPassWord')
const UserInfo = r => require.ensure([], () => r(require('@/components/UserInfo')), 'userinfo')

// const FileHub = r => require.ensure([], () => r(require('@/components/FileHub')), 'filehub')
const FileHubIn = r => require.ensure([], () => r(require('@/components/filehub/FileHubIn')), 'filehubin')
const ChartHistory = r => require.ensure([], () => r(require('@/components/ChartHistory')), 'charthistory')
const ChartContainerHistory = r => require.ensure([], () => r(require('@/components/ChartContainerHistory')), 'chartcontainerhistory')
// const FileHubOut = r => require.ensure([], () => r(require('@/components/filehub/FileHubOut')), 'filehubout')
const FirmData = r => require.ensure([], () => r(require('@/components/FirmData')), 'FirmData')
const FirmAdd = r => require.ensure([], () => r(require('@/components/FirmAdd')), 'FirmAdd')
const CompleteData = r => require.ensure([], () => r(require('@/components/CompleteData')), 'CompleteData')
const LoginInvite = r => require.ensure([], () => r(require('@/views/layout/LoginInvite')), 'LoginInvite')
const Messages = r => require.ensure([], () => r(require('@/components/Messages')), 'Messages')

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
          path: '/machines/detail/:id',
          name: 'MachineDetail',
          meta: {level: 2},
          component: MachineDetail
        },
        {
          path: '/machines/add/:id',
          name: 'MachineAdd',
          meta: {level: 2},
          component: MachineAdd
        },
        {
          path: '/machines/appdetail/:mid/:name/:cid',
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
          path: '/projects/add',
          name: 'ProjectAdd',
          meta: {level: 2},
          component: ProjectAdd
        },
        {
          path: '/projects/editor/:id',
          name: 'ProjectEditor',
          meta: {level: 2},
          component: ProjectAdd
        },
        {
          path: '/projects/detail/:id',
          name: 'ProjectDetail',
          meta: {level: 2},
          component: ProjectDetail
        },
        {
          path: '/projects/build/:id',
          name: 'Build',
          meta: {level: 2},
          component: Build
        },
        {
          path: '/projects/deploy/:id',
          name: 'Deploy',
          meta: {level: 2},
          component: Deploy
        },
        {
          path: '/projects/verlist/:id',
          name: 'Verlist',
          meta: {level: 2},
          component: Verlist
        },
        {
          path: '/projects/vernotes/:v',
          name: 'VerNotes',
          meta: {level: 2},
          component: VerNotes
        },
        {
          path: '/userinfo',
          name: 'UserInfo',
          meta: {level: 1},
          component: UserInfo
        },
        {
          path: '/userinfo/firmAdd',
          name: 'FirmAdd',
          meta: {level: 2},
          component: FirmAdd
        },
        {
          path: '/filehub/:id',
          name: 'FileHubIn',
          meta: {level: 1},
          component: FileHubIn
        },
        {
          path: '/firmData/:id',
          name: 'FirmData',
          meta: {level: 1},
          component: FirmData
        },
        {
          path: '/:name/charthistory/:id',
          name: 'ChartHistory',
          meta: {level: 2},
          component: ChartHistory
        },
        {
          path: '/:name/chartcontainerhistory/:id',
          name: 'ChartContainerHistory',
          meta: {level: 2},
          component: ChartContainerHistory
        },
        {
          path: '/invite',
          name: 'CompleteData',
          meta: {level: 0},
          component: CompleteData
        },
        {
          path: '/messages',
          name: 'Messages',
          meta: {level: 0},
          component: Messages
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      meta: {level: 0},
      component: Login
    },
    {
      path: '/loginInvite',
      name: 'LoginInvite',
      meta: {level: 0},
      component: LoginInvite
    },
    {
      path: '/resign',
      name: 'Resign',
      meta: {level: 0},
      component: Resign
    },
    {
      path: '/lostPassword',
      name: 'LostPassword',
      meta: {level: 0},
      component: LostPassWord
    }
  ]
})
var browser = {
  versions: (function () {
    let u = navigator.userAgent
    return {
      trident: u.indexOf('Trident') > -1,
      presto: u.indexOf('Presto') > -1,
      webKit: u.indexOf('AppleWebKit') > -1,
      gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1,
      mobile: !!u.match(/AppleWebKit.*Mobile.*/),
      ios: !!u.match(/\(i[^]+( U)? CPU.+Mac OS X/),
      android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
      iPhone: u.indexOf('iPhone') > -1,
      iPad: u.indexOf('iPad') > -1,
      webApp: u.indexOf('Safari') === -1,
      souyue: u.indexOf('souyue') > -1,
      superapp: u.indexOf('superapp') > -1,
      weixin: u.toLowerCase().indexOf('micromessenger') > -1,
      Safari: u.indexOf('Safari') > -1
    }
  }()),
  language: (navigator.browserLanguage || navigator.language).toLowerCase()
}
let isInvite = /invite\?code/.test(window.location)
let appurl = 'tencloud://' + window.location.hash.split('/')[1]
router.beforeEach((to, from, next) => {
  if (browser.versions.ios && isInvite) {
    return (window.location.href = appurl)
  } else if (browser.versions.android && isInvite) {
    return (window.location.href = appurl)
  }
  if (to.name === 'Login' && to.query.next) {
    window.nextUrl = to.query.next
  }
  if (to.name === 'CompleteData' && to.query.code) {
    window.nextInviteCode = to.query.code
  }
  if (axios.isLogin === null) {
    axios.http('user_info', '', 'get', '', false).then(d => {
      axios.isLogin = true
      if (to.name === 'Login') router.replace({name: 'Main'})
      else next()
      window.ROOT_DATA.userinfo = d.data
    })
  } else {
    if (axios.isLogin && to.name === 'Login' && from.name === null) router.replace({name: 'Main'})
    else {
      if (window.nextInviteCode && to.name === 'Login') {
        router.replace({name: 'LoginInvite'})
      } else next()
    }
  }
})

export default router
