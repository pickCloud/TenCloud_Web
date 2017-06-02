export default {
  data: () => ({
    sokect: null,
    tcmname: '',
    formdata: {
      name: '',
      public_ip: '',
      username: '',
      passwd: '',
      cluster_id: 0
    },
    status: 'save',
    clusters: []
  }),
  methods: {
    addHost () {
      if (this.socket) {
        console.log(this.formdata)
        if (this.formdata.name === '') {
          this.$toast('机器名称不能为空', 'cc')
          return
        }
        if (this.formdata.public_ip === '') {
          this.$toast('public_ip不能为空', 'cc')
          return
        }
        this.socket.send(JSON.stringify(this.formdata))
        this.status = 'waiting'
      }
    },
    selectCluster (id) {
      this.formdata.cluster_id = id
    },
    initClusters () {
      this.rid = this.formdata.cluster_id = this.$route.params.id
      if (parseInt(this.rid) === 0) {
        this.$Global.async('clusters').getData().then(d => {
          this.clusters = d.data
          this.formdata.cluster_id = this.clusters[0].id
          this.initSocket()
        })
      } else {
        this.initSocket()
      }
    },
    initSocket () {
      this.socket = new WebSocket(this.$Global.apis.wsURL + this.$Global.apis.server_add.u)
      this.socket.onopen = (event) => {}
      this.socket.onmessage = (event) => {
        if (event.data === 'success') {
          window.location.href = '/#/cluster-details/' + this.formdata.cluster_id
        } else {
          if (event.data !== 'open') {
            this.status = 'save'
            this.$toast(event.data)
          }
        }
        // console.log(event)
      }
      // 监听Socket的关闭
      this.socket.onclose = function (event) {
        console.log('Client notified socket has closed', event)
      }
    }
  },
  created () {
    this.initClusters()
  },
  beforeDestroy () {
    if (this.socket) {
      this.socket.close()
      this.socket = null
    }
  }
}
