<template>
  <div class="page-main">
    <m-row :gutter="16">
      <m-col class="xs-12 lg-9">
        <panel class="panel-tongji" title="统计" bg-color="#fff"></panel>
      </m-col>
      <m-col class="xs-12 lg-3">
        <panel class="panel-anquan" title="安全预警" bg-color="#fff"></panel>
        <panel class="panel-xinxi" title="消息推送" bg-color="#fff"></panel>
      </m-col>
    </m-row>
    <panel class="panel-jiankong" bg-color="#fff">
      <div slot="title" class="panle-title">监控 <small class="grey-l1_txt m-l16">今天2017/06/23</small></div>
      <m-row :gutter="16">
        <m-col class="xs-12 lg-6">
          <panel bg-color="#f2f2f2">
            <div slot="title" class="m-b32">
              <h5>InfoHub</h5>
              <p class="grey-l1_txt"><small>运行环境：机器名称（127.47.141.42）</small></p>
            </div>
            <m-row>
              <m-col class="xs-12 sm-6 m-b16">
                <d3-scale :height="140" :border="16" :data="scaledata">
                  <div class="text-center"><span class="use-icon"></span> CPU 的使用率</div>
                </d3-scale>
              </m-col>
              <m-col class="xs-12 sm-6 m-b16">
                <d3-scale :height="140" :border="16" :data="scaledata">
                  <div class="text-center"><span class="use-icon"></span> 内存 的使用率</div>
                </d3-scale>
              </m-col>
            </m-row>
          </panel>
        </m-col>
        <m-col class="xs-12 lg-6">
          <panel bg-color="#f2f2f2">
            <div slot="title" class="m-b32">
              <h5>Mem Data</h5>
              <p class="grey-l1_txt"><small>运行环境：机器名称（127.47.141.42）</small></p>
            </div>
            <m-row>
              <m-col class="xs-12 sm-6 m-b16">
                <d3-scale :height="140" :border="16" :data="scaledata">
                  <div class="text-center"><span class="use-icon"></span> CPU 的使用率</div>
                </d3-scale>
              </m-col>
              <m-col class="xs-12 sm-6 m-b16">
                <d3-scale :height="140" :border="16" :data="scaledata">
                  <div class="text-center"><span class="use-icon"></span> 内存 的使用率</div>
                </d3-scale>
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
      scaledata: [50, 150]
    }),
    mounted () {
      let ttt = setTimeout(_ => {
        clearTimeout(ttt)
        this.scaledata = [90, 150]
      }, 1000)
    }
  }
</script>
