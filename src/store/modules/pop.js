// import axios from '../request/axios'
export default {
  namespaced: true,
  state: {
    pop_changePassword: false,
    pop_all: 0,
    pop_params: {
      cid: ''
    }
  },
  getters: {
  },
  mutations: {
    setPopState (state, obj) {
      console.log(obj)
      state[obj.name] = obj.value
    }
  },
  actions: {
  }
}
