import axios from 'axios'
const islocal = /.+localhost.+/.test(window.location.href)

const APIS = {
  baseURL: islocal ? 'http://192.168.1.121' : 'http://47.94.18.22',
  wsURL: islocal ? 'ws://192.168.1.121:8010' : 'ws://47.94.18.22',
  clusters: {u: '/api/clusters', m: 'get'},
  cluster_add: {u: '/api/cluster/new', m: 'post'},
  cluster_del: {u: '/api/cluster/del', m: 'post'},
  cluster_detail: {u: '/api/cluster/', m: 'get'},
  cluster_update: {u: '/api/cluster/update', m: 'post'},
  server_add: {u: '/api/server/migration', m: 'post'},
  server_del: {u: '/api/server/deletion', m: 'post'},
  server_detail: {u: '/api/server/detail', m: 'get'},
  server_update: {u: '/api/server/modification', m: 'post'}
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
            })
            break
          case 'get':
            axios.get(this._api + suffix, p).then(res => {
              if (res.status === 200) {
                this._data = res.data
                resolve(res.data)
              }
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
  async: (key) => {
    if (!APIS.hasOwnProperty(key)) throw new Error('key: ' + key + ' is no found')
    if (!Asyncs.hasOwnProperty(key)) {
      Asyncs[key] = new AsyncData(key)
    }
    return Asyncs[key]
  }
}

export default opations
