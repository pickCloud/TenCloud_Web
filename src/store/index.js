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
    github
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
