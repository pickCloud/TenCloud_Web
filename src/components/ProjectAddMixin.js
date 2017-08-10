import Popper from './Poppers.js'
import {upStream} from '../Qiniu.js'

export default {
  mixins: [Popper],
  data: () => ({
    formdata: {
      name: '',
      // repos_name: '',
      // repos_url: '',
      image_name: '',
      description: '',
      mode: '0'
    },
    repos_idx: '0',
    git_tip: '绑定GitHub代码仓库',
    githubs: [],
    isEditor: false,
    editorData: {},
    btnActive: 'primary_bg grey-dark_txt',
    btnIdx: 0,
    upfile: '',
    uping: '',
    upok: false
  }),
  watch: {
    btnIdx (n, o) {
      if (n !== 0) {
        this.git_tip = 'GitHub代码仓库'
      } else {
        this.git_tip = this.githubs.length > 0 ? '重新绑定GitHub代码仓库' : '绑定GitHub代码仓库'
      }
    },
    'formdata.mode' (n, o) {
      if (n === '0') this.btnIdx = 0
    }
  },
  methods: {
    addProject () {
      if (this.btnIdx === 0) {
        let temp = this.githubs[this.repos_idx]
        if (!temp) {
          this.$toast('请先拉取来源', 'cc')
          return
        }
        if (this.formdata.name === '') {
          this.$toast('名称不能为空', 'cc')
          return
        }
        if (this.formdata.image_name === '') {
          this.$toast('镜像名称不能为空', 'cc')
          return
        }
        if (this.formdata.description === '') {
          this.$toast('描述不能为空', 'cc')
          return
        }
        this.formdata.repos_name = temp.repos_name
        this.formdata.repos_url = temp.repos_url
        this.formdata.http_url = temp.http_url
        if (this.isEditor) this.formdata.id = this.$route.params.id
      }
      if (this.btnIdx === 1) {
        if (!this.upok) {
          this.$toast('镜像还在上传中', 'cc')
          return
        }
      }

      this.$Global.async(this.isEditor ? 'project_update' : 'project_add', true).getData(this.formdata).then(d => {
        if (d.status === 0) {
          if (!this.isEditor) this.$router.push({name: 'Projects'})
          else this.$router.push({name: 'ProjectDetail', params: {id: this.$route.params.id}})
        }
        this.$toast(this.isEditor ? '修改成功' : '添加成功', 'cc')
        // console.log(d)
      }, e => {
        // this.$toast(e.response.data.message, 'cc')
      })
    },
    bindGitHub () {
      if (this.btnIdx === 0) {
        if (this.git_tip.indexOf('<img') !== -1) return
        this.getApiData()
      }
      this.btnIdx = 0
    },
    fileChange (e) {
      this.upfile = e.target
    },
    getApiData (cb) {
      this.git_tip = '<img class="vam" src="./static/img/spin.gif"></img> <span class="vam">数据加载中</span>'
      // let tips = this.popperWaiting('读取中')
      this.$Global.async('project_repos', true).getData().then(d => {
        if (d.status === 0) {
          this.githubs = d.data
          this.repos_idx = '0'
          this.git_tip = '重新绑定GitHub代码仓库'
          if (cb) cb()
        } else {
          this.$toast(d.message, 'cc')
        }
      })
    },
    upImage () {
      this.btnIdx = 1
    },
    startUpImage () {
      // console.log(this.upfile.files[0])
      let file = this.upfile.files[0]
      if (file.size > 1024 * 1024 * 1024) {
        this.$toast('镜像不能大于1G', 'cc')
        return
      }
      let formata = new FormData()
      formata.append('file', file)
      upStream({
        file: formata,
        method: this.$Global.apis['project_up_image'].m.toUpperCase(),
        url: this.$Global.apis.baseURL + this.$Global.apis['project_up_image'].u,
        ing: (d) => {
          let bfb = parseInt(d.loaded * 100 / d.total)
          this.uping = bfb + '%'
          this.$el.querySelector('.ing-box-bar').style.width = bfb + '%'
        }
      }).then(d => {
        console.log(d)
        this.upok = true
      })
    },
    downImage () {
      this.btnIdx = 2
    },
    initReposIdx () {
      let i = -1
      while (++i < this.githubs.length) {
        let v = this.githubs[i]
        if (v.repos_name === this.editorData.repos_name && v.repos_url === this.editorData.repos_url) {
          this.repos_idx = i + ''
          break
        }
      }
    },
    editorMode () {
      this.$Global.async('project_detail', true).getData(null, this.$route.params.id).then(d => {
        if (d.status === 0) {
          let temp = this.editorData = d.data[0]
          this.formdata.name = temp.name
          this.formdata.description = temp.description
          this.formdata.mode = temp.mode + ''
          this.formdata.image_name = temp.image_name
          this.getApiData(this.initReposIdx)
        }
      })
    }
  },
  computed: {
    gitLoadStyle () {
      return this.git_tip.indexOf('<img') !== -1 ? 'loading' : ''
    }
  },
  created () {
    this.isEditor = this.$route.params.id !== undefined
    if (this.isEditor) this.editorMode()
    // this.getApiData()
  }
}
