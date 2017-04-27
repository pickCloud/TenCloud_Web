<template>
  <div class="machine-details">
    <div class="crumbs">
      <span class="crumbs-item">服务器</span>
      <router-link class="crumbs-item" :to="{name:'Cluster'}">集群</router-link>
      <router-link class="crumbs-item" :to="{name:'Cluster-Details'}">Cluster 1 详情</router-link>
      <span>TIMCOOO1</span>
    </div>
    <div class="v-content">
      <div class="head">
        <div class="avatar">
          <img src="../assets/cluster-avatar.png">
        </div>
        <div class="article">
          <div class="alter-button">
            <button class="comb-btn waves-effect lvse" @click="alter" v-bind:class="{ hide:toAlter }">修改</button>
            <button class="comb-btn waves-effect lvse" @click="submitAlter" v-bind:class="{ hide:altering }">确认</button>
            <button class="comb-btn waves-effect lvse" @click="cancelAlter" v-bind:class="{ hide:altering }">取消</button>
          </div>
    			<h5 class="qingse-text editable">TIMCOOO1</h5>
          <p>
            <span>机器状态：</span>
            <span class="lanse-text">运行中</span>
          </p>
          <p>
            <span>商务状态：</span>
            <span class="lvse-text">正常</span>
          </p>
          <div class="toggle-machine-status">
            <span><i class="ten-icon">&#xe734;</i></span>
            <span><i class="ten-icon">&#xe606;</i></span>
            <span><i class="ten-icon">&#xe669;</i></span>
          </div>
          <div class="machine-info">
            <div>IP: 127.0.108.11</div>
            <div>地址：华南</div>
            <div>属性：技术部</div>
          </div>
    		</div>
    	</div>
      <div class="panel">
        <tabs :labels="['配置','应用列表','性能']" theme="block">
          <div>neirong1</div>
          <div>
            <table class="striped highlight">
              <col width="40px">
              <thead>
                <tr>
                  <th>版本号</th>
                  <th>创建时间</th>
                  <th>文件</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="machine in machines">
                  <td>{{ machine.version }}</td>
                  <td>{{ machine.create_time }}</td>
                  <td>{{ machine.path }}</td>
                  <td>
                    <div><a class="lvse-text">部署</a></div>
                    <div><a class="qingse-text" @click="moveMachine">下载</a></div>
                    <div><a class="hongse-text" @click="delMachine">删除</a></div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>neirong3</div>
        </tabs>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'machine-details',
  data () {
    return {
      toAlter: false,
      altering: true,
      title: '',
      details: '',
      machines: [
        {
          version: 20170501,
          create_time: '2017/05/01',
          path: '/var/www'
        },
        {
          version: 20170502,
          create_time: '2017/05/02',
          path: '/usr/local'
        }
      ]
    }
  },
  methods: {
    delMachine () {
      this.delbody = '您确定删除该版本吗？'
      this.$refs.delmachine.show()
    },
    alter () {
      this.toAlter = true
      this.altering = false
      $('.editable').attr('contenteditable', 'true')
      this.title = $('h3.editable').text()
      this.details = $('p.editable').text()
    },
    submitAlter () {
      this.toAlter = false
      this.altering = true
      $('.editable').removeAttr('contenteditable')
    },
    cancelAlter () {
      this.toAlter = false
      this.altering = true
      $('.editable').removeAttr('contenteditable')
      $('h3.editable').html(this.title)
      $('p.editable').html(this.details)
    }
  }
}
</script>

<style scpoed lang="scss">
  @import "../scss/cluster-details";
  @import "../scss/machine-details";
</style>
