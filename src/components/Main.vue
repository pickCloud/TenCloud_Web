<template>
  <div class="page-main">
    <m-row :gutter="16">
      <m-col class="xs-12 lg-9">
        <panel class="m-b16" title="统计"></panel>
      </m-col>
      <m-col class="xs-12 lg-3">
        <panel class="m-b16" title="安全预警"></panel>
        <panel class="m-b16" title="消息推送"></panel>
      </m-col>
    </m-row>
    <panel class="panel-jiankong">
      <div slot="title" class="panel-title">监控 <small class="grey-l1_txt m-l16">今天2017/06/23</small></div>
      <m-row :gutter="16">
        <m-col class="xs-12 lg-6">
          <panel>
            <div slot="title" class="panel-title-2">
              <span class="bold">InfoHub</span>
              <p class="grey-l1_txt"><small>运行环境：机器名称（127.47.141.42）</small></p>
            </div>
            <m-row class="panel-body">
              <m-col class="xs-12 sm-6 m-b16">
                <d3-scale :height="140" :border="16" :data="scaledata"></d3-scale>
              </m-col>
              <m-col class="xs-12 sm-6 m-b16">
                <d3-scale :height="140" :border="16" :data="scaledata"></d3-scale>
              </m-col>
            </m-row>
          </panel>
        </m-col>
        <m-col class="xs-12 lg-6">
          <panel>
            <div slot="title" class="panel-title-2">
              <span class="bold">Mem Data</span>
              <p class="grey-l1_txt"><small>运行环境：机器名称（127.47.141.42）</small></p>
            </div>
            <m-row>
              <m-col class="xs-12 sm-6 m-b16">
                <d3-scale :height="140" :border="16" :data="scaledata"></d3-scale>
              </m-col>
              <m-col class="xs-12 sm-6 m-b16">
                <d3-scale :height="140" :border="16" :data="scaledata"></d3-scale>
              </m-col>
            </m-row>
          </panel>
        </m-col>
      </m-row>
    </panel>
  </div>
</template>

<script>
  export default {
    data: () => ({
      scaledata: {
        value: [50, 150],
        legend: {
          color: '#48bbc0',
          name: 'CPU'
        }
      }
    }),
    mounted () {}
  }
</script>
