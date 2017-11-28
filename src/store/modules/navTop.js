import axios from '../request/axios'

export default {
  namespaced: true,
  state: {
    messages: [],
    company: []
  },
  getters: {},
  mutations: {
    setMessages (state, data) {
      state.messages.splice(0, state.messages.length)
      if (!Array.isArray(data)) return false
      data.forEach(function (item) {
        state.messages.push(item)
      })
    },
    setCompany (state, data) {
      state.company.splice(0, state.company.length)
      data.forEach(function (item) {
        state.company.push(item)
      })
    }
  },
  actions: {
    getCompany (ctx) {
      axios.http('company_get').then(d => {
        ctx.commit('setCompany', d.data)
      }).catch(e => {
      })
    },
    getMessages (ctx, id) {
      axios.http('message_get', '', 'get', '?' + id).then(d => {
        ctx.commit('setMessages', d.data)
        setTimeout(function () {
          ctx.dispatch('getMessages', id)
        }, 30000)
      }).catch(e => {
        if (e.data.message === 'timeOut') {
          ctx.dispatch('getMessages', {id: id})
        }
      })
    }
  }
}
