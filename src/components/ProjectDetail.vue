<template>
  <div class="page-pad page-project-detail">
    <m-row :gutter="16">
      <m-col class="xs-12 lg-8">
        <!--基本信息-->
        <panel class="m-b16">
          <div class="panel-title" slot="title">
            <span>基本信息</span>
            <div class="right" style="margin-top: -5px">
              <m-btn class="primary_bg grey-dark_txt" @click.native="build">版本构建</m-btn>
              <m-btn class="primary_bg grey-dark_txt m-r16" @click.native="deploy">项目部署</m-btn>
              <m-btn class="primary_bg grey-dark_txt" @click.native="editorHandle"><span class="vam">修改</span> <i class="icon icon-editor vam"></i></m-btn>
            </div>
          </div>
          <table class="list-table">
            <col width="20%">
            <col width="80%">
            <tfoot>
              <tr>
                <td>名称</td>
                <td>{{base.name}}</td>
              </tr>
              <tr>
                <td>描述</td>
                <td>{{base.description}}</td>
              </tr>
              <tr>
                <td>项目来源</td>
                <td><span class="m-r8">{{base.repos_name}}:</span><span class="m-r8">{{base.repos_url}}</span></td>
              </tr>
              <tr>
                <td>创建时间</td>
                <td>{{base.create_time}}</td>
              </tr>
              <tr>
                <td>状态</td>
                <td><span class="vam">{{pstatus}}</span> <m-btn class="primary_txt">部署详情</m-btn> <m-btn class="primary_txt">容器详情</m-btn> <m-btn class="primary_txt">停止</m-btn></td>
              </tr>
              <tr>
                <td>更新时间</td>
                <td>{{base.update_time}}</td>
              </tr>
            </tfoot>
          </table>
        </panel>
        <!--基本信息 end-->
        <!--容器列表-->
        <panel class="m-b16">
          <div class="panel-title" slot="title">容器列表</div>
          <div class="panel-body">
            <table class="table hover striped theme-dft pad-table">
              <col width="20%">
              <col width="15%">
              <col width="15%">
              <col width="20%">
              <col width="20%">
              <col width="10%">
              <thead>
              <tr>
                <th>容器名称</th>
                <th>容器ID</th>
                <th>状态</th>
                <th>创建时间</th>
                <th>更新时间</th>
                <th>操作</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>容器名1</td>
                <td>111</td>
                <td>良好</td>
                <td>2017-06-28</td>
                <td>2017-06-28</td>
                <td>详情</td>
              </tr>
              <tr>
                <td>容器名1</td>
                <td>111</td>
                <td>良好</td>
                <td>2017-06-28</td>
                <td>2017-06-28</td>
                <td>详情</td>
              </tr>
              </tbody>
            </table>
          </div>
        </panel>
        <!--容器列表 end-->
        <!--日志-->
        <panel class="m-b16">
          <div class="panel-title" slot="title">日志</div>
          <div class="panel-body">
            <table class="table hover striped theme-dft pad-table">
              <col width="30%">
              <col width="70%">
              <thead>
              <tr>
                <th>时间</th>
                <th>行为</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>2017-06-28</td>
                <td>项目创建</td>
              </tr>
              <tr>
                <td>2017-06-28</td>
                <td>项目构建</td>
              </tr>
              </tbody>
            </table>
          </div>
        </panel>
        <!--日志 end-->
      </m-col>
      <m-col class="xs-12 lg-4">
        <!--版本列表-->
        <panel class="m-b16">
          <div class="panel-title" slot="title">版本列表</div>
          <div class="panel-body">
            <table class="table hover striped theme-dft pad-table">
              <col width="30%">
              <col width="30%">
              <col width="40%">
              <thead>
              <tr>
                <th>版本号</th>
                <th>构建时间</th>
                <th>操作</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>版本1</td>
                <td>2017-06-28</td>
                <td><m-btn class="primary_txt">查看日志</m-btn></td>
              </tr>
              <tr>
                <td>版本2</td>
                <td>2017-06-28</td>
                <td><m-btn class="primary_txt">查看日志</m-btn></td>
              </tr>
              </tbody>
            </table>
          </div>
        </panel>
        <!--版本列表 end-->
        <!--数据分析-->
        <panel class="m-b16">
          <div class="panel-title" slot="title">数据分析</div>
        </panel>
        <!--数据分析 end-->
        <!--其他-->
        <panel class="m-b16">
          <div class="panel-title" slot="title">其他</div>
        </panel>
        <!--其他 end-->
      </m-col>
    </m-row>
  </div>
</template>

<script>
  import ProjectDetailMixin from './ProjectDetailMixin.js'
  export default {
    mixins: [ProjectDetailMixin]
  }
</script>
