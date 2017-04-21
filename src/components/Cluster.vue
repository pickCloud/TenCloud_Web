<template>
  <div class="v-cluster">
    <div class="crumbs">
      <a class="crumbs-item" href="/">服务器</a>
      <span class="crumbs-item qingse-text">集群</span>
    </div>
    <div class="v-content">
      <div class="_btns-group">
        <span class="comb-btn waves-effect lvse" @click="addNewCluster">新增集群</span>
        <span class="comb-btn waves-effect qingse" @click="addNewHost">添加主机</span>
      </div>
      <div class="row _list-group">
        <div class="col m12 l6 xl4">
          <div class="_list-con">
            <div class="_list-con_title center-align qingse-text">集群名称</div>
            <div class="_list-con_desc center-align grey-text lighten-5">集群的描述描述描述描述描述描述描述描述描述</div>
            <div class="_list-con_quan center-align">
              <percentage :used="2" :free="10" :lineWidth="20" :width="190" :height="190"></percentage>
            </div>
            <ul class="_list-con_infos">
              <li><i class="color-block qingse"></i> 使用：2GB</li>
              <li><i class="color-block zise"></i> 空余：10GB</li>
              <li>更新时间：2017年01月05日</li>
            </ul>
            <div class="_list-con_btns">
              <span class="comb-btn waves-effect lvse ">查看详情</span>
              <span class="comb-btn waves-effect qingse right">删除集群</span>
            </div>
          </div>
        </div>
        <div class="col m12 l6 xl4">
          <div class="_list-con">
            <div class="_list-con_title center-align qingse-text">集群名称</div>
            <div class="_list-con_desc center-align grey-text lighten-5">集群的描述描述描述描述描述描述描述描述描述</div>
            <div class="_list-con_quan center-align">
              <percentage :used="10" :free="60" :lineWidth="20" :width="190" :height="190"></percentage>
            </div>
            <ul class="_list-con_infos">
              <li><i class="color-block qingse"></i> 使用：10GB</li>
              <li><i class="color-block zise"></i> 空余：60GB</li>
              <li>更新时间：2017年01月05日</li>
            </ul>
            <div class="_list-con_btns">
              <span class="comb-btn waves-effect lvse ">查看详情</span>
              <span class="comb-btn waves-effect qingse right">删除集群</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <modal title="新增集群" buttons="确定,取消" buttonsClass="comb-btn lvse,comb-btn qingse" ref="addcluster" class="comb-dialog">
      <div class="_new-cluster_con">
        <div class="form-group">
          <label class="form-label">名称</label>
          <input type="text" class="form-input">
        </div>
        <div class="form-group">
          <label>描述</label>
          <textarea name="" class="form-textarea"></textarea>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
  import Percentage from '../tenui/packages/percentage/src/main.vue'
  import Modal from '../tenui/packages/modal/src/main.vue'

  export default {
    name: 'Cluster',
    data () {
      return {}
    },
    methods: {
      addNewCluster () {
        this.$refs.addcluster.show()
      },
      addNewHost () {
        console.log('add new host')
      }
    },
    components: {Percentage, Modal}
  }
</script>

<style scoped lang="scss">
  @import "../scss/cluster";
</style>
