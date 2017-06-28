<template>
  <div class="page-machine-detail">
    <!-- base info -->
    <m-row :gutter="16">
      <m-col class="xs-12 md-6">
        <panel title="基本信息" bg-color="#fff" class="p-b16">
          <m-row class="gird-list">
            <m-col class="xs-6">name</m-col>
            <m-col class="xs-6">MemData</m-col>
          </m-row>
          <m-row class="gird-list">
            <m-col class="xs-6">服务商</m-col>
            <m-col class="xs-6">阿里云</m-col>
          </m-row>
          <m-row class="gird-list">
            <m-col class="xs-6">地址</m-col>
            <m-col class="xs-6"> 华南 1 （深圳）</m-col>
          </m-row>
          <m-row class="gird-list">
            <m-col class="xs-6">IP</m-col>
            <m-col class="xs-6">120.24.86.73</m-col>
          </m-row>
          <m-row class="gird-list">
            <m-col class="xs-6">状态</m-col>
            <m-col class="xs-6">运行中</m-col>
          </m-row>
        </panel>
      </m-col>
      <m-col class="xs-12 md-6">
        <panel title="配置信息" bg-color="#fff" class="p-b16">
          <m-row class="gird-list">
            <m-col class="xs-6">操作系统</m-col>
            <m-col class="xs-6">CentOS 7.3 64位</m-col>
          </m-row>
          <m-row class="gird-list">
            <m-col class="xs-6">CPU</m-col>
            <m-col class="xs-6">2个</m-col>
          </m-row>
          <m-row class="gird-list">
            <m-col class="xs-6">内存</m-col>
            <m-col class="xs-6">2G</m-col>
          </m-row>
          <m-row class="gird-list">
            <m-col class="xs-6">磁盘</m-col>
            <m-col class="xs-6">20G</m-col>
          </m-row>
          <m-row class="gird-list">
            <m-col class="xs-6">网络</m-col>
            <m-col class="xs-6">2M</m-col>
          </m-row>
        </panel>
      </m-col>
    </m-row>
    <!-- base info end -->
    <!-- watch -->
    <panel bg-color="#fff">
      <div slot="title" class="panle-title">监控 <small class="grey-l1_txt m-l16">今天2017/06/23</small></div>
      <m-row :gutter="16">
        <m-col class="xs-12 md-6">
          <panel title="CPU" bg-color="#f2f2f2" class="p-b16">
            <d3-line :height="250"></d3-line>
          </panel>
        </m-col>
        <m-col class="xs-12 md-6">
          <panel title="内存" bg-color="#f2f2f2" class="p-b16">
            <d3-line :height="250"></d3-line>
          </panel>
        </m-col>
        <m-col class="xs-12 md-6">
          <panel title="硬盘使用情况" bg-color="#f2f2f2" class="p-b16">
            <d3-pies :data="piedata"></d3-pies>
          </panel>
        </m-col>
        <m-col class="xs-12 md-6">
          <panel title="网络" bg-color="#f2f2f2" class="p-b16"></panel>
        </m-col>
      </m-row>
    </panel>
    <!-- watch end -->
    <!-- apps -->
    <panel class="no-pad" bgColor="#fff">
      <div class="panel-title uline p-16" slot="title">应用</div>
      <m-table class="bordered hover striped block-table">
        <thead>
          <tr>
            <th>名称</th>
            <th>containerID</th>
            <th>pid</th>
            <th>更新时间</th>
            <th>状态</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>NAME</td>
            <td>78</td>
            <td>15</td>
            <td>2017.1.2</td>
            <td>运行中</td>
            <td><m-btn>详情</m-btn></td>
          </tr>
          <tr>
            <td>NAME</td>
            <td>78</td>
            <td>15</td>
            <td>2017.1.2</td>
            <td>运行中</td>
            <td><m-btn>详情</m-btn></td>
          </tr>
          <tr>
            <td>NAME</td>
            <td>78</td>
            <td>15</td>
            <td>2017.1.2</td>
            <td>运行中</td>
            <td><m-btn>详情</m-btn></td>
          </tr>
          <tr>
            <td>NAME</td>
            <td>78</td>
            <td>15</td>
            <td>2017.1.2</td>
            <td>运行中</td>
            <td><m-btn>详情</m-btn></td>
          </tr>
        </tbody>
      </m-table>
    </panel>
    <!-- apps end -->
  </div>
</template>

<script>
  export default {
    data: () => ({
      piedata: [
        {color: '#b2b2b2', value: 50, vr: 1.1, name: 'CPU 的使用率'},
        {color: '#d5d5d5', value: 150, vr: 1, name: 'CPU 的空余量'}
      ]
    })
  }
</script>
