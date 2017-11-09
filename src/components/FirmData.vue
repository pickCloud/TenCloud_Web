<template>
    <div>
      <div class="page-pad page-machine-detail">
        <m-row :gutter="16">
          <m-col class="xs-12">
            <panel class="m-b16">
              <div class="panel-title flex-space-between" slot="title">
                <span class="bold m-r8">公司名字</span>
                <div >
                  <m-btn >修改</m-btn>
                </div>
              </div>
              <div class="flex-flex">
                <div class=""></div>
              </div>
            </panel>
          </m-col>

        </m-row>
      </div>
    </div>
</template>

<script>
  import FirmDataMixin from './FirmDataMixin.js'
  export default {
    mixins: [FirmDataMixin]
  }

</script>

<style>
</style>
