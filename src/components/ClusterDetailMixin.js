const MAP = {
  'Pending': ['准备中', 'lvse-text', 'run'],
  'Stopped': ['已停止', 'hongse-text', 'stop'],
  'Starting': ['启动中', 'lvse-text', 'run'],
  'Running': ['运行中', 'lvse-text', 'run'],
  'Stopping': ['停止中', 'hongse-text', 'stop'],
  'Deleted': ['已释放', 'hongse-text', 'stop']
}
export default {
  data: () => ({
    clusters_to_move: [],
    select_move: {},
    cluster: {},
    hosts: [],
    editor: false,
    tempEditor: {
      title: '',
      description: ''
    },
    hostids: [],
    selectAll: false,
    clusterid: -1
  }),
  filters: {
    'mstatus' (v) {
      return MAP[v][0]
    }
  },
  watch: {
    selectAll (n, o) {
      if (n) {
        this.hosts.forEach((v, i) => {
          let key = v.id + ''
          if (this.hostids.indexOf(key) === -1) this.hostids.push(key)
        })
      } else {
        this.hostids = []
      }
      // console.log(this.hostids)
    }
  },
  methods: {
    getNameById (ids) {
      return this.hosts.map((v, i) => {
        if (ids.indexOf(v.id + '') !== -1) return v.name
      })
    },
    delMachine (id) {
      const h = this.$createElement
      let delids = this.hostids
      if (id !== -1) delids = [id + '']
      if (delids.length === 0) {
        this.$toast('请选择要删除的主机', 'cc')
      } else {
        this.$message({
          theme: 'comb-msg comb-msg-del mini',
          hasClose: false,
          content: h('m-icon', {attrs: {icon: 'icon-zhuyi-yin'}}, '您确定删除主机' + this.getNameById(delids).join(',') + '吗？'),
          buttons: [
            {label: '确定', theme: 'comb-btn lvse hover'},
            {label: '取消', theme: 'comb-btn qingse hover'}
          ],
          callback: (msg, ...arg) => {
            if (arg[0] === 0) {
              this.$Global.async('server_deletion', true).getData({
                id: delids
              }).then(d => {
                if (d.status === 0) {
                  this.getApiData()
                }
                this.$toast(d.message, 'cc')
              })
            }
            msg.actionPopper(false)
          }
        })
      }
    },
    moveMachine (id) {
      const h = this.$createElement
      let delids = this.hostids
      if (id !== -1) delids = [id + '']
      if (delids.length === 0) {
        this.$toast('请选择要迁移的主机', 'cc')
      } else {
        this.$message({
          title: '主机迁移',
          theme: 'comb-msg mini',
          hasClose: false,
          content: h('m-select', {
            props: {
              listClass: 'hover',
              datas: this.clusters_to_move
            },
            on: {
              input: (v) => {
                this.select_move = v
                console.log(v)
              }
            }
          }),
          buttons: [
            {label: '确定', theme: 'comb-btn lvse hover'},
            {label: '取消', theme: 'comb-btn qingse hover'}
          ],
          callback: (msg, ...arg) => {
            if (arg[0] === 0 && this.select_move.id !== this.$route.params.id) {
              this.$Global.async('server_migration', true).getData({
                cluster_id: this.select_move.value,
                id: delids
              }).then(d => {
                if (d.status === 0) {
                  for (let i = 0; i < this.hosts.length; i++) {
                    if (delids.indexOf(this.hosts[i].id + '') !== -1) {
                      this.hosts.splice(i, 1)
                      break
                    }
                  }
                }
                this.$toast(d.message, 'cc')
              })
            }
            msg.actionPopper(false)
          }
        })
      }
    },
    inpChange (e, key) {
      this.tempEditor[key] = e.target.innerHTML
    },
    editorHandle () {
      this.editor = true
      this.tempEditor.title = this.cluster.name
      this.tempEditor.description = this.cluster.description
    },
    submitAlter () {
      this.editor = false
      if (this.tempEditor.title === this.cluster.name && this.tempEditor.description === this.cluster.description) return
      this.$Global.async('cluster_update', true).getData({
        id: this.$route.params.id,
        name: this.tempEditor.title,
        description: this.tempEditor.description
      }).then(d => {
        this.cluster.name = this.tempEditor.title
        this.cluster.description = this.tempEditor.description
        this.$toast(d.message, 'cc')
      })
    },
    cancelAlter () {
      this.editor = false
      this.cluster.name = this.cluster.name + ' '
      this.cluster.description = this.cluster.description + ' '
    },
    getApiData () {
      const cid = this.clusterid = this.$route.params.id
      this.$Global.async('cluster_detail', true).getData(null, cid).then(d => {
        this.hosts = d.data.server_list
        this.cluster = d.data.basic_info[0]

        this.clusters_to_move = []
        this.$Global.async('clusters').getData().then(d => {
          for (let key in d.data) {
            let tempd = d.data[key]
            let tempobj = {
              label: tempd.name,
              value: tempd.id
            }
            if (parseInt(tempd.id) === parseInt(cid)) {
              tempobj.active = true
            }
            this.clusters_to_move.push(tempobj)
          }
        })
      })
    }
  },
  created () {
    this.getApiData()
  }
}
