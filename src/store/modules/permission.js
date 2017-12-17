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
      let idx = state[obj.name].indexOf(obj.value + '')
      if (idx !== -1) return
      state[obj.name].push(obj.value)
      console.log(state[obj.name])
    },
    deleteState (state, obj) {
      let idx = state[obj.name].indexOf(obj.value)
      if (idx !== -1) {
        state[obj.name].splice(idx, 1)
      }
    },
    clearState (state) {
      state.permissions = []
      state.access_servers = []
      state.access_filehub = []
      state.access_projects = []
    },
    changeState (state, data) {
      if (data.permissions) {
        state.permissions = data.permissions.split(',')
      }
      if (data.access_servers) {
        state.access_servers = data.access_servers.split(',')
      }
      if (data.access_filehub) {
        state.access_filehub = data.access_filehub.split(',')
      }
      if (data.access_projects) {
        state.access_projects = data.access_projects.split(',')
      }
    }
  },
  actions: {}
}
