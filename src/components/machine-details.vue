<template>
  <div class="machine-details">
    <div class="crumbs">
      <span class="crumbs-item">服务器</span>
      <router-link class="crumbs-item" :to="{name:'Cluster'}">集群</router-link>
      <router-link class="crumbs-item" :to="{name:'Cluster-Details', params:{id:1}}">Cluster 1</router-link>
      <span class="qingse-text">TIMCOOO1</span>
    </div>
    <div class="v-content">
      <div class="info-panel head margin-b-24">
        <div class="btns-group alter-button">
          <button class="comb-btn waves-effect lvse" @click="alter" v-bind:class="{ hide:toAlter }">修改</button>
          <button class="comb-btn waves-effect lvse" @click="submitAlter" v-bind:class="{ hide:altering }">确认</button>
          <button class="comb-btn waves-effect lvse" @click="cancelAlter" v-bind:class="{ hide:altering }">取消</button>
        </div>
        <div class="info-left">
          <div class="info-icon"><img class="vam" src="../assets/cluster-avatar.png" alt=""></div>
        </div>
        <div class="info-right article">
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
            <tips text="开机"><i class="ten-icon">&#xe734;</i></tips>
            <tips text="关机"><i class="ten-icon">&#xe606;</i></tips>
            <tips text="重启"><i class="ten-icon">&#xe669;</i></tips>
          </div>
          <div class="machine-info">
            <div>IP: 127.0.108.11</div>
            <div>地址：华南</div>
            <div>属性：技术部</div>
          </div>
    		</div>
    	</div>
      <div class="margin-b-16">系统信息</div>
      <div class="panel-tab margin-b-24">
        <tabs :labels="['配置','应用列表','性能']" theme="block" :tabkey="1">
          <div>neirong1</div>
          <div>
            <table class="striped highlight">
              <col width="15%">
              <col width="15%">
              <col width="50%">
              <col width="20%">
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
                    <span class="lvse-text table-details_btn">详情</span>
                    <span class="qingse-text table-details_btn" @click="moveMachine">迁移</span>
                    <span class="hongse-text table-details_btn" @click="delMachine">删除</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>neirong3</div>
        </tabs>
      </div>
      <div class="margin-b-16">商务信息</div>
      <div class="panel-tab margin-b-24">
        <tabs :labels="['服务商','合同','日志']" theme="block" :tabkey="1">
          <div>neirong1</div>
          <div>neirong2</div>
          <div>neirong3</div>
        </tabs>
      </div>
    </div>
    <!-- 迁移 -->
    <modal title="迁移应用至" buttons="确定,取消" buttonsClass="comb-btn lvse,comb-btn qingse" ref="movemachine" class="comb-dialog mini">
      <tselect :data="clusters"></tselect>
    </modal>
    <!-- 删除 -->
    <modal buttons="确定,取消" buttonsClass="comb-btn lvse,comb-btn qingse" ref="delmachine" class="comb-dialog mini">
      <div class="comb-dialog_info center-align red-text large"><i class="ten-icon">&#xe691;</i> <span v-html="delbody"></span></div>
    </modal>
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
      delbody: '',
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
      ],
      clusters: [
        {label: '主机1', active: true},
        {label: '主机2'},
        {label: '主机3'},
        {label: '主机4'},
        {label: '主机5'}
      ]
    }
  },
  methods: {
    delMachine () {
      this.delbody = '您确定删除该应用吗？'
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

<style scpoed lang="scss">
  @import "../scss/cluster-details";
  @import "../scss/machine-details";
</style>
