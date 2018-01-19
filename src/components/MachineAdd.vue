<template>
  <div class="machine-add page-pad">
    <panel title="添加主机">
      <table class="add-table">
        <col width="20%">
        <col width="80%">
        <tbody>
          <tr>
            <td class="text-center">主机名称</td>
            <td><input type="text" v-model="formdata.name"></td>
          </tr>
          <tr>
            <td class="text-center">IP</td>
            <td><input type="text" v-model="formdata.public_ip"></td>
          </tr>
          <tr>
            <td class="text-center">用户名</td>
            <td><input type="text" v-model="formdata.username"></td>
          </tr>
          <tr>
            <td class="text-center">密码</td>
            <td><input type="text" v-model="formdata.passwd"></td>
          </tr>
        </tbody>
      </table>
      <div class="p-16" v-if="status === 'waiting'"><img src="../assets/spin.gif" class="vam" alt=""> <span class="vam">等待连接 大约需要1分钟</span></div>
      <div class="p-16" v-if="status === 'error'"><div class="hongse-text">异常，请联系客服</div></div>
      <div class="p-16 text-center" v-if="status === 'save'"><m-btn class="primary_bg no-radius grey-dark_txt" @click.native="addHost">确定添加</m-btn></div>
    </panel>
    <panel title="添加过程" class="machineAdd-note m-t16">
      <div class="p-16" style="overflow-y: auto;max-height: 300px;" id="scroll">
        <p v-for="item in notes">{{item}}</p>
      </div>
    </panel>
  </div>
</template>

<script>
  import MachineAddMixin from './MachineAddMixin.js'
  export default {
    mixins: [MachineAddMixin]
  }
</script>
<style lang="scss">
  .machineAdd-note p {
    margin-bottom: 8px;
  }
</style>
