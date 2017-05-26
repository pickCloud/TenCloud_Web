<template>
  <div class="cluster-details">
    <div class="crumbs">
      <span class="crumbs-item">服务器</span>
      <router-link class="crumbs-item" :to="{name:'Cluster'}">集群</router-link>
      <span class="crumbs-item qingse-text">{{ cluster.name }}详情</span>
    </div>
    <div class="panel info-panel margin-b-24">
      <div class="btns-group alter-button">
        <button class="comb-btn waves-effect lvse" @click="editorHandle" v-if="!editor">修改</button>
        <button class="comb-btn waves-effect lvse" @click="submitAlter" v-if="editor">确认</button>
        <button class="comb-btn waves-effect lvse" @click="cancelAlter" v-if="editor">取消</button>
      </div>
      <div class="info-left">
        <div class="info-icon"><img class="vam" src="../assets/cluster-avatar.png" alt=""></div>
      </div>
      <div class="info-right article">
        <h5 class="qingse-text el-editor margin-b-16" :contenteditable="editor" @input="inpChange($event,'title')">{{ title }}</h5>
        <p class="time">更新时间：{{ cluster.update_time }}</p>
        <p class="el-editor" :contenteditable="editor" @input="inpChange($event,'description')">{{ description }}</p>
      </div>
    </div>
    <div class="panel">
      <div class="btns-group">
        <router-link :to="{ name:'AddHost' }"><button type="button" class="comb-btn waves-effect lvse">添加主机</button></router-link>
        <button type="button" class="comb-btn waves-effect qingse" @click="moveMachine">迁移主机</button>
        <button type="button" class="comb-btn waves-effect hongse" @click="delMachine">删除主机</button>
        <search class="right"></search>
      </div>
      <table class="striped highlight">
        <col width="40px">
        <thead>
        <tr>
          <th><checkbox></checkbox></th>
          <th>名称</th>
          <th>IP</th>
          <th>状态</th>
          <th>地址</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="host in hosts">
          <td><checkbox></checkbox></td>
          <td>{{ host.name }}</td>
          <td>{{ host.ip }}</td>
          <td>{{ host.machine_status }}</td>
          <td>{{ host.address }}</td>
          <td>
            <router-link :to="{ name:'Machine-Details', params: { id: host.id } }" class="lvse-text table-details_btn">详情</router-link>
            <span class="hongse-text table-details_btn" @click="delMachine">删除</span>
            <span class="qingse-text table-details_btn" @click="moveMachine">迁移</span>
          </td>
        </tr>
        </tbody>
      </table>
      <div class="clearfix"><pages class="right" :allpage="5" :nowpage="1" @change="pageChange" style="display: none;"></pages></div>
    </div>
    <!-- 迁移主机 -->
    <modal title="迁移主机至" buttons="确定,取消" buttonsClass="comb-btn lvse,comb-btn qingse" ref="movemachine" class="comb-dialog mini">
      <tselect :data="clusters_to_move"></tselect>
    </modal>
    <!-- 删除主机 -->
    <modal buttons="确定,取消" buttonsClass="comb-btn lvse,comb-btn qingse" ref="delmachine" class="comb-dialog mini">
      <div class="comb-dialog_info center-align red-text large"><i class="ten-icon">&#xe691;</i> <span v-html="delbody"></span></div>
    </modal>
  </div>
</template>

<script>
export default {
  name: 'cluster-details',
  // test data
  data () {
    return {
      clusters_to_move: [],
      cluster: {},
      hosts: [],
      delbody: '',
      editor: false,
      title: '',
      description: '',
      tempEditor: {
        title: '',
        description: ''
      }
    }
  },
  methods: {
    delMachine () {
      this.delbody = '您确定删除主机吗？'
      this.$refs.delmachine.show()
    },
    moveMachine () {
      this.$refs.movemachine.show()
    },
    inpChange (e, key) {
      this.tempEditor[key] = e.target.innerHTML
    },
    editorHandle () {
      this.editor = true
      this.tempEditor.title = this.title
      this.tempEditor.description = this.description
    },
    submitAlter () {
      this.editor = false
      if (this.tempEditor.title === this.title && this.tempEditor.description === this.description) return
      this.$Global.async('cluster_update').getData({
        id: this.$route.params.id,
        name: this.tempEditor.title,
        description: this.tempEditor.description
      }).then(d => {
        this.cluster.name = this.tempEditor.title
        this.cluster.description = this.tempEditor.description
        this.$toast(d.message)
      })
    },
    cancelAlter () {
      this.editor = false
      this.title = this.cluster.name + ' '
      this.description = this.cluster.description + ' '
    },
    pageChange () {
      return
    }
  },
  mounted () {
    const cid = this.$route.params.id
    this.$Global.async('cluster_detail').getData(null, cid).then(d => {
      this.hosts = d.data.server_list

      this.clusters_to_move = []
      this.$Global.async('clusters').getData().then(d => {
        for (let key in d.data) {
          let tempd = d.data[key]
          let tempobj = {
            label: tempd.name,
            id: tempd.id
          }
          if (parseInt(tempd.id) === parseInt(cid)) {
            this.cluster = tempd
            tempobj.active = true

            this.title = tempd.name
            this.description = tempd.description
          }
          this.clusters_to_move.push(tempobj)
        }
      })
    })
  }
}
</script>

<style scoped lang="scss">
  @import "../scss/cluster-details";
  table {
    th:first-child, td:first-child {
      width: 16px;
    }
    th:last-child, td:last-child {
      width: 24%;
    }
  }
</style>
