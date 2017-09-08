<template>
  <div class="page-pad page-machines">
    <panel :title="!isDeploy?'':'机器列表'">
      <div class="panel-title" slot="title" v-if="!isDeploy">
        <m-btn :href="{name:'MachineAdd', params:{id:1}}" class="primary_bg no-radius grey-dark_txt">添加已有主机</m-btn>
        <m-btn class="pink_bg no-radius grey-dark_txt" @click.native="delMachine(-1)">删除</m-btn>
      </div>
      <div class="panel-body p-b16">
        <m-table class="hover striped machines-table m-b16">
          <col width="55px">
          <col :width="!isDeploy?'15%':'20%'">
          <col :width="!isDeploy?'10%':'20%'">
          <col :width="!isDeploy?'10%':'20%'">
          <col width="10%">
          <col width="10%">
          <col width="10%" v-if="!isDeploy">
          <thead>
          <tr>
            <th><m-checkbox class="list-check" :data="{label: '全选'}" v-model="isSelectAll" hideLabel></m-checkbox></th>
            <th>名称</th>
            <th>服务商</th>
            <!--<th>地址</th>-->
            <!--<th>IP</th>-->
            <th>状态</th>
            <th>CPU</th>
            <th>内存</th>
            <th>磁盘</th>
            <th>网络(入/出 kbps)</th>
            <th v-if="!isDeploy">操作</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="item in listts">
            <td><m-checkbox class="list-check" v-model="selects" :data="{label:(item.id+'')}" hide-label></m-checkbox></td>
            <td>{{item.name}}</td>
            <td>
              <m-tip class="server-tip" has-arrow>
                <span slot="label">{{item.provider}}</span>
                <div slot="popper" class="white_txt server-tip-popper">
                  <p>地址:{{item.address}}</p>
                  <p>IP:{{item.public_ip}}</p>
                </div>
              </m-tip>
            </td>
            <!--<td>{{item.address}}</td>-->
            <!--<td>{{item.public_ip}}</td>-->
            <td>{{item.machine_status}}</td>
            <td>
              <div>{{JSON.parse(item.cpu_content).percent}}%</div>
              <div class="percent-box">
                <div class="percent-box-bar" :class="{warning: JSON.parse(item.cpu_content).percent > 80}" :style="{width: JSON.parse(item.cpu_content).percent + '%'}"></div>
              </div>
            </td>
            <td>
              <div>{{JSON.parse(item.memory_content).percent}}%</div>
              <div class="percent-box">
                <div class="percent-box-bar" :class="{warning: JSON.parse(item.memory_content).percent > 80}" :style="{width: JSON.parse(item.memory_content).percent + '%'}"></div>
              </div>
            </td>
            <td>
              <div>{{JSON.parse(item.disk_content).percent}}%</div>
              <div class="percent-box">
                <div class="percent-box-bar" :class="{warning: JSON.parse(item.disk_content).percent > 80}" :style="{width: JSON.parse(item.disk_content).percent + '%'}"></div>
              </div>
            </td>
            <td>{{JSON.parse(item.net_content).input + '／' + JSON.parse(item.net_content).output}}</td>
            <td v-if="!isDeploy">
              <m-btn :href="{name:'MachineDetail', params:{id:item.id}}"><img class="vam" src="../assets/info.jpg" alt=""></m-btn>
              <m-btn @click.native="delMachine(item.id)"><img class="vam" src="../assets/delete.jpg" alt=""></m-btn>
            </td>
          </tr>
          </tbody>
        </m-table>
        <div class="text-center" v-if="isDeploy">
          <m-btn class="primary_bg grey-dark_txt" @click.native="deploySelect">确定</m-btn>
        </div>
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

<style lang="scss">
  .server-tip {
    position: relative;
  }
  .server-tip-popper {
    white-space: nowrap;
  }
  .percent-box {
    position: relative;
    height: 8px;
    width: 80%;
    background: #1D212A;
    border: 1px solid #2B2F3A;
    border-radius: 4px;
    overflow: hidden;
    margin-top: 4px;
  }
  .percent-box-bar {
    position: absolute;
    left: 0;top: 0;
    background-color: #48BBC0;
    height: 8px;
    width: 10%;
    &.warning {
      background-color: #F25630;
    }
  }
</style>
