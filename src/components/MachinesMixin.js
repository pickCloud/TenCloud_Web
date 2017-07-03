const MAP = {
  'Pending': ['准备中', 'primary_bg alpha-black_txt', 'run'],
  'Stopped': ['已停止', 'pink_bg alpha-black_txt', 'stop'],
  'Starting': ['启动中', 'primary_bg alpha-black_txt', 'run'],
  'Running': ['运行中', 'green-l_bg alpha-black_txt', 'run'],
  'Stopping': ['停止中', 'pink_bg alpha-black_txt', 'stop'],
  'Deleted': ['已释放', 'pink_bg alpha-black_txt', 'stop']
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
    },
    'mclass' (v) {
      return MAP[v][1]
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
      let i = -1
      let temp = []
      while (++i < this.hosts.length) {
        let v = this.hosts[i]
        if (ids.indexOf(v.id + '') !== -1) temp.push(v.name)
      }
      return temp
    },
    delMachine (id) {
      const h = this.$createElement
      let delids = this.hostids
      if (id !== -1) delids = [id + '']
      if (delids.length === 0) {
        this.$toast('请选择要删除的主机', 'cc')
      } else {
        this.$confirm({
          theme: 'comb-msg comb-msg-del mini',
          hasClose: false,
          content: h('div', [
            h('img', {attrs: {src: './static/img/error_icon.png', class: 'vam m-r16'}}),
            h('span', {attrs: {class: 'vam'}}, '您确定删除主机' + this.getNameById(delids).join(',') + '吗？')
          ]),
          buttons: [
            {label: '确定', theme: ''},
            {label: '取消', theme: ''}
          ]
        }, (msg, ...arg) => {
          if (arg[0] === 0) {
            this.$Global.async('server_del', true).getData({
              id: delids
            }).then(d => {
              if (d.status === 0) {
                this.getApiData()
              }
              this.$toast(d.message, 'cc')
            })
          }
          msg.actionPopper(false)
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
        this.$confirm({
          title: '主机迁移',
          theme: 'comb-msg mini',
          hasClose: false,
          content: h('m-select', {
            props: {
              listClass: 'hover',
              sizeh: 40,
              datas: this.clusters_to_move
            },
            on: {
              input: (v) => {
                this.select_move = v
                // console.log(v)
              }
            }
          }),
          buttons: [
            {label: '确定', theme: 'comb-btn lvse hover'},
            {label: '取消', theme: 'comb-btn qingse hover'}
          ]
        }, (msg, ...arg) => {
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
      const cid = this.clusterid = 1
      this.$Global.async('cluster_detail', true).getData(null, cid).then(d => {
        this.hosts = d.data.server_list
        this.cluster = d.data.basic_info[0]

        this.clusters_to_move = []
        // this.$Global.async('clusters').getData().then(d => {
        //   for (let key in d.data) {
        //     let tempd = d.data[key]
        //     let tempobj = {
        //       label: tempd.name,
        //       value: tempd.id
        //     }
        //     if (parseInt(tempd.id) === parseInt(cid)) {
        //       tempobj.active = true
        //     }
        //     this.clusters_to_move.push(tempobj)
        //   }
        // })
      })
    }
  },
  created () {
    this.getApiData()
  }
}
