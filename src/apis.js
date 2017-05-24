import axios from 'axios'

const APIS = {
  base: 'http://192.168.1.116',
  clusters: {
    list: '/api/clusters',
    add: '/api/cluster/new'
  }
}

export default {
  getApiLink (...key) {
    let temp = APIS
    key.every(function (v) {
      if (!temp.hasOwnProperty(v)) throw new Error('key：' + v + '不存在!')
      temp = temp[v]
      return temp
    })
    return APIS.base + temp
  },
  getApi (key, params = null) {
    const api = this.getApiLink.apply(this, key)
    return axios.get(api, params)
  },
  postApi (key, params = null) {
    const api = this.getApiLink.apply(this, key)
    return axios.post(api, params)
  }
}
