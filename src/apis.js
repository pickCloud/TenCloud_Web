import axios from 'axios'

const APIS = {
  base: 'http://localhost:3000',
  clusters: {
    list: '/api/clusters'
  }
}

export default {
  $http: axios,
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
    return this.$http.get(api, params)
  }
}
