import axios from '../request/axios'

export default {
  namespaced: true,
  state: {
    messages: [],
    companyList: [],
    companyAllList: [],
    timer: ''
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
    },
    setTimer (state, timer) {
      state.timer = timer
    },
    clearTimer (state) {
      clearTimeout(state.timer)
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
    getMessages (ctx, type = 0) {
      axios.http('message_get', '', 'get', type).then(d => {
        ctx.commit('setMessages', d.data)
        ctx.commit('setTimer', setTimeout(function () {
          ctx.dispatch('getMessages', type)
        }, 30000))
      }).catch(e => {
        if (e.message === 'timeOut') {
          ctx.dispatch('getMessages', {type: type})
        }
      })
    }
  }
}
