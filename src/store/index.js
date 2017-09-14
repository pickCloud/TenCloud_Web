import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import user from './modules/User'
import sitepath from './modules/SitePath'
import mutations from './Mutations'
import actions from './Actions'
import scroll from './modules/scroll'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  mutations,
  actions,
  modules: {
    user,
    sitepath,
    scroll
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
