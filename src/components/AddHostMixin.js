export default {
  data: () => ({
    sokect: null,
    token: '',
    tcmname: '',
    formdata: {
      name: '',
      ip: '',
      username: '',
      passwd: ''
    },
    isok: false,
    clusters: [],
    selectid: -1
  }),
  methods: {
    addHost () {
      console.log('add host')
    },
    selectCluster (id) {
      this.selectid = id
    },
    initClusters () {
      this.rid = this.selectid = this.$route.params.id
      if (parseInt(this.rid) === 0) {
        this.$Global.async('clusters').getData().then(d => {
          this.clusters = d.data
          this.selectid = this.clusters[0].id
        })
      }
    }
  },
  created () {
    this.initClusters()
    // this.socket = new WebSocket(this.$Global.apis.ws + '/api/server/new')
    // this.socket.onopen = (event) => {
    //   // this.socket.send('hello jong')
    // }
    // this.socket.onmessage = (event) => {
    //   if (event.data === 'success') {
    //     this.isok = true
    //     this.socket.close()
    //   } else {
    //     this.token = event.data
    //     this.cansend.push(1)
    //   }
    // }
    // // 监听Socket的关闭
    // this.socket.onclose = function (event) {
    //   console.log('Client notified socket has closed', event)
    //   this.cansend.push(1)
    // }
  },
  beforeDestroy () {
    // this.socket.close()
    // this.socket = null
  }
}
