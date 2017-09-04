import DownloadJS from 'downloadjs'
import Tool from '../../Tool.js'
import Poppers from '../Poppers.js'
import Selects from '../Selects.js'
import CreateNewVue from '../popx/CreateNewFile.vue'
import Preview from '../popx/Preview.vue'

export default {
  mixins: [Poppers, Selects],
  data: () => ({
    now_page: 1,
    page_number: 20,
    total_page: 1,
    pid: null,
    file_dir: [],
    listts: []
  }),
  filters: {
    'fsize' (d) {
      return Tool.filesize(d)
    }
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route' () {
      this.pid = parseInt(this.$route.params.id)
      this.now_page = 1

      if (this.pid !== 0) {
        this.file_dir.push([this.pid, this.$route.params.filename])
      } else {
        this.file_dir = []
      }

      this.getPagesNumber()
      this.getApiData()
    }
  },
  methods: {
    delFile (id) {
      let delids = this.selects
      if (id !== -1) delids = [id + '']
      if (delids.length === 0) {
        this.$toast('请选择要删除的文件', 'cc')
      } else {
        this.popperDelete('您确定要删除文件' + this.getAttrById(delids, 'filename').join(',') + '吗？', _ => {
          this.$Global.async('file_del', true).getData({
            file_ids: delids
          }, '', false).then(d => {
            if (d.status === 0) {
              this.selects = []
              this.getApiData()
            }
            this.$toast(d.message, 'cc')
          }, e => {
            let errorids = e.response.data.data.file_ids
            let errornames = this.getAttrById(errorids, 'filename').join(',')
            this.$toast('您不是【' + errornames + '】的所有者，不能删除', 'cc')
            this.getApiData()
          })
        })
      }
    },
    downFile (id) {
      let delids = this.selects
      if (id !== -1) delids = [id + '']
      if (delids.length === 0) {
        this.$toast('请选择要下载的文件', 'cc')
      } else {
        let downlist = this.getAttrById(delids, 'url')
        let namelist = this.getAttrById(delids, 'filename')
        downlist.forEach((v, i) => {
          let ajax = new XMLHttpRequest()
          ajax.open('GET', v, true)
          ajax.responseType = 'blob'
          ajax.withCredentials = window.isLoacal
          ajax.onload = function (e) {
            DownloadJS(e.target.response, namelist[i])
          }
          ajax.send()
        })
      }
    },
    getApiData () {
      this.selects = []
      this.$Global.async('file_list', true).getData({
        file_id: this.pid,
        now_page: this.now_page,
        page_number: this.page_number
      }).then(d => {
        this.listts = d.data
        // console.log(d.data.files)
      })
    },
    getPagesNumber () {
      this.$Global.async('file_pages').getData(null, this.pid + '/pages').then(d => {
        // console.log(d)
        this.total_page = Math.ceil(d.data / this.page_number)
      })
    },
    numChange (n) {
      this.now_page = n
      this.getApiData()
    },
    createNew () {
      this.$Popx({
        popper: CreateNewVue,
        data: {
          title: '新建文件夹'
        },
        callback: (type, payload, next) => {
          if (payload.type === 'sure') {
            this.$Global.async('file_create_dir', true).getData({
              pid: this.pid,
              dir_name: payload.filename
            }).then(d => {
              this.listts.push(d.data[0])
              next()
            })
          } else {
            next()
          }
        }
      })
    },
    preview (d) {
      this.$Popx({
        popper: Preview,
        data: d
      })
    },
    copyUrl (p) {
      return new Promise((resolve, reject) => {
        this.$Global.async('file_download', true).getData({
          file_ids: [p]
        }).then(d => {
          resolve(d.data.urls[0])
        }, e => {
          reject(e)
        })
      })
    },
    clipboard (d) {
      if (d.action === 'copy') {
        this.$toast('复制成功', 'cc')
      }
    },
    fileChange (e) {
      console.log(e.target.files)
      if (e.target.files.length > 0) {
        let len = e.target.files.length
        let i = -1
        let temp = []
        while (++i < len) {
          temp.push({
            type: 'upload',
            file: e.target.files[i],
            pid: this.pid,
            cb: (d) => {
              this.getApiData()
            }
          })
        }
        this.$Task.addTask(temp)
        e.target.value = ''
      }
    },
    filePathChange (d, i) {
      this.file_dir.splice(i)
      this.$router.push({name: 'FileHubIn', params: {id: d[0], filename: d[1]}})
    },
    trClick (d) {
      if (d.type === 1) {
        this.$router.push({name: 'FileHubIn', params: {id: d.id, filename: d.filename}})
      }
    }
  },
  created () {
    this.pid = parseInt(this.$route.params.id)
    if (!this.$route.params.filename && this.pid !== 0) {
      this.$router.replace({name: 'FileHubIn', params: {id: 0}})
    } else {
      this.getPagesNumber()
      this.getApiData()
    }
  }
}
