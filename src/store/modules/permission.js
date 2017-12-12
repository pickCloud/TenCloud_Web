// import axios from '../request/axios'

export default {
  namespaced: true,
  state: {
    permissions: [],
    access_servers: [],
    access_projects: [],
    access_filehub: []
  },
  mutations: {
    setState (state, obj) {
      let idx = state[obj.name].indexOf(obj.value)
      if (idx !== -1) return
      state[obj.name].push(obj.value)
      console.log(state[obj.name])
    },
    deleteState (state, obj) {
      let idx = state[obj.name].indexOf(obj.value)
      if (idx !== -1) {
        state[obj.name].splice(idx, 1)
      }
    }
  },
  actions: {}
}
