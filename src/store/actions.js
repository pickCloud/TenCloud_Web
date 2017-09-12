import axios from 'axios'

const islocal = window.isLoacal = /.+localhost.+/.test(window.location.href)
if (islocal) axios.defaults.withCredentials = true

export default {
  'LOAD_DATA' (p) {
    return axios(p)
  }
}
