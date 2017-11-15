<template>
    <div>
      <div class="p-b16">
      <span>你将邀请同事加入</span><span class="primary_txt">厦门十全十美网络科技有限公司</span>
      </div>
      <div class="p-b16">加入企业需要个人提供<span class="primary_txt">手机、姓名、身份证号，</span>如需要改,请
      <m-btn class="btn green-l_txt" @click.native="setCondition">设置</m-btn>
      </div>
      <div class="p-b16">邀请流程</div>
      <img src="../../../static/img/tip1.png" style="margin: 0 auto;display: block"/>
      <div style="width:220px;margin: 50px auto 10px" class="p-b16">
        <m-btn class="primary_bg grey-dark_txt bold" v-clipboard="clipboard" :data-text="item.url" :data-params="item.id" :sizeh="50" style="width: 100%;line-height: 50px;height: 50px">生成链接,分享邀请</m-btn>
      </div>
      <div class="share">
        <div class="box striped_bg over-hidden" v-if="item.isCopy">
          <div class="m-t16 primary_txt text-center" >链接生成成功并复制！马上去分享吧</div>
          <div class="flex-space-between" style="width:180px;margin: 30px auto">
            <div class="btn"><img src="../../../static/img/weixin.png"/></div>
            <div class="btn"><img src="../../../static/img/qq.png"/></div>
            <div class="btn"><img src="../../../static/img/duanxin.png" /></div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import axios from '../../store/request/axios'
  import {mapState, mapMutations} from 'vuex'
  export default {
    data: () => ({
      item: {
        id: '',
        url: '',
        isCopy: false
      }
    }),
    methods: {
      ...mapMutations('pop', ['setPopState']),
      clipboard (d) {
        if (d.action === 'copy') {
          this.$toast('复制成功', 'cc')
          this.item.isCopy = true
        }
      },
      getShare () {
        axios.http('company_invite', '', 'get', this.pop_params.cid + '/entry/url').then(d => {
          this.item.url = d.data.url
        })
      },
      setCondition () {
        this.setPopState({name: 'pop_all', value: 2})
      }
    },
    created () {
      this.getShare()
    },
    computed: {
      ...mapState('pop', ['pop_params'])
    }
  }
</script>

<style lang="scss">
  .share{
    width: 500px;
    height: 115px;
    margin: 0 auto;
    .box{
      width: 500px;
      height: 115px;
      border-radius: 5px;
    }
  }
</style>
