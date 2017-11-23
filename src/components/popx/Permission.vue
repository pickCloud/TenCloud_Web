<template>
  <div>
  <div class="p-16">
    <div class="flex-flex add-table p-b16">
      <div>新增权限模板名称：</div>
      <div style="width: 400px"><input class="input-placehold" placeholder="请输入权限模板的名称" v-model="name"/></div>
    </div>
    <div class="p-b16">
      <div >
        <m-select :datas="selectData" v-model="selectValue" :sizeh="48" :sizew="300" style="border-radius: 5px;border: 1px solid #b2b2b2;"></m-select>
      </div>
    </div>
    <div class="flex-flex p-b16" >
      <m-btn :sizeh="30" :sizew="70" :class="btnIndex==0?'primary_bg grey-dark_txt':'panel-bg_bg'" @click.native="btnIndexChange(0)">功能</m-btn>
      <m-btn :sizeh="30" :sizew="70" class="m-l16 " :class="btnIndex==1?'primary_bg grey-dark_txt':'panel-bg_bg'" @click.native="btnIndexChange(1)">数据</m-btn>
    </div>
    <div v-if="btnIndex==0">
      <div class="flex-flex">
        <div class="flex-flex">
          <m-btn :sizeh="30" :class="btnDoIndex==0?'select-active':''" @click.native="btnDoIndexChange(0)">云服务器</m-btn>
          <m-btn :sizeh="30"  class="m-l16 " :class="btnDoIndex==1?'select-active':''" @click.native="btnDoIndexChange(1)">项目</m-btn>
          <m-btn :sizeh="30"  class="m-l16 " :class="btnDoIndex==2?'select-active':''" @click.native="btnDoIndexChange(2)">文件服务</m-btn>
          <m-btn :sizeh="30"  class="m-l16 " :class="btnDoIndex==3?'select-active':''" @click.native="btnDoIndexChange(3)">企业管理</m-btn>
          <m-btn :sizeh="30"  class="m-l16 " :class="btnDoIndex==4?'select-active':''" @click.native="btnDoIndexChange(4)">平台管理</m-btn>
        </div>
      </div>
    </div>
    <div v-else="btnDoIndex==1">
      <div class="flex-flex">
        <m-btn :sizeh="30" :class="btnDataIndex==0?'select-active':''" @click.native="btnDataIndexChange(0)">云服务器</m-btn>
        <m-btn :sizeh="30"  class="m-l16 " :class="btnDataIndex==1?'select-active':''" @click.native="btnDataIndexChange(1)">项目</m-btn>
        <m-btn :sizeh="30"  class="m-l16 " :class="btnDataIndex==2?'select-active':''" @click.native="btnDataIndexChange(2)">文件服务</m-btn>
      </div>
      <div>
        <m-table class="hover striped machines-table">
          <col width="55px" >
          <thead>
          <tr>
            <th><m-checkbox class="list-check" :data="{label: '全选'}" v-model="isSelectAll"></m-checkbox></th>
          </tr>
          </thead>
          <tbody>
          <tr >
            <td  ><m-checkbox v-for="item in listts" class="list-check" v-model="selects" :data="{label:(item.label+'')}"></m-checkbox></td>
          </tr>
          </tbody>
        </m-table>
      </div>
      <!--<m-checkbox class="list-check" :data="{label: '全选'}" v-model="isSelectAll"></m-checkbox>-->
    </div>
  </div>

  <div class="" style="background-color: #1d212a;height: 70px;display: flex;">
    <m-btn class="primary_bg grey-dark_txt" :sizeh="48" :sizew="300" style="margin: 11px auto">确认提交</m-btn>
  </div>
  </div>
</template>

<script>
  import axios from '../../store/request/axios'
  import {mapState, mapMutations} from 'vuex'
  export default {
    data: () => ({
      name: '',
      cid: '',
      permissions: [],
      access_servers: [],
      access_projects: [],
      access_filehub: [],
      selectValue: {
        label: '请选择',
        value: ''
      },
      selectData: [
        {label: '管理员', value: '1'},
        {label: '管理员1', value: '2'},
        {label: '管理员2', value: '3'},
        {label: '管理员3', value: '4'}
      ],
      btnIndex: 0,
      btnDoIndex: 0,
      btnDataIndex: 0,
      listts: [{label: '1', value: 0}, {label: '2', value: 1}]
    }),
    methods: {
      ...mapMutations('pop', ['setPopState']),
      setCondition () {
        this.setPopState({name: 'pop_all', value: 2})
      },
      getData () {
        axios.http('company_getPermission', '', 'get', this.pop_params.cid).then(d => {
          this.access_servers = d.data.access_servers
          this.access_projects = d.data.access_projects
          this.access_filehub = d.data.access_filehub
          this.permissions = d.data.permissions
        })
      },
      btnIndexChange (index) {
        this.btnIndex = index
      },
      btnDataIndexChange (index) {
        this.btnDataIndex = index
      },
      btnDoIndexChange (index) {
        this.btnDoIndex = index
      }
    },
    created () {
      this.getData()
    },
    computed: {
      ...mapState('pop', ['pop_params'])
    }
  }
</script>

<style lang="scss">

</style>
