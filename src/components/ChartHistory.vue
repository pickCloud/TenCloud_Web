<template>
  <div class="chart-history">
    <panel>
      <div class="panel-title" slot="title">
        <span>MemData 历史记录</span>
        <div class="right" style="margin-top: -5px">
          <m-btn-group :idx="0" class="m-r8 clearfix">
            <m-btn>正常</m-btn>
            <m-btn>按时平均</m-btn>
            <m-btn>按天平均</m-btn>
          </m-btn-group>
        </div>
      </div>
      <div class="panel-body">
        <div class="chart-history-if">
          <span class="vam m-r8">开始时间</span>
          <div class="vam input-flex m-r16">
            <input type="text">
            <span class="input-flex-icon"></span>
          </div>
          <span class="vam m-r8">截止时间</span>
          <div class="vam input-flex m-r16">
            <input type="text">
            <span class="input-flex-icon"></span>
          </div>
          <m-btn>查询</m-btn>
        </div>
        <m-table class="hover striped machines-table m-b16">
          <col width="20%">
          <col width="20%">
          <col width="20%">
          <col width="20%">
          <col width="20%">
          <thead>
          <tr>
            <th>时间</th>
            <th>CPU</th>
            <th>内存</th>
            <th>磁盘</th>
            <th>网络(入/出 KB/S)</th>
          </tr>
          </thead>
          <tbody>
            
          </tbody>
        </m-table>
      </div>
    </panel>
  </div>
</template>

<script>
  export default {
    created () {
      this.$store.commit('sitepath/SPLICE', [3, 1, {cn: '历史记录'}])
    }
  }
</script>

<style lang="scss">
  .chart-history-if {
    height: 40px;
    line-height: 40px;
    margin: 16px 0;
  }
  .input-flex {
    width: 270px;
    word-spacing: -4px;
    > input {
      display: inline-block;
      background: none;
      width: 240px;
      height: 30px;
      line-height: 30px;
      border: 1px solid #2B2F3A;
      padding: 0 16px;
      color: #7f8da4;
      vertical-align: middle;
    }
  }
  .input-flex-icon {
    display: inline-block;
    width: 30px;
    height: 30px;
    border: 1px solid #2B2F3A;
    vertical-align: middle;
    background: url('../assets/date.png') 50% 50% no-repeat;
  }
</style>
