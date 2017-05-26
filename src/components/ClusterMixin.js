export default {
  methods: {
    addNewCluster () {
      const h = this.$createElement
      this.$message({
        title: '新增集群',
        theme: 'comb-msg',
        shadow: 'z-d4',
        hasClose: false,
        content: h('div', {attrs: {class: '_new-cluster_con'}}, [
          h('div', {attrs: {class: 'row'}}, [
            h('div', {attrs: {class: 'col xs-12 md-1 text-center label-control'}}, '名称'),
            h('div', {attrs: {class: 'col xs-12 md-11 text-center'}}, [
              h('input', {
                attrs: {type: 'text', class: 'form-control'},
                on: {
                  input: event => {
                    this.newdata.name = event.target.value
                  }
                }
              })
            ])
          ]),
          h('div', {attrs: {class: 'row'}}, [
            h('div', {attrs: {class: 'col xs-12 md-1 text-center label-control'}}, '描述'),
            h('div', {attrs: {class: 'col xs-12 md-11 text-center'}}, [
              h('textarea', {
                attrs: {class: 'form-control'},
                on: {
                  input: event => {
                    this.newdata.description = event.target.value
                  }
                }
              })
            ])
          ])
        ]),
        buttons: [
          {label: '确定', theme: 'comb-btn lvse hover'},
          {label: '取消', theme: 'comb-btn qingse hover'}
        ],
        callback: (msg, ...arg) => {
          if (arg[0] === 0) {
            if (this.newdata.name === '') {
              this.$toast('集群名称不能为空', 'cc')
              return
            }
            this.$Global.async('cluster_add').getData(this.newdata).then(d => {
              this.$toast(d.message, 'cc')
              this.clusters.push({
                id: d.data.id,
                name: this.newdata.name,
                description: this.newdata.description,
                update_time: d.data.update_time
              })
            })
          }
          msg.actionPopper(false)
        }
      })
    },
    delCluster (id, name) {
      const h = this.$createElement
      this.$message({
        theme: 'comb-msg comb-msg-del mini',
        hasClose: false,
        content: h('m-icon', {attrs: {icon: 'icon-zhuyi-yin'}}, '您确定删除集群' + name + '吗？'),
        buttons: [
          {label: '确定', theme: 'comb-btn lvse hover'},
          {label: '取消', theme: 'comb-btn qingse hover'}
        ],
        callback: (msg, ...arg) => {
          if (arg[0] === 0) {
            this.$Global.async('cluster_del').getData({id: [id]}).then(d => {
              if (d.status === 0) {
                for (let i = 0; i < this.clusters.length; i++) {
                  if (this.clusters[i].id === id) {
                    this.clusters.splice(i, 1)
                    break
                  }
                }
              }
              this.$toast(d.message)
              this.delid = null
            })
          }
          msg.actionPopper(false)
        }
      })
    },
    delSure (...arg) {
      if (arg[0] === 0 && this.delid !== null) {
        this.$Global.async('cluster_del').getData({id: [this.delid]}).then(d => {
          if (d.status === 0) {
            for (let i = 0; i < this.clusters.length; i++) {
              if (this.clusters[i].id === this.delid) {
                this.clusters.splice(i, 1)
                break
              }
            }
          }
          this.$toast(d.message)
          this.delid = null
        })
      }
    }
  }
}
