<template>
  <div class="cluster-details">
    <div class="crumbs">
      <span class="crumbs-item">服务器</span>
      <router-link class="crumbs-item" :to="{name:'Cluster'}">集群</router-link>
      <span class="crumbs-item qingse-text">{{ status.name }}详情</span>
    </div>
    <div class="v-content">
      <div class="head margin-b-24">
        <div class="avatar">
          <img src="../assets/cluster-avatar.png">
        </div>
        <div class="article">
          <div class="alter-button">
            <button class="comb-btn waves-effect lvse" @click="alter" v-bind:class="{ hide:toAlter }">修改</button>
            <button class="comb-btn waves-effect lvse" @click="submitAlter" v-bind:class="{ hide:altering }">确认</button>
            <button class="comb-btn waves-effect lvse" @click="cancelAlter" v-bind:class="{ hide:altering }">取消</button>
          </div>
    			<h5 class="qingse-text editable">{{ status.name }}</h5>
    			<div class="status"><span>状态：共 {{ status.used + status.free }} GB 内存</span></div>
    			<div class="status">
    				<span class="qingse-text">█</span>
    				<span>已使用 </span>
    				<span class="qingse-text">{{ status.used }} GB</span>
    			</div>
    			<div class="status">
    				<span class="zise-text">█</span>
    				<span>空闲</span>
    				<span class="zise-text">{{ status.free }} GB</span>
    			</div>
          <br>
    			<p class="time">更新时间：20170807</p>
    			<p class="editable">集群1是一个很牛逼的集群，为什么这么牛逼，我不也不知道，直觉！集群1是一个很牛逼的集群，为什么这么牛逼，我不也不知道，直觉！集群1是一个很牛逼的集群，为什么这么牛逼，我不也不知道，直觉！
  牛逼，我不也不知道，直觉！</p>
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
              <td>{{ host.status }}</td>
              <td>{{ host.site }}</td>
              <td>
                <router-link :to="{ name:'Machine-Details' }" class="lvse-text table-details_btn">详情</router-link>
                <span class="hongse-text table-details_btn" @click="delMachine">删除</span>
                <span class="qingse-text table-details_btn" @click="moveMachine">迁移</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- 迁移主机 -->
    <modal title="迁移主机至" buttons="确定,取消" buttonsClass="comb-btn lvse,comb-btn qingse" ref="movemachine" class="comb-dialog mini">
      <tselect :data="clusters"></tselect>
    </modal>
    <!-- 删除主机 -->
    <modal buttons="确定,取消" buttonsClass="comb-btn lvse,comb-btn qingse" ref="delmachine" class="comb-dialog mini">
      <div class="comb-dialog_info center-align red-text large"><i class="ten-icon">&#xe691;</i> <span v-html="delbody"></span></div>
    </modal>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'cluster-details',
  // test data
  data () {
    return {
      clusters: [
        {label: '集群1', active: true},
        {label: '集群2'},
        {label: '集群3'},
        {label: '集群4'},
        {label: '集群5'}
      ],
      hosts: [{
        name: 'TIMCOOO1',
        ip: '127.0.108.11',
        status: '良好',
        site: '华南',
        id: 1
      }, {
        name: 'TIMCOOO2',
        ip: '127.0.108.12',
        status: '良好',
        site: '香港',
        id: 2
      }, {
        name: 'TIMCOOO3',
        ip: '127.0.108.13',
        status: '良好',
        site: '纽约',
        id: 3
      }, {
        name: 'TIMCOOO4',
        ip: '127.0.108.14',
        status: '良好',
        site: 'LA',
        id: 4
      }],
      status: {
        name: 'Cluster 1',
        used: 2,
        free: 10
      },
      delbody: '',
      toAlter: false,
      altering: true,
      title: '',
      details: ''
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
