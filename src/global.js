import axios from 'axios'

let clusterList = null

const opations =  {
  apis: {
    baseURL: 'http://192.168.1.116',
    wsURL: 'ws://192.168.1.116:8010',
    clusters: '/api/clusters',
    cluster_add: '/api/cluster/new',
    cluster_del: '/api/cluster/del',
    cluster_detail: '/api/cluster/detail',
    cluster_update: '/api/cluster/update',
    server_add: '/api/server/migration',
    server_del: '/api/server/deletion',
    server_detail: '/api/server/detail',
    server_update: '/api/server/modification'
  },
  clusters: (up = false) => {
    if (!up && clusterList !== null) {
      return clusterList
    } else {
      axios.get(opations.apis.baseURI + opations.apis.clusters).then(res => {
        //
      })
    }
    console.log(1)
  }
}

export default opations
