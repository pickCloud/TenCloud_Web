<template>
  <div class="v-hubinfo">
    <div class="crumbs">
      <span class="crumbs-item">仓库</span>
      <router-link :to="{name:'Hub'}" class="crumbs-item">镜像仓库</router-link>
      <span class="crumbs-item qingse-text">详情</span>
    </div>
    <div class="v-content">
      <div class="hubinfo-left">
        <div class="hubinfo-left_title center-align">镜像1</div>
        <ul class="hubinfo-left_ul">
          <li>来源：自主研发</li>
          <li>类别：工具</li>
        </ul>
        <div class="hubinfo-left_upbox">
          <div class="file-field_group hubinfo-left_up"><i class="ten-icon"></i> 文件上传</div>
        </div>
      </div>
      <div class="hubinfo-right">
        <div class="panel-tab no-mrg">
          <tabs :labels="['说明','版本列表']" theme="block" :tabkey="1">
            <div>说明</div>
            <div>
              <div class="btns-group">
                <search class="right"></search>
              </div>
              <table class="striped highlight centered">
                <col width="20%">
                <col width="20%">
                <col width="30%">
                <col width="30%">
                <thead>
                  <tr>
                    <th>版本号</th>
                    <th>创建时间</th>
                    <th>文件</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>20170501</td>
                    <td>2017.04.20</td>
                    <td>/path/xxx</td>
                    <td>
                      <router-link class="qingse-text hubinfo-right_btn" :to="{name: 'ProDeploy', params:{id:1}}">部署</router-link>
                      <a href="#" class="lvse-text hubinfo-right_btn">下载</a>
                      <span class="fense-text hubinfo-right_btn">删除</span>
                    </td>
                  </tr>
                  <tr>
                    <td>20170501</td>
                    <td>2017.04.20</td>
                    <td>/path/xxx</td>
                    <td>
                      <router-link class="qingse-text hubinfo-right_btn" :to="{name: 'ProDeploy', params:{id:1}}">部署</router-link>
                      <a href="#" class="lvse-text hubinfo-right_btn">下载</a>
                      <span class="fense-text hubinfo-right_btn">删除</span>
                    </td>
                  </tr>
                  <tr>
                    <td>20170501</td>
                    <td>2017.04.20</td>
                    <td>/path/xxx</td>
                    <td>
                      <router-link class="qingse-text hubinfo-right_btn" :to="{name: 'ProDeploy', params:{id:1}}">部署</router-link>
                      <a href="#" class="lvse-text hubinfo-right_btn">下载</a>
                      <span class="fense-text hubinfo-right_btn">删除</span>
                    </td>
                  </tr>
                  <tr>
                    <td>20170501</td>
                    <td>2017.04.20</td>
                    <td>/path/xxx</td>
                    <td>
                      <router-link class="qingse-text hubinfo-right_btn" :to="{name: 'ProDeploy', params:{id:1}}">部署</router-link>
                      <a href="#" class="lvse-text hubinfo-right_btn">下载</a>
                      <span class="fense-text hubinfo-right_btn">删除</span>
                    </td>
                  </tr>
                  <tr>
                    <td>20170501</td>
                    <td>2017.04.20</td>
                    <td>/path/xxx</td>
                    <td>
                      <router-link class="qingse-text hubinfo-right_btn" :to="{name: 'ProDeploy', params:{id:1}}">部署</router-link>
                      <a href="#" class="lvse-text hubinfo-right_btn">下载</a>
                      <span class="fense-text hubinfo-right_btn">删除</span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="clearfix"><pages class="right" :allpage="5" :nowpage="1"></pages></div>
            </div>
          </tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HubInfo'
  }
</script>

<style lang="scss" scoped>
  @import "../scss/hubinfo";
  table {
    margin-bottom: 24px;
  }
</style>
