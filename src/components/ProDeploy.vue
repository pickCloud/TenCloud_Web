<template>
  <div class="v-probuild">
    <div class="crumbs">
      <span class="crumbs-item">项目</span>
      <router-link class="crumbs-item" :to="{ name: 'ProInfo', params:{id:1}}">项目详情</router-link>
      <span class="crumbs-item qingse-text">部署</span>
    </div>
    <div class="v-content">
      <h5>项目名称</h5>
      <tselect :data="vdata"></tselect>
      <h5>运行环境</h5>
      <div class="row no-gutter">
        <div class="col s4 l3 xl2"><tselect ref="runselect" :data="rundata" @change="runchange"></tselect></div>
        <div class="col s8 l9 xl10"><tselect :data="subdata"></tselect></div>
      </div>
      <div class="save-box center-align">
        <div class="comb-btn waves-effect lvse">保存</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ProDeploy',
    data () {
      return {
        vdata: [
          {label: '版本1', active: true},
          {label: '版本2', value: 'v2'}
        ],
        rundata: [
          {label: '集群', active: true, sub: [{label: '集群1', active: true}, {label: '集群2', value: 'v2'}]},
          {label: '主机', sub: [{label: '主机1', active: true}, {label: '主机2', value: 'v2'}]}
        ],
        runidx: 0
      }
    },
    methods: {
      runchange (...arg) {
        this.runidx = arg[2]
      }
    },
    computed: {
      subdata () {
        return this.rundata[this.runidx].sub
      }
    }
  }
</script>

<style lang="scss">
  h5 {
    font-size: 1rem;
    margin-top: 32px;
    margin-bottom: 16px;
  }
</style>
