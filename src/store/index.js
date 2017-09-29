import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import user from './modules/User'
import sitepath from './modules/SitePath'
import mutations from './Mutations'
import actions from './Actions'
import scroll from './modules/scroll'
import pubstate from './modules/pubState'
import projectsState from './modules/projectsState'
import machines from './modules/machines'
import projectAdd from './modules/projectAdd'
Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  mutations,
  actions,
  modules: {
    user,
    sitepath,
    scroll,
    pubstate,
    projectsState,
    machines,
    projectAdd
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
