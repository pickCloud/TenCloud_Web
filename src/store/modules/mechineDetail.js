import axios from '../request/axios'
export default {
  namespaced: true,
  state: {
    // baseInfo: {
    //   cluster_id: -1,
    //   cluster_name: ''
    // },
    // businessInfo: {
    //   contract: {},
    //   provider: ''
    // },
    // sysInfo: {
    //   config: {}
    // },
    applists: [],
    operations: []
  },
  getters: {
    // baseInfo: state => state.baseInfo,
    // businessInfo: state => state.businessInfo,
    // sysInfo: state => state.sysInfo,
    applists: state => state.applists,
    operations: state => state.operations
  },
  mutations: {
    // 'setBaseInfo' (state, data) {
    //   state.baseInfo = data
    // },
    // 'setBusinessInfo' (state, data) {
    //   state.businessInfo = data
    // },
    // 'setSysInfo' (state, data) {
    //   state.sysInfo = data
    // },
    'setApplists' (state, list) {
      if (list === null) return false
      state.applists.splice(0, state.applists.length)
      list.forEach(function (item) {
        state.applists.push(item)
      })
    },
    'setOperations' (state, list) {
      if (list === null) return false
      state.operations.splice(0, state.operations.length)
      list.forEach(function (item) {
        state.operations.push(item)
      })
    }
  },
  actions: {
    getServerDetail (ctx, id) {
      return axios.http('server_detail', '', 'get', id)
    },
    getServerContainers (ctx, id) {
      axios.http('server_containers', '', 'get', id).then(d => {
        if (d.status === 0) {
          ctx.commit('setApplists', d.data)
        }
      })
    },
    getServerOperation (ctx, id) {
      axios.http('server_operation', '', 'get', id).then(d => {
        if (d.status === 0) {
          ctx.commit('setOperations', d.data)
        }
      })
    }
  }
}