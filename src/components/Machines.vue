<template>
  <div class="page-pad page-machines">
    <panel>
      <div class="panel-title" slot="title">
        <m-btn :href="{name:'MachineAdd', params:{id:1}}" class="primary_bg no-radius grey-dark_txt">添加已有主机</m-btn>
        <m-btn class="pink_bg no-radius grey-dark_txt" @click.native="delMachine(-1)">删除</m-btn>
      </div>
      <div class="panel-body p-b16">
        <m-table class="hover striped machines-table">
          <col width="55px">
          <col width="15%">
          <col width="15%">
          <col width="15%">
          <col width="15%">
          <col width="15%">
          <thead>
          <tr>
            <th><m-checkbox class="list-check" :data="{label: '全选'}" v-model="isSelectAll" hideLabel></m-checkbox></th>
            <th>名称</th>
            <th>服务商</th>
            <th>地址</th>
            <th>IP</th>
            <th>状态</th>
            <td>操作</td>
          </tr>
          </thead>
          <tbody>
          <tr v-for="item in listts">
            <td><m-checkbox class="list-check" v-model="selects" :data="{label:(item.id+'')}" hide-label></m-checkbox></td>
            <td>{{item.name}}</td>
            <td>阿里云</td>
            <td>{{item.address}}</td>
            <td>{{item.public_ip}}</td>
            <td><span class="plate" :class="item.machine_status | mclass">{{item.machine_status | mstatus}}</span></td>
            <td>
              <m-btn :href="{name:'MachineDetail', params:{id:item.id}}" class="primary_txt">详情</m-btn>
              <m-btn class="pink_txt" @click.native="delMachine(item.id)">删除</m-btn>
            </td>
          </tr>
          </tbody>
        </m-table>
      </div>
    </panel>
    <!--<m-page :allpage="10" :nowpage="1" :sizeh="48" :sizew="48"></m-page>-->
  </div>
</template>

<script>
  import MachinesMixin from './MachinesMixin.js'
  export default {
    mixins: [MachinesMixin]
  }
</script>
