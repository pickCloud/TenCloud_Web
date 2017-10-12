import dlist from './piece/datalist/Main.vue'
export default {
  data: () => ({
    verdata: [],
    branchs: [],
    branch: '1',
    isDoing: false,
    isOpen: false,
    notes: [],
    version: {
      version: ''
    }
  }),
  methods: {
    scroll (e) {
      console.log(e)
    },
    openIntro () {
      this.isOpen = !this.isOpen
    },
    getVerList () {
      this.$Global.async('project_vers', true).getData(null, this.$route.params.name + '/versions').then(d => {
        if (d.status === 0) {
          this.verdata = d.data
          // console.log(d)
        }
      })
    },
    getBranch () {
      this.$Global.async('project_branch', true).getData({repos_name: this.$route.params.repos_name}, '').then(d => {
        if (d.status === 0) {
          this.branchs = d.data
          this.branch = this.branchs[0].branch_name
        }
      })
    },
    startBuild () {
      if (this.branchs.length === 0) return
      let pdata = {
        prj_name: this.$route.params.name,
        image_name: this.$route.params.image_name,
        version: (this.version.version + '').replace(/(^\s+)|(\s+$)/g, ''),
        branch_name: this.branch,
        repos_url: this.$route.params.repos_url
      }
      if (pdata.version === '') {
        this.$toast('请输入版本号', 'cc')
        return
      }
      this.isDoing = true
      // this.$Global.async('project_create', true).getData(pdata).then(d => {
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
      this.socket = new WebSocket(this.$Global.apis.wsURL + this.$Global.apis.project_create.u)
      this.socket.onopen = (event) => {
        if (cb) cb()
        // 链接开始发送参数
        this.socket.send(JSON.stringify(pdata))
      }
      this.socket.onmessage = (event) => {
        if (event.data === 'open') {
          this.notes.push('start')
        } else {
          this.notes.push(event.data)
        }
        // document.getElementById('scroll').scrollTop = document.getElementById('scroll').scrollHeight
      }
      // 监听Socket的关闭
      this.socket.onclose = (event) => {
        if (this.timeoutajax) clearTimeout(this.timeoutajax)
        this.socket = null
        this.isDoing = !this.isDoing
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
    if (!this.$route.params.repos_url) {
      this.$router.replace({name: 'ProjectDetail', params: {id: this.$route.params.id}})
    } else {
      this.getVerList()
      this.getBranch()
      this.$store.commit('sitepath/SET_PATH', [
        {name: 'Main', cn: '主页'},
        {name: 'Projects', cn: '项目列表'},
        {name: 'ProjectDetail', cn: this.$route.params.name, params: {id: this.$route.params.id}},
        {cn: '项目构建'}
      ])
    }
  },
  destroy () {
    this.socket.onclose()
  },
  components: {
    dlist
  }
}
