import Poppers from '../Poppers.js'
import Selects from '../Selects.js'
import CreateNewVue from '../popx/CreateNewFile.vue'

export default {
  mixins: [Poppers, Selects],
  data: () => ({
    now_page: 1,
    page_number: 2,
    total_page: 20,
    pid: null,
    listts: []
  }),
  methods: {
    delFile (id) {
      let delids = this.selects
      if (id !== -1) delids = [id + '']
      if (delids.length === 0) {
        this.$toast('请选择要删除的文件', 'cc')
      } else {
        this.popperDelete('您确定要删除文件' + this.getAttrById(delids, 'filename').join(',') + '吗？', _ => {
          this.$Global.async('server_del', true).getData({
            id: delids
          }).then(d => {
            if (d.status === 0) {
              this.getApiData()
            }
            this.$toast(d.message, 'cc')
          })
        })
      }
    },
    getApiData () {
      this.$Global.async('file_list', true).getData({
        now_page: this.now_page,
        page_number: this.page_number
      }).then(d => {
        this.listts = d.data.files
        // console.log(d.data.files)
      })
    },
    getPagesNumber () {
      this.$Global.async('file_pages').getData(null).then(d => {
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
          console.log(payload)
          if (payload.type === 'sure') {
            this.$Global.async('file_create_dir', true).getData({
              pid: this.pid,
              dir_name: payload.filename
            }).then(d => {
              console.log(d)
            })
          } else {
            next()
          }
        }
      })
    },
    clipboard (d) {
      if (d.action === 'copy') {
        this.$toast('复制成功', 'cc')
      }
    }
  },
  created () {
    this.getPagesNumber()
    this.getApiData()
    this.pid = this.$route.params.id
  }
}
