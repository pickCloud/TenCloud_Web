import axios from '../request/axios'

export default {
  namespaced: true,
  state: {
    messages: []
  },
  getters: {},
  mutations: {
    setMessages (state, data) {
      state.messages.splice(0, state.messages.length)
      data.forEach(function (item) {
        state.messages.push(item)
      })
    }
  },
  actions: {
    getMessages (ctx) {
      if (ctx.state.messages.length > 0) return false
      axios.http('company_get').then(d => {
        ctx.commit('setMessages', d.data)
      }).catch(e => {
      })
    }
  }
}
