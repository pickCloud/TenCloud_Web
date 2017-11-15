<template>
    <div style="margin: 0 auto;width: 300px">
      <div class="p-b16 line-50 text-center">勾选你需要个人提供的信息</div>
      <div class="flex-flex">
          <div class="flex-flex m-l16">
            <div class="label-inp-group checkbox list-check theme-dft"><input type="checkbox" checked class="__input" readonly="readonly"> <label for="uwbpc1oox2" class="__label-group" style="height: 32px; line-height: 32px;"><div class="__icon"></div></label></div>
          <div class="primary_txt"> 手机</div></div><div class="m-l16">*此选项为必选</div>
      </div>
      <div class="flex-flex">
          <div class="flex-flex m-l16">
          <div class="label-inp-group checkbox list-check theme-dft"><input type="checkbox" checked class="__input" readonly="readonly"> <label for="uwbpc1oox2" class="__label-group" style="height: 32px; line-height: 32px;"><div class="__icon"></div></label></div>
          <div class="primary_txt"> 姓名</div></div><div class="m-l16">*此选项为必选</div>
      </div>
      <div class="flex-flex">
          <div class="flex-flex m-l16">
            <div class="label-inp-group checkbox list-check theme-dft"><input type="checkbox" class="__input"> <label for="uwbpc1oox2" class="__label-group" style="height: 32px; line-height: 32px;"><div class="__icon"></div></label></div>
            <div class=""> 身份证号码</div></div>
      </div>
      <m-btn class="btn primary_bg grey-dark_txt" style="display: block;width: 200px;margin: 30px auto 16px" @click.native="setCondition">保存设置</m-btn>
    </div>
</template>

<script>
  import axios from '../../store/request/axios'
  import {mapState, mapMutations} from 'vuex'
  export default {
    data: () => ({
      identify: false
    }),
    methods: {
      ...mapMutations('pop', ['setPopState']),
      setCondition () {
        let p = {
          setting: 'name,mobile'
        }
        axios.http('company_setCondition', p, 'post', this.pop_params.cid + '/entry/setting').then(d => {
          this.setPopState({name: 'pop_all', value: 1})
        })
      }
    },
    computed: {
      ...mapState('pop', ['pop_params'])
    }
  }
</script>

<style>
</style>
