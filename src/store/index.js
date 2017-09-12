import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import user from './modules/User'
import sitepath from './modules/SitePath'
import mutations from './Mutations'
import actions from './Actions'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  mutations,
  actions,
  modules: {
    user,
    sitepath
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
