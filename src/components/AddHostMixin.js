export default {
  data: () => ({
    sokect: null,
    token: '',
    tcmname: Math.random().toString(36).substr(2, 10),
    isok: false,
    clusters: '',
    selectid: -1,
    cansend: []
  }),
  methods: {
    addHost () {
      console.log('add host')
    },
    selectCluster (id) {
      this.selectid = id
    },
    initData (d) {
      this.clusters = d
      this.selectid = this.clusters[0].id
    }
  },
  watch: {
    cansend (n, o) {
      console.log(n)
      if (n.length === 2) {
        this.socket.send(JSON.stringify({name: this.tcmname, cluster_id: this.selectid}))
      }
    }
  },
  mounted () {
    this.socket = new WebSocket(this.$API.ws + '/api/server/new')
    // 打开Socket
    this.socket.onopen = (event) => {
      // this.socket.send('hello jong')
    }
    this.socket.onmessage = (event) => {
      if (event.data === 'success') {
        this.isok = true
        this.socket.close()
      } else {
        this.token = event.data
        this.cansend.push(1)
      }
    }
    // 监听Socket的关闭
    this.socket.onclose = function (event) {
      console.log('Client notified socket has closed', event)
    }

    if (this.$COMMON.cluster) {
      this.initData(this.$COMMON.cluster)
    } else {
      this.$http.get(this.$API.api + '/api/clusters').then(res => {
        this.initData(res.data.data)
        this.cansend.push(1)
      })
    }
  },
  beforeDestroy () {
    this.socket.close()
    this.socket = null
  }
}
