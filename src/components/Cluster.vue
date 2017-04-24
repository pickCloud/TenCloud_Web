<template>
  <div class="v-cluster">
    <div class="crumbs">
      <a class="crumbs-item" href="/">服务器</a>
      <span class="crumbs-item qingse-text">集群</span>
    </div>
    <div class="v-content">
      <div class="_btns-group">
        <span class="comb-btn waves-effect lvse" @click="addNewCluster">新增集群</span>
        <router-link class="comb-btn waves-effect qingse" :to="{ name: 'AddHost'}">添加主机</router-link>
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
              <span class="comb-btn waves-effect qingse right" @click="delCluster(1)">删除集群</span>
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
              <span class="comb-btn waves-effect qingse right" @click="delCluster(2)">删除集群</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 新增集群弹窗 -->
    <modal title="新增集群" buttons="确定,取消" buttonsClass="comb-btn lvse,comb-btn qingse" ref="addcluster" class="comb-dialog" @callback="addSure">
      <div class="_new-cluster_con">
        <div class="form-gird">
          <label class="label-control s12 m1 center-align">名称</label>
          <div class="col s12 m11">
            <input type="text" class="form-control" v-model="adddata.name">
          </div>
        </div>
        <div class="form-gird">
          <label class="label-control s12 m1 center-align">描述</label>
          <div class="col s12 m11">
            <textarea name="" class="form-control" v-model="adddata.desc"></textarea>
          </div>
        </div>
      </div>
    </modal>
    <!-- 新增集群弹窗 end -->
    <!-- 删除集群弹窗 -->
    <modal buttons="确定,取消" buttonsClass="comb-btn lvse,comb-btn qingse" ref="delcluster" class="comb-dialog mini">
      <div class="comb-dialog_info center-align red-text large"><i class="ten-icon">&#xe691;</i> <span v-html="delbody"></span></div>
    </modal>
    <!-- 删除集群弹窗 end -->
  </div>
</template>

<script>
  export default {
    name: 'Cluster',
    data () {
      return {
        adddata: {
          name: '',
          desc: ''
        },
        delbody: ''
      }
    },
    methods: {
      addNewCluster () {
        this.$refs.addcluster.show()
      },
      delCluster (id) {
        this.delbody = '您确定删除集群' + id + '吗？'
        this.$refs.delcluster.show()
      },
      addSure () {
//        console.log(this.adddata.name)
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../scss/cluster";
</style>
