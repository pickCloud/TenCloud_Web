import axios from '../request/axios'

export default {
  namespaced: true,
  state: {
    employees: []
  },
  mutations: {
    changeEmployees (state, d) {
      state.employees = d
    }
  },
  actions: {
    getEmployees (ctx, id) {
      axios.http('company_employe', '', 'get', id + '/employees').then(d => {
        ctx.commit('changeEmployees', d.data)
      })
    }
  }
}
