import axios from '../request/axios'
export default {
  namespaced: true,
  state: {
    listts: []
  },
  mutations: {
    'getData' (state, data) {
      state.num = data
    },
    'setListts' (state, list) {
      list.forEach(function (item) {
        state.listts.push(item)
      })
    }
  },
  getters: {
    listts: state => state.listts
  },
  actions: {
    getApiData (store) {
      if (store.getters.listts.length > 0) return false
      let cid = this.clusterid = 1
      axios.http('cluster_detail', '', 'get', cid).then(d => {
        store.commit('setListts', d.data.server_list)
      })
    },
    deleteAsyn (store, delids) {
      return axios.http('server_del', {id: delids})
    }
  }
}
