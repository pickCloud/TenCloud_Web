import axios from 'axios'
import Vue from 'vue'
const islocal = /.+localhost.+/.test(window.location.href)
// http://10.0.1.9
const APIS = {
  // baseURL: islocal ? 'http://10.0.1.9' : 'http://47.94.18.22',
  baseURL: 'http://console.10.com',
  wsURL: islocal ? 'ws://10.0.1.9:8010' : 'ws://console.10.com',
  clusters: {u: '/api/clusters', m: 'get'},
  cluster_add: {u: '/api/cluster/new', m: 'post'},
  cluster_del: {u: '/api/cluster/del', m: 'post'},
  cluster_detail: {u: '/api/cluster/', m: 'get'},
  cluster_update: {u: '/api/cluster/update', m: 'post'},
  server_add: {u: '/api/server/new', m: 'post'},
  server_del: {u: '/api/server/del', m: 'post'},
  server_detail: {u: '/api/server/', m: 'get'},
  server_containers: {u: '/api/server/containers/', m: 'get'},
  server_update: {u: '/api/server/update', m: 'post'},
  server_migration: {u: '/api/server/migration', m: 'post'},
  server_performance: {u: '/api/server/performance', m: 'post'},
  server_start: {u: '/api/server/start/', m: 'get'},
  server_reboot: {u: '/api/server/reboot/', m: 'get'},
  server_stop: {u: '/api/server/stop/', m: 'get'},
  app_performance: {u: '/api/server/container/performance', m: 'post'},
  server_status: {u: '/api/server/', m: 'get'}, // {region_id}/{instance_id}/status
  container_start: {u: '/api/server/container/start', m: 'post'},
  container_stop: {u: '/api/server/container/stop', m: 'post'},
  container_del: {u: '/api/server/container/del', m: 'post'},
  container_detail: {u: '/api/server/', m: 'get'},
  projects: {u: '/api/projects', m: 'get'},
  project_del: {u: '/api/project/del', m: 'post'},
  project_add: {u: '/api/project/new', m: 'post'},
  project_update: {u: '/api/project/update', m: 'post'},
  project_repos: {u: '/api/repos', m: 'get'},
  project_detail: {u: '/api/project/', m: 'get'},
  project_vers: {u: '/api/project/', m: 'get'},
  project_image: {u: '/api/project/', m: 'get'},
  project_branch: {u: '/api/repos/branches?repos_name=', m: 'get'},
  project_create: {u: '/api/project/image/creation', m: 'post'},
  project_deployment: {u: '/api/project/deployment', m: 'post'}
}

class AsyncData {
  constructor (key) {
    this._data = null
    this._api = APIS.baseURL + APIS[key].u
    this._method = APIS[key].m
  }
  getData (p = null, suffix = '') {
    return new Promise((resolve, reject) => {
      if (this._data === null) {
        switch (this._method) {
          case 'post':
            if (p === null) throw new Error('post need params')
            axios.post(this._api + suffix, p).then(res => {
              if (res.status === 200) {
                this._data = res.data
                resolve(res.data)
              }
            }).catch(error => {
              Vue.prototype.$toast(error.response.data.message, 'cc')
              reject(error)
            })
            break
          case 'get':
            axios.get(this._api + suffix, p).then(res => {
              if (res.status === 200) {
                this._data = res.data
                resolve(res.data)
              }
            }).catch(error => {
              Vue.prototype.$toast(error.response.data.message, 'cc')
              reject(error)
            })
            break
        }
      } else {
        resolve(this._data)
      }
    })
  }
  set data (v) {
    this._data = v
  }
}

const Asyncs = {}

const opations = {
  apis: APIS,
  async: (key, re = false) => {
    if (!APIS.hasOwnProperty(key)) throw new Error('key: ' + key + ' is no found')
    if (!Asyncs.hasOwnProperty(key) || re) {
      Asyncs[key] = new AsyncData(key)
    }
    return Asyncs[key]
  }
}

export default opations
