<template>
  <div class="cluster">
    <div class="crumbs">
      <span class="crumbs-item">服务器</span>
      <span class="crumbs-item qingse-text">集群</span>
    </div>
    <div class="v-content">
      <div class="btns-group">
        <m-btn class="comb-btn waves-effect lvse hover" @click.native="addNewCluster">新增集群</m-btn>
        <m-btn class="comb-btn waves-effect qingse hover" href="/">添加主机</m-btn>
      </div>
      <m-row :gutter="16">
        <m-col class="xs-12 sm-6 md-4 cluster-col" v-for="(cluster, key) in clusters" :key="key">
          <div class="_list-con">
            <div class="_list-con_title text-center qingse-text">{{ cluster.name }}</div>
            <div class="_list-con_desc text-center grey-text lighten-5">{{ cluster.description }}</div>
            <!--<div class="_list-con_quan text-center">-->
            <!--<percentage :used="cluster.used" :free="cluster.free" :lineWidth="20" :width="190" :height="190"></percentage>-->
            <!--</div>-->
            <ul class="_list-con_infos">
              <!--<li><i class="color-block qingse"></i> 使用：{{ cluster.used }}GB</li>-->
              <!--<li><i class="color-block zise"></i> 空余：{{ cluster.free }}GB</li>-->
              <li>更新时间：{{ cluster.update_time }}</li>
            </ul>
            <div class="_list-con_btns">
              <m-btn :to="{ name: 'Cluster-Details', params:{id:cluster.id} }" class="comb-btn waves-effect lvse hover">查看详情</m-btn>
              <m-btn class="comb-btn waves-effect qingse right hover" @click.native="delCluster(cluster.id, cluster.name)">删除集群</m-btn>
            </div>
          </div>
        </m-col>
      </m-row>
    </div>
  </div>
</template>

<script>
  import ClusterMixin from './ClusterMixin.js'
  export default {
    name: 'Clusters',
    mixins: [ClusterMixin],
    data: () => ({
      newdata: {
        name: '',
        description: ''
      },
      delbody: '',
      clusters: []
    }),
    created () {
      this.$Global.async('clusters').getData().then(d => {
        this.clusters = d.data
      })
    }
  }
</script>

<style scoped lang="scss" src="../scss/cluster.scss"></style>
