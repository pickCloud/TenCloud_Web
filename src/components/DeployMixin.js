import StatusCode from './StatusCode.js'
export default {
  filters: {
    'mstatus' (v) {
      return StatusCode.machine[v][0]
    },
    'mclass' (v) {
      return StatusCode.machine[v][1]
    }
  },
  data: () => ({
    verdata: [],
    version: {},
    container_name: '',
    notes: {},
    isDoing: false
  }),
  methods: {
    getVerList () {
      const reload = this.$route.params.machines === undefined
      this.$Global.async('project_image', reload).getData(null, this.$route.params.name + '/versions').then(d => {
        if (d.status === 0) {
          this.verdata = d.data.map((v, i) => {
            return {
              label: v.version,
              value: v.version
            }
          })
          this.version = reload ? this.verdata[0] : this.$route.params.version
        }
      })
    },
    gomlist () {
      let temp = this.$route.params
      temp.version = this.version
      temp.container_name = this.container_name
      this.$router.replace({name: 'Machines', params: temp})
    },
    getMachineIps () {
      let temp = []
      if (this.$route.params.machines) temp = this.$route.params.machines
      return temp.map((v, i) => {
        return {
          public_ip: v.public_ip
        }
      })
    },
    startDeploy () {
      if (!/^[a-z0-9]+$/.test(this.container_name)) {
        this.$toast('容器名称仅允许英文小写字母', 'cc')
        return false
      }
      if (this.image_name === '') {
        this.$toast('容器名称不能为空', 'cc')
        return
      }
      let pdata = {
        image_name: this.$route.params.image_name + ':' + this.version.value,
        container_name: this.container_name,
        project_id: this.$route.params.id,
        ips: this.getMachineIps()
      }
      if (!pdata.ips.length === 0) {
        this.$toast('请选择机器', 'cc')
        return
      }
      this.isDoing = true
      // this.$Global.async('project_deployment', true).getData(pdata).then(d => {
      //   if (d.status === 0) {
      //     this.notes = d.data
      //     // this.$router.replace({name: 'ProjectDetail', params: {id: this.$route.params.id}})
      //   }
      //   this.$toast(d.message, 'cc')
      //   this.isDoing = false
      // })
      this.initSocket('', pdata)
    },
    initSocket (cb = null, pdata) {
      this.socket = new WebSocket(this.$Global.apis.wsURL + this.$Global.apis.project_deployment.u)
      this.socket.onopen = (event) => {
        if (cb) cb()
        // 链接开始发送参数
        this.socket.send(JSON.stringify(pdata))
      }
      this.socket.onmessage = (event) => {
        if (event.data === 'success') {
          this.notes = event.data.data
        } else {
          if (event.data !== 'open') {
            this.$toast(event.data, 'cc')
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
  computed: {
    machines () {
      return this.$route.params.machines || []
    }
  },
  created () {
    if (!this.$route.params.name) {
      this.$router.replace({name: 'ProjectDetail', params: {id: this.$route.params.id}})
    } else {
      this.image_name = this.$route.params.image_name || ''
      this.container_name = this.$route.params.container_name || ''
      this.getVerList()
      this.$store.commit('sitepath/SET_PATH', [
        {name: 'Main', cn: '主页'},
        {name: 'Projects', cn: '项目列表'},
        {name: 'ProjectDetail', cn: this.$route.params.name, params: {id: this.$route.params.id}},
        {cn: '项目部署'}
      ])
    }
  }
}
