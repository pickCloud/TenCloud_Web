export default {
  namespaced: true,
  state: {
    paths: []
  },
  mutations: {
    'SET_PATH' (state, payload) {
      state.paths = payload
    },
    'SPLICE' (state, payload) {
      if (Array.isArray(payload)) state.paths.splice.apply(state.paths, payload)
      else state.paths.push(payload)
    }
  }
}
