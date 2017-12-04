// import axios from '../request/axios'

export default {
  namespaced: true,
  state: {
    btnIndex: 0,
    btnIndexSec: 0
  },
  mutations: {
    setBtnIndex (state, index) {
      state.btnIndex = index
    },
    setBtnIndexSec (state, index) {
      state.btnIndexSec = index
    }
  },
  actions: {}
}
