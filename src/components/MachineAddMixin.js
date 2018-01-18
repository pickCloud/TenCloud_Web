import apis from '../store/request/api'
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
    clusters: [],
    notes: []
  }),
  methods: {
    addHost () {
      if (!this.socket) {
        this.initSocket(_ => {
          console.log(this.socket)
          this.sendHostData()
        })
      } else {
        this.sendHostData()
      }
    },
    sendHostData () {
      if (this.formdata.name === '') {
        this.$toast('机器名称不能为空', 'cc')
        return
      }
      if (this.formdata.public_ip === '') {
        this.$toast('ip不能为空', 'cc')
        return
      }
      this.socket.send(JSON.stringify(this.formdata))
      this.status = 'waiting'
    },
    selectCluster (id) {
      this.formdata.cluster_id = id
    },
    initClusters () {
      this.rid = this.formdata.cluster_id = this.$route.params.id
      if (parseInt(this.rid) === 0) {
        this.$axios.http('clusters').then(d => {
          this.clusters = d.data
          this.formdata.cluster_id = this.clusters[0].id
          // this.initSocket()
        })
      } else {
        this.initSocket()
      }
    },
    initSocket (cb = null) {
      this.socket = new WebSocket(apis.wsURL + apis.server_add.u + '?Cid=' + this.$axios.token.cid + '&Authorization=' + this.$axios.token.token)
      this.socket.onopen = (event) => {
        if (cb) cb()
        console.log(event)
      }
      this.socket.onmessage = (event) => {
        this.notes.push(event.data)
        if (event.data === 'success') {
          this.$router.push({name: 'Machines'})
        } else {
          if (event.data !== 'open') {
            this.status = 'save'
            // this.$toast(event.data, 'cc')
          }
        }
      }
      // 监听Socket的关闭
      this.socket.onclose = (event) => {
        if (this.timeoutajax) clearTimeout(this.timeoutajax)
        this.socket = null
        console.log('socket has closed')
        // console.log('Client notified socket has closed', event)
      }
      if (this.timeoutajax) clearTimeout(this.timeoutajax)
      this.timeoutajax = setTimeout(_ => {
        this.status = 'error'
        this.$toast('异常，请联系客服', 'cc')
        this.socket.close()
        clearTimeout(this.timeoutajax)
      }, 10 * 60 * 1000)
    }
  },
  created () {
    this.initClusters()
  },
  beforeDestroy () {
    if (this.socket) this.socket.close()
  }
}
