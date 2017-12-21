import axios from '../request/axios'

export default {
  namespaced: true,
  state: {
    employees: [],
    module: []
  },
  mutations: {
    changeEmployees (state, d) {
      state.employees = d
    },
    changeModule (state, d) {
      state.module = d
    }
  },
  actions: {
    getEmployees (ctx, id) {
      axios.http('company_employe', '', 'get', id + '/employees').then(d => {
        ctx.commit('changeEmployees', d.data)
      })
    },
    getModule (ctx, id) {
      axios.http('company_template', '', 'get', id).then(d => {
        ctx.commit('changeModule', d.data)
      })
    }
  }
}
