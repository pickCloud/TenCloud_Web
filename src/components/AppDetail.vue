<template>
  <div class="page-pad page-app-detail">
    <m-row :gutter="16">
      <m-col class="xs-12 lg-8">
        <panel class="m-b16">
          <div class="panel-title" slot="title">
            <span class="bold m-r8">监控</span>
            <div class="right" style="margin-top: -5px">
              <m-btn-group :idx="0" class="m-r8">
                <m-btn :sizew="100">实时</m-btn>
                <m-btn :sizew="100">24小时</m-btn>
                <m-btn :sizew="100">1周</m-btn>
              </m-btn-group>
              <m-btn class="panel-bg_bg">查看历史</m-btn>
            </div>
            <!--<small>2017-06-26</small>-->
          </div>
          <m-row :gutter="16" class="mdc-chart">
            <m-col class="xs-12 lg-6">
              <panel title="CPU" class="p-b16">
                <div class="panel-body">
                  <e-line :data="cpu" label="CPU使用率"></e-line>
                </div>
              </panel>
            </m-col>
            <m-col class="xs-12 lg-6">
              <panel title="内存" class="p-b16">
                <div class="panel-body">
                  <e-line :data="cpu" label="CPU使用率"></e-line>
                </div>
              </panel>
            </m-col>
            <m-col class="xs-12 lg-6">
              <panel class="p-b16" title="硬盘使用情况">
                <div class="panel-body">
                  <e-line :data="cpu" label="CPU使用率"></e-line>
                </div>
              </panel>
            </m-col>
            <m-col class="xs-12 lg-6">
              <panel title="网络" class="p-b16">
                <div class="panel-body">
                  <e-line :data="cpu" label="CPU使用率"></e-line>
                </div>
              </panel>
            </m-col>
          </m-row>
        </panel>
        <panel title="日志" class="m-b16">
          <div class="panel-body p-b16">
            <m-table class="hover striped machines-table centered">
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
                  <td>2017.07.06 12:00</td>
                  <td>创建</td>
                </tr>
                <tr>
                  <td>2017.07.06 12:00</td>
                  <td>创建</td>
                </tr>
                <tr>
                  <td>2017.07.06 12:00</td>
                  <td>创建</td>
                </tr>
                <tr>
                  <td>2017.07.06 12:00</td>
                  <td>创建</td>
                </tr>
              </tbody>
            </m-table>
          </div>
        </panel>
      </m-col>
      <m-col class="xs-12 lg-4">
        <!-- 基本信息-->
        <panel class="m-b16">
          <div class="panel-title clearfix" slot="title">
            <span class="bold">MemData</span>
          </div>
          <div class="panel-list mcd-ctrl-group">
            <div class="mcd-ctrl-item">关/开 <m-switch></m-switch></div>
            <div class="mcd-ctrl-item"><m-btn><span class="vam">暂停</span> <i class="icon icon-zanting"></i></m-btn></div>
            <!--<div class="mcd-ctrl-item">迁移 <i class="icon-quan"></i></div>-->
            <div class="mcd-ctrl-item"><m-btn><span class="vam">删除</span> <i class="icon icon-delete vam"></i></m-btn></div>
            <span class="justify_fix"></span>
          </div>
          <m-row class="panel-list">
            <m-col class="xs-4">状态</m-col>
            <m-col class="xs-8"><span class="plate green-l_bg grey-dark_txt">正常</span><span class="plate pink_bg grey-dark_txt">停止</span></m-col>
          </m-row>
          <m-row class="panel-list">
            <m-col class="xs-4">更新时间</m-col>
            <m-col class="xs-8">2017-6-30</m-col>
          </m-row>
        </panel>
        <!-- 基本信息END -->
        <!-- 运行信息 -->
        <panel class="m-b16">
          <div class="panel-title clearfix" slot="title">
            <span class="bold">运行信息</span>
          </div>
          <m-row class="panel-list">
            <m-col class="xs-4">运行环境</m-col>
            <m-col class="xs-8">机器的名称或集群的名称</m-col>
          </m-row>
          <m-row class="panel-list">
            <m-col class="xs-4">IP</m-col>
            <m-col class="xs-8">120.24.86.72</m-col>
          </m-row>
          <m-row class="panel-list">
            <m-col class="xs-4">容器端口</m-col>
            <m-col class="xs-8">8080</m-col>
          </m-row>
          <m-row class="panel-list">
            <m-col class="xs-4">访问地址</m-col>
            <m-col class="xs-8">http://www.10.com:8080</m-col>
          </m-row>
        </panel>
        <!-- 运行信息 END -->
        <!-- 容器配置 -->
        <panel class="m-b16">
          <div class="panel-title clearfix" slot="title">
            <span class="bold">容器配置</span>
          </div>
          <m-row class="panel-list">
            <m-col class="xs-4">数据卷</m-col>
            <m-col class="xs-8">_dataxxx</m-col>
          </m-row>
          <m-row class="panel-list">
            <m-col class="xs-4">数据卷容器</m-col>
            <m-col class="xs-8">dbdata</m-col>
          </m-row>
          <m-row class="panel-list">
            <m-col class="xs-4">工作目录</m-col>
            <m-col class="xs-8">/APP</m-col>
          </m-row>
          <m-row class="panel-list">
            <m-col class="xs-4">启动命令</m-col>
            <m-col class="xs-8">nginx -g‘daemon off</m-col>
          </m-row>
        </panel>
        <!-- 容器配置 END -->
        <!-- 网路配置 -->
        <panel class="m-b16">
          <div class="panel-title clearfix" slot="title">
            <span class="bold">网路配置</span>
          </div>
          <m-row class="panel-list">
            <m-col class="xs-4">DNS</m-col>
            <m-col class="xs-8"></m-col>
          </m-row>
          <m-row class="panel-list">
            <m-col class="xs-4">访问控制</m-col>
            <m-col class="xs-8"></m-col>
          </m-row>
          <m-row class="panel-list">
            <m-col class="xs-4">端口映射</m-col>
            <m-col class="xs-8"></m-col>
          </m-row>
          <m-row class="panel-list">
            <m-col class="xs-4">桥接模式</m-col>
            <m-col class="xs-8"></m-col>
          </m-row>
          <m-row class="panel-list">
            <m-col class="xs-4">容器连接</m-col>
            <m-col class="xs-8"></m-col>
          </m-row>
        </panel>
        <!-- 网路配置 END -->
      </m-col>
    </m-row>
  </div>
</template>

<script>
  import AppDetailMixin from './AppDetailMixin.js'
  export default {
    mixins: [AppDetailMixin]
  }
</script>
