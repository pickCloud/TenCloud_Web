import axios from '../request/axios'

export default {
  namespaced: true,
  state: {
    messages: '',
    companyList: [],
    companyAllList: [],
    timer: ''
  },
  getters: {},
  mutations: {
    setMessages (state, data) {
      state.messages = data
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
    /* 3通过4所有 */
    getCompany (ctx, type) {
      axios.http('company_get', '', 'get', type).then(d => {
        if (type === 3) {
          ctx.commit('setCompany', d.data)
        } else if (type === 4) {
          ctx.commit('setAllCompany', d.data)
        }
      }).catch(e => {
      })
    },
    getMessages (ctx, type = 0) {
      if (type === 'closed') return ctx.commit('clearTimer')
      axios.http('message_count', '', 'get', '?status=' + type).then(d => {
        ctx.commit('setMessages', d.data.num)
        ctx.commit('setTimer', setTimeout(function () {
          ctx.dispatch('getMessages', type)
        }, 30000))
      }).catch(e => {
        if (e.message === 'timeOut') {
          ctx.dispatch('getMessages', {type: type})
        }
      })
    },
    getMessagesCount (ctx, type = 0) {
      if (type === 'closed') return ctx.commit('clearTimer')
      axios.http('message_count', '', 'get', type).then(d => {
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
