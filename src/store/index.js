import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import user from './modules/User'
import sitepath from './modules/SitePath'
import mutations from './Mutations'
import actions from './Actions'
import scroll from './modules/scroll'
import projects from './modules/projects'
import machines from './modules/machines'
import projectAdd from './modules/projectAdd'
import mechineDetail from './modules/mechineDetail'
import github from './modules/github'
import pop from './modules/pop'
import navTop from './modules/navTop'
import firmData from './modules/firmData'
import permission from './modules/permission'
Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  mutations,
  actions,
  modules: {
    user,
    sitepath,
    scroll,
    projects,
    machines,
    projectAdd,
    mechineDetail,
    github,
    pop,
    navTop,
    firmData,
    permission
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
