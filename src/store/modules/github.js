import axios from '../request/axios'
import Vue from 'vue'
export default {
  namespaced: true,
  state: {
    repos_idx: 0,
    githubs: [],
    gittip: '绑定GitHub代码仓库',
    hasGit: '',
    data: ''
  },
  mutations: {
    'setGithubs' (state, data) {
      // state.githubs.splice(0, state.githubs.length)
      if (state.githubs.length > 0) return false
      data.forEach(function (item) {
        state.githubs.push(item)
      })
    },
    'setRepos_idx' (state, data) {
      state.repos_idx = data
    },
    'setGittip' (state, data) {
      console.log(data)
      state.gittip = data
    },
    'setHasGit' (state, data) {
      state.hasGit = data
    },
    'setData' (state, data) {
      state.data = data
    },
    initReposIdx (state) {
      let i = -1
      while (++i < this.githubs.length) {
        let v = this.githubs[i]
        if (v.repos_name === this.data.repos_name && v.repos_url === this.data.repos_url) {
          state.repos_idx = i + ''
          break
        }
      }
    }
  },
  actions: {
    getGitHub (store, value) {
      let getp = {url: window.location.href}
      axios.http('project_repos', getp).then(d => {
        if (d.status === 0) {
          if (value.gittip) {
            store.commit('setGittip', value.gittip)
          }
          if (value.hasGit) {
            store.commit('setHasGit', value.hasGit)
          }
          store.commit('setRepos_idx', 0)
          if (value.repos_idx) {
            store.commit('setRepos_idx', value.repos_idx)
          }
          store.commit('setGithubs', d.data)
        } else {
          Vue.$toast(d.message, 'cc')
        }
      }).catch(error => {
        if (error && error.response.data.data.url) {
          window.location.href = error.response.data.data.url
        }
      })
      return {}
    }
  }
}
