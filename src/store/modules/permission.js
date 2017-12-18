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
      state.permissions = []
      state.access_servers = []
      state.access_filehub = []
      state.access_projects = []
      if (data.permissions) {
        if (Array.isArray(data.permissions)) {
          let arrys = []
          data.permissions.forEach(item => {
            arrys.push(item.id + '')
          })
          state.permissions = arrys
          console.log(state.permissions)
        } else {
          state.permissions = data.permissions.split(',')
        }
      }
      if (data.access_servers) {
        if (Array.isArray(data.access_servers)) {
          let arrys = []
          data.access_servers.forEach(item => {
            arrys.push(item.id || item.sid + '')
          })
          state.access_servers = arrys
        } else {
          state.access_servers = data.access_servers.split(',')
        }
      }
      if (data.access_filehub) {
        if (Array.isArray(data.access_filehub)) {
          let arrys = []
          data.access_filehub.forEach(item => {
            arrys.push(item.id + '')
          })
          state.access_filehub = arrys
        } else {
          state.access_filehub = data.access_filehub.split(',')
        }
      }
      if (data.access_projects) {
        if (Array.isArray(data.access_projects)) {
          let arrys = []
          data.access_projects.forEach(item => {
            arrys.push(item.id + '')
          })
          state.access_projects = arrys
        } else {
          state.access_projects = data.access_projects.split(',')
        }
      }
    }
  },
  actions: {}
}
