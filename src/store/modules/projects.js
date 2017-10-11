import axios from '../request/axios'
export default {
  namespaced: true,
  state: {
    listts: []
  },
  mutations: {
    setListts (state, list) {
      state.listts.splice(0, state.listts.length)
      list.forEach(function (item) {
        state.listts.push(item)
      })
    },
    deleteItem (state, id) {
      state.listts.forEach(function (item, index) {
        if (item.id + '' === id) {
          state.listts.splice(index, 1)
        }
      })
    }
  },
  getters: {
    listts: state => state.listts
  },
  actions: {
    getProjectDetail (ctx, id) {
      return axios.http('project_del', {
        id: id
      })
    },
    getProjects (ctx, id) {
      axios.http('projects').then(d => {
        ctx.commit('setListts', d.data)
      })
    }
  }
}
