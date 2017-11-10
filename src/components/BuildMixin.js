import dlist from './piece/datalist/Main.vue'
import Poppers from './Poppers.js'
export default {
  mixins: [Poppers],
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
      this.$Global.async('project_branch', true).getData({repos_name: this.$route.params.repos_name, url: window.location.href}, '').then(d => {
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
        repos_url: this.$route.params.repos_url,
        project_id: this.$route.params.id
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
      let scrolldiv = document.getElementById('scroll')
      this.socket.onopen = (event) => {
        if (cb) cb()
        // 链接开始发送参数
        this.socket.send(JSON.stringify(pdata))
      }
      this.socket.onmessage = (event) => {
        if (event.data === 'open') {
          this.notes.push('start')
        } else if (event.data === 'success') {
          let that = this
          this.popperInfo('构建成功，你可以进行项目部署了', function () {
            that.$router.replace({name: 'ProjectDetail', params: {id: that.$route.params.id}})
          })
          this.isDoing = false
        } else if (event.data === 'failure') {
          this.popperInfo('构建失败')
          this.isDoing = false
        } else {
          this.notes.push(event.data)
          scrolldiv.scrollTop = scrolldiv.scrollHeight
        }
      }
      // 监听Socket的关闭
      this.socket.onclose = (event) => {
        if (this.timeoutajax) clearTimeout(this.timeoutajax)
        this.socket = null
        this.isDoing = false
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
