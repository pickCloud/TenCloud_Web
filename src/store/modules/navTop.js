import axios from '../request/axios'

export default {
  namespaced: true,
  state: {
    messages: [],
    companyList: [],
    companyAllList: []
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
      state.companyList.splice(0, state.companyList.length)
      data.forEach(function (item) {
        state.companyList.push(item)
      })
    },
    setAllCompany (state, data) {
      state.companyAllList.splice(0, state.companyAllList.length)
      data.forEach(function (item) {
        state.companyAllList.push(item)
      })
    }
  },
  actions: {
    getCompany (ctx, type) {
      axios.http('company_get', '', 'get', type).then(d => {
        if (type) {
          ctx.commit('setCompany', d.data)
        } else {
          ctx.commit('setAllCompany', d.data)
        }
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
        if (e.message === 'timeOut') {
          ctx.dispatch('getMessages', {id: id})
        }
      })
    }
  }
}
