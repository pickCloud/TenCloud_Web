<template>
  <div class="v-hubdetail">
    <div class="crumbs">
      <span class="crumbs-item">仓库</span>
      <router-link :to="{name:'Hub'}" class="crumbs-item">镜像仓库</router-link>
      <span class="crumbs-item qingse-text">详情</span>
    </div>
    <div class="v-content">
      <div class="hubinfo-left">
        <div class="hubinfo-left_title text-center">镜像1</div>
        <ul class="hubinfo-left_ul">
          <li>来源：自主研发</li>
          <li>类别：工具</li>
        </ul>
        <div class="hubinfo-left_upbox">
          <div class="hubinfo-left_upbtn"><i class="icon icon-xinzeng"></i> 文件上传</div>
        </div>
      </div>
      <div class="hubinfo-right">
        <div class="panel-tab no-mrg">
          <m-tab :labels="['说明','版本列表']" theme="block" :tabkey="1">
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
                    <router-link class="qingse-text hubinfo-right_btn" :to="{name: 'Deploy', params:{id:1}}">部署</router-link>
                    <a href="#" class="lvse-text hubinfo-right_btn">下载</a>
                    <span class="fense-text hubinfo-right_btn">删除</span>
                  </td>
                </tr>
                <tr>
                  <td>20170501</td>
                  <td>2017.04.20</td>
                  <td>/path/xxx</td>
                  <td>
                    <router-link class="qingse-text hubinfo-right_btn" :to="{name: 'Deploy', params:{id:1}}">部署</router-link>
                    <a href="#" class="lvse-text hubinfo-right_btn">下载</a>
                    <span class="fense-text hubinfo-right_btn">删除</span>
                  </td>
                </tr>
                <tr>
                  <td>20170501</td>
                  <td>2017.04.20</td>
                  <td>/path/xxx</td>
                  <td>
                    <router-link class="qingse-text hubinfo-right_btn" :to="{name: 'Deploy', params:{id:1}}">部署</router-link>
                    <a href="#" class="lvse-text hubinfo-right_btn">下载</a>
                    <span class="fense-text hubinfo-right_btn">删除</span>
                  </td>
                </tr>
                <tr>
                  <td>20170501</td>
                  <td>2017.04.20</td>
                  <td>/path/xxx</td>
                  <td>
                    <router-link class="qingse-text hubinfo-right_btn" :to="{name: 'Deploy', params:{id:1}}">部署</router-link>
                    <a href="#" class="lvse-text hubinfo-right_btn">下载</a>
                    <span class="fense-text hubinfo-right_btn">删除</span>
                  </td>
                </tr>
                <tr>
                  <td>20170501</td>
                  <td>2017.04.20</td>
                  <td>/path/xxx</td>
                  <td>
                    <router-link class="qingse-text hubinfo-right_btn" :to="{name: 'Deploy', params:{id:1}}">部署</router-link>
                    <a href="#" class="lvse-text hubinfo-right_btn">下载</a>
                    <span class="fense-text hubinfo-right_btn">删除</span>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </m-tab>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HubDetail'
  }
</script>

<style lang="scss">
  @import "../scss/variables";
  .hubinfo-left {
    float: left;
    width: 25%;
    border-radius: 5px;
    background-color: #fff;
    overflow: hidden;
  }

  .hubinfo-left_title {
    height: 100px;
    line-height: 100px;
    font-size: 1.2rem;
    color: #fff;
    background-color: map_get($comb-colors,'qingse');
  }

  .v-hubdetail {
    .hubinfo-left_ul {
      margin: 0;
      padding: 0 24px;
      li {
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid $border-color-darken;
      }
    }
  }


  .hubinfo-left_upbox {
    padding: 32px 24px;
  }

  .hubinfo-left_upbtn {
    display: block;
    text-align: center;
    border: 2px dashed #ccc;
    padding: 24px 0;
    border-radius: 8px;
    .icon {
      font-size: 1.4rem;
      vertical-align: middle;
    }
  }


  .hubinfo-right {
    padding-left: 25%;
    .panel-tab {
      margin-left: 24px;
    }
  }

  .hubinfo-right_btn {
    display: inline-block;
    cursor: pointer;
    margin-right: 8px;
  }

  @media (max-width: 1200px) {
    .hubinfo-left {
      float: none;
      width: 100%;
      margin-bottom: 16px;
    }
    .hubinfo-right {
      width: 100%;
      padding-left: 0;
      .panel-tab {
        margin-left: 0;
      }
    }
  }

</style>
