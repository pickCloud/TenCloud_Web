import axios from '../request/axios'
export default {
  namespaced: true,
  state: {
    listts: []
  },
  mutations: {
    'setListts' (state, list) {
      state.listts.splice(0, state.listts.length)
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
      // if (store.getters.listts.length > 0) return false
      // let cid = store.rootState.user.currentUser.cid
      console.log(store.rootState.user.currentUser)
      // if (!cid) return
      axios.http('cluster_detail', '', 'get', 1).then(d => {
        store.commit('setListts', d.data.server_list)
      })
    },
    deleteAsyn (store, delids) {
      return axios.http('server_del', {id: delids})
    }
  }
}
