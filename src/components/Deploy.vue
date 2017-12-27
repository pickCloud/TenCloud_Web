<template>
  <div class="page-pad page-deploy">
    <panel title="部署" class="m-b16">
      <table class="add-table">
        <col width="20%">
        <col width="80%">
        <tbody>
        <tr>
          <td class="text-center">选择版本</td>
          <td>
            <m-select v-model="version" :datas="verdata" :sizeh="50"></m-select>
          </td>
        </tr>
        <tr>
          <td class="text-center">容器名称</td>
          <td style="position: relative;">
            <input type="text" v-model="container_name">
            <p class="deploy-name_tip">项目部署后以容器的形式运行：容器名称仅允许英文小写字母</p>
          </td>
        </tr>
        <tr>
          <td class="text-center">选择服务器</td>
          <td class="p-lr-16 p-b16">
            <div style="padding: 16px 0">
              <m-btn @click.native="gomlist">进入机器列表</m-btn>
            </div>
            <div class="git-list" v-if="machines.length > 0">
              <table class="table hover striped machines-table theme-dft">
                <thead>
                <tr>
                  <th>名称</th>
                  <th>服务商</th>
                  <th>地址</th>
                  <th>IP</th>
                  <th>状态</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item, i) in machines">
                  <td>{{item.name}}</td>
                  <td>{{item.provider}}</td>
                  <td>{{item.address}}</td>
                  <td>{{item.public_ip}}</td>
                  <td><span class="plate" >{{item.machine_status}}</span></td>
                </tr>
                </tbody>
              </table>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
      <div class="p-16 text-center" v-if="!isDoing"><m-btn class="primary_bg no-radius grey-dark_txt" @click.native="startDeploy">开始部署</m-btn></div>
      <div class="p-16 text-center" v-else>
        <img class="vam" src="../assets/spin.gif"></img> <span class="vam">部署中请耐心等待...</span>
      </div>
    </panel>
    <panel title="部署日志" class="deploy-note">
      <div class="p-16">
        <div class="panel" id="scroll">
          <!--<div class="panel-title">{{key}}</div>-->
          <p v-for="item in notes">{{item}}</p>
        </div>
      </div>
    </panel>
  </div>
</template>

<script>
  import DeployMixin from './DeployMixin.js'
  export default {
    mixins: [DeployMixin]
  }
</script>

<style lang="scss">
  .deploy-note {
    h5 {
      font-weight: bold;
    }
    li {
      padding: 8px 0;
    }
  }

</style>
