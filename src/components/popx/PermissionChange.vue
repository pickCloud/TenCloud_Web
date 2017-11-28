<template>
    <div>
      <panel class="">
        <div class="panel-body p-b16">
          <table class="table hover striped theme-dft pad-table ">
            <col width="5%">
            <col width="20%">
            <col width="20%">
            <col width="20%">
            <col width="20%">
            <col width="15%">
            <thead>
            <tr>
              <th></th>
              <th>姓名</th>
              <th>手机</th>
              <!--<th>身份证号</th>-->
              <th>申请时间</th>
              <th>加入时间</th>
              <th>状态</th>

            </tr>
            </thead>
            <tbody style="height: 700px;overflow: auto">
            <tr v-for="item in employees" v-if="item.status!==-1">
              <td >
                <m-radio v-model="watchId" :data="{label: '', value: item.uid}" ></m-radio>
              </td>
              <td><i class="iconfont icon-guanliyuan yellow_txt" style="margin-right: 5px" v-if="item.is_admin"></i>{{item.name}}</td>
              <td>{{item.mobile}}</td>
              <!--<td>{{item.is_admin}}</td>-->
              <td>{{item.create_time}}</td>
              <td>{{item.update_time}}</td>
              <td :class="item.status===0?'pass_tip':''">{{item.status===1?'已通过审核':item.status===0?'待审核':'审核不通过'}}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </panel>
      <div class="" style="background-color: #1d212a;height: 70px;display: flex;">
        <m-btn class="primary_bg grey-dark_txt" :sizeh="48" :sizew="300" style="margin: 11px auto" @click.native="changeAdmin">确认提交</m-btn>
      </div>
    </div>
</template>

<script>
  import axios from '../../store/request/axios'
  import {mapState, mapMutations, mapActions} from 'vuex'
  export default {
    data: () => ({
      employees: [],
      userId: 0
    }),
    methods: {
      ...mapMutations('pop', ['setPopState']),
      ...mapActions('firmData', ['getEmployees']),
      setCondition () {
        this.setPopState({name: 'pop_all', value: 2})
      },
      getData () {
        axios.http('company_employe', '', 'get', this.pop_params.cid + '/employees').then(d => {
          this.employees = d.data
          this.employees.forEach((item) => {
            if (item.is_admin) {
              this.userId = item.uid
            }
          })
        })
      },
      changeAdmin () {
        axios.http('company_adminTransfer', {uids: [this.userId], cid: this.pop_params.cid}, 'post').then(d => {
          this.setPopState({name: 'pop_all', value: 0})
          this.$toast('更换成功', 'cc')
          this.getEmployees(this.pop_params.cid)
        }).catch(e => {
          this.$toast(e.message, 'cc')
        })
      }
    },
    created () {
      this.getData()
    },
    computed: {
      ...mapState('pop', ['pop_params']),
      watchId: {
        get () {
          return this.userId + ''
        },
        set (value) {
          this.userId = value
        }
      }

    },
    watch: {
    }

  }
</script>

<style>
</style>
