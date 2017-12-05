import axios from '../request/axios'
import Vue from 'vue'
export default {
  namespaced: true,
  state: {
    repos_idx: '0',
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
    'setLocalStorage' (state, {key, item}) {
      if (typeof item === 'object') {
        item = JSON.stringify(item)
      }
      window.localStorage.setItem(key, item)
    },
    'getLocaltion' (state, data) {
      let dataObj = {}
      if (typeof data === 'string') {
        dataObj = JSON.parse(data)
      }
      this.commit('projectAdd/setFormdata', {name: false, value: dataObj}, { root: true })
    }
  },
  actions: {
    getGitHub (store, value) {
      let getp = {url: window.location.href}
      axios.http('project_repos', getp, 'post').then(d => {
        if (d.status === 0) {
          if (value.gittip) {
            store.commit('setGittip', value.gittip)
          }
          if (value.hasGit) {
            store.commit('setHasGit', value.hasGit)
          }
          store.commit('setRepos_idx', 0)
          if (value.repos_idx) {
            store.commit('setRepos_idx', value.repos_idx + '')
          }
          store.commit('setGithubs', d.data)
          if (value.isBoolean) {
            let i = -1
            while (++i < store.state.githubs.length) {
              let v = store.state.githubs[i]
              if (v.repos_name === this.d.repos_name && v.repos_url === this.d.repos_url) {
                store.commit('setRepos_idx', i + '')
                break
              }
            }
          }
        } else {
          Vue.$toast(d.message, 'cc')
        }
      }).catch(error => {
        if (error && error.data && error.data.url) {
          window.location.href = error.data.url
        }
      })
      return {}
    },
    deleteToken () {
      axios.http('user_thumb_token', '', 'delete').then(d => {
      })
    }
  }
}
