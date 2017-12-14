<template>
  <div >
    <div class="page-pad page-machine-detail" >
      <m-row :gutter="16">
        <m-col class="xs-12">
          <panel class="m-b16">
            <div class="panel-title flex-space-between" slot="title">
              <div class="flex-felx">
              <m-btn class="btn theme-dft" @click.native="selectType(0)" :class="type==0?'select-active':''">最新通知</m-btn>
              <m-btn class="btn theme-dft" @click.native="selectType(1)" :class="type==1?'select-active':''">历史消息</m-btn>
              <!--<m-btn class="btn theme-dft" @click.native="selectType(2)" :class="type==2?'select-active':''">最新通知</m-btn>-->
              </div>
              <div class="login-form_inp flex-space-between" style="height: 30px;line-height: 30px">
                <m-select :datas="selects" v-model="selectValue" :sizeh="38" :sizew="300" ></m-select>
                <input type="text" placeholder="输入关键字" v-model="searchWord" style="height: 38px;line-height: 30px">
              <!--<i class="iconfont icon-mima" style="top: 0px;"></i>-->
              </div>
            </div>
            <ul class="ul-li-border-bottom" v-if="messages.length>0" style="overflow: auto;height: 800px" @scroll="iscroll">
            <li class="flex-flex m-l16 p-b16 m-t16" v-for="item in messages" >
              <!--<div>-->
                <!--<img src="/static/img/spin.gif" class="head"/>-->
              <!--</div>-->
              <div class="m-l16">
                <div class="messages-type m-b16">
                  <span>{{messagesType(item.mode)}}</span>
                  <span>{{item.update_time}}</span>
                </div>
                <div class="messages-content line-25">
                  {{item.content}}
                </div>
                <!--<div class="m-b16">{{messagesTip(item.sub_mode)}}</div>-->
                <div class="btn primary_txt" @click="btn(item)">{{messagesBtn(item.sub_mode)+ ' >'}}</div>
              </div>
            </li>
            </ul>
            <div v-else class="p-16" style="overflow: auto;height:600px">暂无消息</div>
          </panel>
        </m-col>

      </m-row>
    </div>
  </div>
</template>

<script>
  import axios from '../store/request/axios'
  export default {
    data: () => ({
      type: 0,
      searchWord: '',
      messages: [],
      page: 1,
      isStillHave: true,
      mode: 1,
      selects: [{label: '加入企业', value: '1'}, {label: '企业信息改变', value: '2'}],
      selectValue: {label: '加入企业', value: '1'}
    }),
    methods: {
      selectType (type) {
        this.type = type
        this.page = 1
        this.messages = []
        this.isStillHave = true
        this.getMessages()
      },
      getMessages (isResetData = false) {
        axios.http('message_get', '', 'get', this.type + '?page=' + this.page + '&mode=' + this.selectValue.value).then(d => {
          if (d.data.length > 0) {
            if (isResetData) {
              this.messages = d.data
            } else {
              d.data.forEach((item) => {
                this.messages.push(item)
              })
            }
          } else {
            this.isStillHave = false
          }
        })
      },
      iscroll (e) {
        if (e.target.scrollHeight < e.target.scrollTop + e.target.offsetHeight + 1) {
          if (this.isStillHave) {
            this.page++
            this.getMessages()
          }
        }
      },
      messagesType (mode) {
        switch (mode) {
          case 1:
            return '加入企业'
          case 2:
            return '改变企业信息'
        }
      },
      messagesTip (code) {
        switch (code) {
          case 1:
            return '你可以核对信息后重新提交申请'
          case 2:
            return '你可以进入企业了'
          case 3:
            return ''
          case 0:
            return ''
        }
      },
      messagesBtn (code) {
        switch (code) {
          case 1:
            return '重新提交'
          case 2:
            return '进入企业'
          case 3:
            return '马上查看'
          case 0:
            return '马上审核'
        }
      },
      btn (item) {
        let list = []
        if (item.tip) list = item.tip.split(':')
        switch (item.sub_mode) {
          case 1:
            return this.$router.push({name: 'CompleteData', query: {code: list[1]}})
          case 2:
            return this.$router.push({name: 'FirmData', params: {id: list[0]}})
          case 3:
            return this.$router.push({name: 'FirmData', params: {id: list[0]}})
          case 0:
            return this.$router.push({name: 'FirmData', params: {id: list[0]}})
        }
      }
    },
    created () {
      this.getMessages()
    },
    beforeDestroy () {
    },
    watch: {
      'selectValue.value' (n) {
        this.page = 1
        this.getMessages(true)
      }
    }
  }
</script>

<style lang="scss">
.messages-type{
  color: #556278;
}
  .messages-content{
    width: 450px;
  }
</style>
