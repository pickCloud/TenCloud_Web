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
    /* 1拒绝, 2审核中, 3通过, 4创始人, 5待加入，6获取通过的，以及作为创始人的公司列表, 7获取所有和该用户相关的公司列表 */
    getCompany (ctx, type) {
      axios.http('company_get', '', 'get', type).then(d => {
        if (type === 6) {
          ctx.commit('setCompany', d.data)
        } else if (type === 7) {
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
