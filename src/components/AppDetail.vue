<template>
  <div class="page-pad page-app-detail">
    <m-row :gutter="16">
      <m-col class="xs-12 lg-8">
        <panel class="m-b16">
          <div class="panel-title" slot="title">
            <span class="bold m-r8">监控</span>
            <div class="right" style="margin-top: -5px">
              <m-btn-group :idx="0" class="m-r8 clearfix">
                <m-btn>实时</m-btn>
                <m-btn>24小时</m-btn>
                <m-btn>1周</m-btn>
              </m-btn-group>
              <m-btn class="panel-bg_bg">查看历史</m-btn>
            </div>
            <!--<small>2017-06-26</small>-->
          </div>
          <m-row :gutter="16" class="mdc-chart">
            <m-col class="xs-12 lg-6">
              <panel title="CPU" class="p-b16">
                <div class="panel-body">
                  <e-line :series="cpu"></e-line>
                </div>
              </panel>
            </m-col>
            <m-col class="xs-12 lg-6">
              <panel title="内存" class="p-b16">
                <div class="panel-body">
                  <e-line :series="memory" :colors="[['#eb6565', 'rgba(235,101,101,1)','rgba(235,101,101,0)']]"></e-line>
                </div>
              </panel>
            </m-col>
            <m-col class="xs-12 lg-6">
              <panel class="p-b16" title="Net I/O">
                <div class="panel-body">
                  <e-line :series="nets" :colors="[['#95c099', 'rgba(93,117,103,1)','rgba(93,117,103,0)'],['#eb6565', 'rgba(235,101,101,1)','rgba(235,101,101,0)']]"></e-line>
                </div>
              </panel>
            </m-col>
            <m-col class="xs-12 lg-6">
              <panel title="Block I/O" class="p-b16">
                <div class="panel-body">
                  <e-line :series="block" :colors="[['#95c099', 'rgba(93,117,103,1)','rgba(93,117,103,0)'],['#eb6565', 'rgba(235,101,101,1)','rgba(235,101,101,0)']]"></e-line>
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
            <span class="bold">{{name}}</span>
          </div>
          <div class="panel-list mcd-ctrl-group">
            <div class="mcd-ctrl-item">启动/停止 <m-switch v-model="isOpen" @change="containerChange" :disabled="isDisabled"></m-switch></div>
            <!--<div class="mcd-ctrl-item"><m-btn><span class="vam">暂停</span> <i class="icon icon-zanting"></i></m-btn></div>-->
            <!--<div class="mcd-ctrl-item">迁移 <i class="icon-quan"></i></div>-->
            <div class="mcd-ctrl-item"><m-btn @click.native="delContainer"><span class="vam">删除</span> <i class="icon icon-delete vam"></i></m-btn></div>
            <span class="justify_fix"></span>
          </div>
          <m-row class="panel-list" v-if="isWaiting">
            <m-col class="xs-12"><img src="../assets/spin.gif" class="vam" alt=""> <span class="vam">{{waitingTip}}</span></m-col>
          </m-row>
          <m-row class="panel-list">
            <m-col class="xs-4">状态</m-col>
            <m-col class="xs-8" v-text="status">
              <!--<span class="plate green-l_bg grey-dark_txt" v-if="isOpen">正常</span><span class="plate pink_bg grey-dark_txt" v-else>停止</span>-->
            </m-col>
          </m-row>
          <m-row class="panel-list">
            <m-col class="xs-4">更新时间</m-col>
            <m-col class="xs-8">{{timedata}}</m-col>
          </m-row>
        </panel>
        <!-- 基本信息END -->
        <!-- 运行信息 -->
        <panel class="m-b16">
          <div class="panel-title clearfix" slot="title">
            <span class="bold">运行信息</span>
          </div>
          <m-row class="panel-list">
            <m-col class="xs-4">所在机器</m-col>
            <m-col class="xs-8">{{runtime.hostname}}</m-col>
          </m-row>
          <m-row class="panel-list">
            <m-col class="xs-4">IP</m-col>
            <m-col class="xs-8">{{runtime.ip}}</m-col>
          </m-row>
          <m-row class="panel-list">
            <m-col class="xs-4">容器端口</m-col>
            <m-col class="xs-8" v-text="runtime.port?runtime.port.join():''"></m-col>
          </m-row>
          <m-row class="panel-list">
            <m-col class="xs-4">访问地址</m-col>
            <m-col class="xs-8">{{runtime.address}}</m-col>
          </m-row>
        </panel>
        <!-- 运行信息 END -->
        <!--数据配置-->
        <panel class="m-b16 data-config-panel">
          <div class="panel-title clearfix" slot="title">
            <span class="bold">数据配置</span>
          </div>
          <div class="panle-body">
            <m-tip has-arrow v-for="item in volumes" :key="item.label">
              <div slot="label" class="data-tip-label">{{item.label}}</div>
              <div slot="popper" class="popper-body">
                <div class="data-tip-item" v-for="(v,k) in item.value">{{k}}: {{v}}</div>
              </div>
            </m-tip>
            <div class="tip-wrap" v-if="volumesfrom">
              <div class="data-tip-label">{{volumesfrom}}</div>
            </div>
          </div>
        </panel>
        <!--数据配置 end-->
        <!-- 容器配置 -->
        <panel class="m-b16">
          <div class="panel-title clearfix" slot="title">
            <span class="bold">容器配置</span>
          </div>
          <!--<m-row class="panel-list">-->
            <!--<m-col class="xs-4">数据卷</m-col>-->
            <!--<m-col class="xs-8"></m-col>-->
            <!--&lt;!&ndash;<m-col class="xs-8">{{container.volumes}}</m-col>&ndash;&gt;-->
          <!--</m-row>-->
          <!--<m-row class="panel-list">-->
            <!--<m-col class="xs-4">数据卷容器</m-col>-->
            <!--<m-col class="xs-8" v-text="container.volumesfrom"></m-col>-->
          <!--</m-row>-->
          <m-row class="panel-list">
            <m-col class="xs-4">工作目录</m-col>
            <m-col class="xs-8">{{container.workingdir}}</m-col>
          </m-row>
          <m-row class="panel-list">
            <m-col class="xs-4">启动命令</m-col>
            <m-col class="xs-8">{{container.cmd}}</m-col>
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
            <m-col class="xs-8" v-text="network.dns ? network.dns.join() : ''"></m-col>
          </m-row>
          <m-row class="panel-list" style="height: auto">
            <m-col class="xs-12">端口映射</m-col>
            <m-col class="xs-12 clearfix">
              <m-tip has-arrow v-for="(v,k) in network.portbind" :key="k">
                <div slot="label" class="data-tip-label">{{k}}</div>
                <div slot="popper" class="popper-body">
                  <div class="data-tip-item">{{v}}</div>
                </div>
              </m-tip>
            </m-col>
          </m-row>
          <m-row class="panel-list">
            <m-col class="xs-4">容器连接</m-col>
            <m-col class="xs-8">{{network.links}}</m-col>
          </m-row>
          <!--<m-row class="panel-list">-->
            <!--<m-col class="xs-4">桥接模式</m-col>-->
            <!--<m-col class="xs-8"></m-col>-->
          <!--</m-row>-->
          <!--<m-row class="panel-list">-->
            <!--<m-col class="xs-4">容器连接</m-col>-->
            <!--<m-col class="xs-8"></m-col>-->
          <!--</m-row>-->
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
