// import axios from '../request/axios'
export default {
  namespaced: true,
  state: {
    pop_changePassword: false
  },
  getters: {
  },
  mutations: {
    setPopState (state, obj) {
      state[obj.name] = obj.value
    }
  },
  actions: {
  }
}
