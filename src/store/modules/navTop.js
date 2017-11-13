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
        console.log(item)
        state.messages.push(item)
      })
      console.log(state.messages)
    }
  },
  actions: {
    getMessages (ctx) {
      console.log('进入方法')
      if (ctx.state.messages.length > 0) return false
      axios.http('company_get').then(d => {
        console.log('看到')
        ctx.commit('setMessages', d.data)
      }).catch(e => {
      })
    }
  }
}
