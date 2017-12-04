<template>
  <div>
  <div class="p-16">
    <div class="flex-flex add-table p-b16" v-if="pop_all===3 || pop_all===5">
      <div>新增权限模板名称：</div>
      <div style="width: 400px"><input class="input-placehold" placeholder="请输入权限模板的名称" v-model="tempName"/></div>
    </div>
    <div class="p-b16" v-if="pop_all===6">
      <div >
        <m-select :datas="selectData" v-model="selectValue" :sizeh="48" :sizew="300" style="border-radius: 5px;border: 1px solid #b2b2b2;"></m-select>
      </div>
    </div>
    <div class="flex-flex p-b16" >
      <!--<m-btn :sizeh="30" :sizew="70" :class="btnIndex==0?'primary_bg grey-dark_txt':'panel-bg_bg'" @click.native="btnIndexChange(0)">功能</m-btn>-->
      <!--<m-btn :sizeh="30" :sizew="70" class="m-l16 " :class="btnIndex==1?'primary_bg grey-dark_txt':'panel-bg_bg'" @click.native="btnIndexChange(1)">数据</m-btn>-->
      <!--<tab-first>-->
        <!--<slot name="TabSecond"></slot>-->
      <!--</tab-first>-->
    </div>
    <!--<tabs name="tabs" :dataList="dataList">-->
    <!--</tabs>-->
    <tab-tree :model="dataList"></tab-tree>
    <!--<div v-if="btnIndex==0">-->
      <!--<div class="flex-flex">-->
        <!--<div class="flex-flex">-->
          <!--<m-btn :sizeh="30" :class="btnDoIndex==0?'select-active':''" @click.native="btnDoIndexChange(0)">云服务器</m-btn>-->
          <!--<m-btn :sizeh="30"  class="m-l16 " :class="btnDoIndex==1?'select-active':''" @click.native="btnDoIndexChange(1)">项目</m-btn>-->
          <!--<m-btn :sizeh="30"  class="m-l16 " :class="btnDoIndex==2?'select-active':''" @click.native="btnDoIndexChange(2)">文件服务</m-btn>-->
          <!--<m-btn :sizeh="30"  class="m-l16 " :class="btnDoIndex==3?'select-active':''" @click.native="btnDoIndexChange(3)">企业资料</m-btn>-->
          <!--<m-btn :sizeh="30"  class="m-l16 " :class="btnDoIndex==4?'select-active':''" @click.native="btnDoIndexChange(4)">员工管理</m-btn>-->
          <!--<m-btn :sizeh="30"  class="m-l16 " :class="btnDoIndex==5?'select-active':''" @click.native="btnDoIndexChange(5)">权限模板管理</m-btn>-->
          <!--<m-btn :sizeh="30"  class="m-l16 " :class="btnDoIndex==6?'select-active':''" @click.native="btnDoIndexChange(6)">平台管理</m-btn>-->
        <!--</div>-->
      <!--</div>-->
      <!--<div v-if="btnDoIndex==0">-->
        <!--<m-table class="hover striped machines-table m-t16" >-->
          <!--<col width="55px" >-->
          <!--<thead>-->
          <!--<tr class="panel">-->
            <!--<th><m-checkbox class="list-check" :data="{label: '全选'}" v-model="is0"></m-checkbox></th>-->
          <!--</tr>-->
          <!--</thead>-->
          <!--<tbody>-->
          <!--<tr>-->
            <!--<td>-->
              <!--<span v-for="item in permissions[btnDoIndex]">-->
              <!--<m-checkbox  class="list-check" v-model="select0Permissions" :data="{label:(item.id+'')}" hide-label></m-checkbox>-->
                <!--<span>{{item.name}}</span>-->
              <!--</span>-->
            <!--</td>-->
          <!--</tr>-->
          <!--</tbody>-->
        <!--</m-table>-->
      <!--</div>-->
      <!--<div v-if="btnDoIndex==1">-->
        <!--<m-table class="hover striped machines-table m-t16" >-->
          <!--<col width="55px" >-->
          <!--<thead>-->
          <!--<tr class="panel">-->
            <!--<th><m-checkbox class="list-check" :data="{label: '全选'}" v-model="is1"></m-checkbox></th>-->
          <!--</tr>-->
          <!--</thead>-->
          <!--<tbody>-->
          <!--<tr >-->
            <!--<td>-->
              <!--<span v-for="item in permissions[btnDoIndex]">-->
              <!--<m-checkbox  class="list-check" v-model="select1Permissions" :data="{label:(item.id+'')}" hide-label></m-checkbox>-->
                <!--<span>{{item.name}}</span>-->
              <!--</span>-->
            <!--</td>-->
          <!--</tr>-->
          <!--</tbody>-->
        <!--</m-table>-->
      <!--</div>-->
      <!--<div v-if="btnDoIndex==2">-->
        <!--<m-table class="hover striped machines-table m-t16" >-->
          <!--<col width="55px" >-->
          <!--<thead>-->
          <!--<tr class="panel">-->
            <!--<th><m-checkbox class="list-check" :data="{label: '全选'}" v-model="is2"></m-checkbox></th>-->
          <!--</tr>-->
          <!--</thead>-->
          <!--<tbody>-->
          <!--<tr class="panel">-->
            <!--<td>-->
              <!--<span v-for="item in permissions[btnDoIndex]">-->
              <!--<m-checkbox  class="list-check" v-model="select2Permissions" :data="{label:(item.id+'')}" hide-label></m-checkbox>-->
                <!--<span>{{item.name}}</span>-->
              <!--</span>-->
            <!--</td>-->
          <!--</tr>-->
          <!--</tbody>-->
        <!--</m-table>-->
      <!--</div>-->
      <!--<div v-if="btnDoIndex==3">-->
        <!--<m-table class="hover striped machines-table m-t16" >-->
          <!--<col width="55px" >-->
          <!--<thead>-->
          <!--<tr class="panel">-->
            <!--<th><m-checkbox class="list-check" :data="{label: '全选'}" v-model="is3"></m-checkbox></th>-->
          <!--</tr>-->
          <!--</thead>-->
          <!--<tbody>-->
          <!--<tr>-->
            <!--<td>-->
              <!--<span v-for="item in permissions[btnDoIndex]">-->
              <!--<m-checkbox  class="list-check" v-model="select3Permissions" :data="{label:(item.id+'')}" hide-label></m-checkbox>-->
                <!--<span>{{item.name}}</span>-->
              <!--</span>-->
            <!--</td>-->
          <!--</tr>-->
          <!--</tbody>-->
        <!--</m-table>-->
      <!--</div>-->
      <!--<div v-if="btnDoIndex==4">-->
        <!--<m-table class="hover striped machines-table m-t16" >-->
          <!--<col width="55px" >-->
          <!--<thead>-->
          <!--<tr class="panel">-->
            <!--<th><m-checkbox class="list-check" :data="{label: '全选'}" v-model="is4"></m-checkbox></th>-->
          <!--</tr>-->
          <!--</thead>-->
          <!--<tbody>-->
          <!--<tr >-->
            <!--<td>-->
              <!--<span v-for="item in permissions[btnDoIndex]">-->
              <!--<m-checkbox  class="list-check" v-model="select4Permissions" :data="{label:(item.id+'')}" hide-label></m-checkbox>-->
                <!--<span>{{item.name}}</span>-->
              <!--</span>-->
            <!--</td>-->
          <!--</tr>-->
          <!--</tbody>-->
        <!--</m-table>-->
      <!--</div>-->
      <!--<div v-if="btnDoIndex==5">-->
        <!--<m-table class="hover striped machines-table m-t16" >-->
          <!--<col width="55px" >-->
          <!--<thead>-->
          <!--<tr class="panel">-->
            <!--<th><m-checkbox class="list-check" :data="{label: '全选'}" v-model="is5"></m-checkbox></th>-->
          <!--</tr>-->
          <!--</thead>-->
          <!--<tbody>-->
          <!--<tr>-->
            <!--<td>-->
              <!--<span v-for="item in permissions[btnDoIndex]">-->
              <!--<m-checkbox  class="list-check" v-model="select5Permissions" :data="{label:(item.id+'')}" hide-label></m-checkbox>-->
                <!--<span>{{item.name}}</span>-->
              <!--</span>-->
            <!--</td>-->
          <!--</tr >-->
          <!--</tbody>-->
        <!--</m-table>-->
      <!--</div>-->
      <!--<div v-if="btnDoIndex==6">-->
        <!--<m-table class="hover striped machines-table m-t16" >-->
          <!--<col width="55px" >-->
          <!--<thead>-->
          <!--<tr class="panel">-->
            <!--<th><m-checkbox class="list-check" :data="{label: '全选'}" v-model="is6"></m-checkbox></th>-->
          <!--</tr>-->
          <!--</thead>-->
          <!--<tbody>-->
          <!--<tr  >-->
            <!--<td >-->
              <!--<span v-for="item in permissions[btnDoIndex]">-->
              <!--<m-checkbox  class="list-check" v-model="select6Permissions" :data="{label:(item.id+'')}" hide-label></m-checkbox>-->
                <!--<span>{{item.name}}</span>-->
              <!--</span>-->
            <!--</td>-->
          <!--</tr>-->
          <!--</tbody>-->
        <!--</m-table>-->
      <!--</div>-->
    <!--</div>-->
    <!--<div v-else>-->
      <!--<div class="flex-flex">-->
        <!--&lt;!&ndash;<m-btn :sizeh="30" :class="btnDataIndex==0?'select-active':''" @click.native="btnDataIndexChange(0)">云服务器</m-btn>&ndash;&gt;-->
        <!--<m-btn :sizeh="30"  class="m-l16 " :class="btnDataIndex==1?'select-active':''" @click.native="btnDataIndexChange(1)">项目</m-btn>-->
        <!--<m-btn :sizeh="30"  class="m-l16 " :class="btnDataIndex==2?'select-active':''" @click.native="btnDataIndexChange(2)">文件服务</m-btn>-->
      <!--</div>-->
      <!--<div v-if="btnDataIndex==0">-->
        <!--<m-table class="hover striped machines-table m-t16" v-for="itemOut in access_servers">-->
          <!--<col width="55px" >-->
          <!--<thead>-->
          <!--<tr class="panel">-->
            <!--<th><m-checkbox class="list-check" :data="{label: itemOut.name}" v-model="isSelectServerAll"></m-checkbox></th>-->
          <!--</tr>-->
          <!--</thead>-->
          <!--<tbody>-->
          <!--<tr>-->
            <!--<td>-->
              <!--<span >-->
              <!--<m-checkbox  class="list-check" v-model="selectServers" :data="{label:(item.id+'')}" hide-label></m-checkbox>-->
                <!--<span>{{item.name}}</span>-->
              <!--</span>-->
            <!--</td>-->
          <!--</tr>-->
          <!--</tbody>-->
        <!--</m-table>-->
      <!--</div>-->
      <!--<div v-if="btnDataIndex==1">-->
        <!--<m-table class="hover striped machines-table m-t16">-->
          <!--<col width="55px" >-->
          <!--<thead>-->
          <!--<tr class="panel">-->
            <!--<th><m-checkbox class="list-check" :data="{label: '全选'}" v-model="isSelectProjectsAll"></m-checkbox></th>-->
          <!--</tr>-->
          <!--</thead>-->
          <!--<tbody>-->
          <!--<tr >-->
            <!--<td>-->
              <!--<span v-for="item in access_projects">-->
              <!--<m-checkbox  class="list-check" v-model="selectProjects" :data="{label:(item.id+'')}" hide-label></m-checkbox>-->
                <!--<span>{{item.name}}</span>-->
              <!--</span>-->
            <!--</td>-->
          <!--</tr>-->
          <!--</tbody>-->
        <!--</m-table>-->
      <!--</div>-->
        <!--<div v-if="btnDataIndex==2">-->
          <!--<m-table class="hover striped machines-table m-t16">-->
            <!--<col width="55px">-->
            <!--<thead>-->
            <!--<tr class="panel">-->
              <!--<th><m-checkbox class="list-check" :data="{label: '全选'}" v-model="isSelectFilehubAll"></m-checkbox></th>-->
            <!--</tr>-->
            <!--</thead>-->
            <!--<tbody>-->
            <!--<tr >-->
              <!--<td>-->
              <!--<span v-for="item in access_filehub">-->
              <!--<m-checkbox  class="list-check" v-model="selectFilehub" :data="{label:(item.id+'')}" hide-label></m-checkbox>-->
                <!--<span>{{item.filename}}</span>-->
              <!--</span>-->
              <!--</td>-->
            <!--</tr>-->
            <!--</tbody>-->
          <!--</m-table>-->
        <!--</div>-->
      <!--</div>-->
    </div>

  <div class="" style="background-color: #1d212a;height: 70px;display: flex;">
    <m-btn class="primary_bg grey-dark_txt" :sizeh="48" :sizew="300" style="margin: 11px auto" @click.native="commit">确认提交</m-btn>
  </div>
  </div>
</template>

<script>
  import axios from '../../store/request/axios'
  import {mapState, mapMutations} from 'vuex'
//  import TabSecond from "../vue-permission/TabSecond/Main.vue";
//  import TabSecond from "../vue-permission/TabSecond/Main.vue";
//  import TabFirst from "../vue-permission/TabFirst/Main.vue";
  export default {
//    components: {TabFirst},
//    components: {TabSecond},
//    components: {TabSecond},
    data: () => ({
      tempName: '',
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
      btnDataIndex: 1,
      selectServers: [],
      selectProjects: [],
      selectFilehub: [],
      selectPermissions: [],
      isSelectServerAll: false,
      isSelectFilehubAll: false,
      isSelectProjectsAll: false,
      isSelectPermissionsAll: false,
      is0: false,
      is1: false,
      is2: false,
      is3: false,
      is4: false,
      is5: false,
      is6: false,
      select0Permissions: [],
      select1Permissions: [],
      select2Permissions: [],
      select3Permissions: [],
      select4Permissions: [],
      select5Permissions: [],
      select6Permissions: [],
      dataList: []
    }),
    methods: {
      ...mapMutations('pop', ['setPopState']),
      setCondition () {
        this.setPopState({name: 'pop_all', value: 2})
      },
      getData () {
        axios.http('company_getPermission', '', 'get', this.pop_params.cid).then(d => {
          d.data.forEach(item => {
            this.dataList.push(item)
          })
        })
      },
      btnIndexChange (index) {
        this.btnIndex = index
      },
      changeType (data) {
        data.data.forEach(item => {
          if (item.name === '功能') {
            this.setDataType()
          }
        })
        return data
      },
      setDataType (data, type) {
      },
      commit () {
        if (!this.tempName) {
          this.$toast('请输入模板名称', 'cc')
          return
        }
        if (this.is0.length === 0 && this.is1.length === 0 && this.is2.length === 0 && this.is3.length === 0 && this.is4.length === 0 && this.is5.length === 0 && this.is6.length === 0) {
          this.$toast('请至少选择一个模板', 'cc')
          return
        }
        let p = {
          name: this.tempName,
          cid: this.pop_params.cid,
          permissions: this.selectPermissions.join(','),
          access_servers: this.selectServers.join(','),
          access_projects: this.selectProjects.join(','),
          access_filehub: this.selectFilehub.join(',')
        }
        let method = this.pop_all === 3 ? 'post' : 'put'
        axios.http('template_add', p, method).then(d => {
          this.$toast('操作成功', 'cc')
        }).catch(e => {
          this.$toast(e.message, 'cc')
        })
      }
    },
    created () {
      this.getData()
    },
    computed: {
      ...mapState('pop', ['pop_params', 'pop_all'])
    },
    watch: {
      'isSelectServerAll' (n, o) {
        if (n) {
          this.access_servers.forEach((v, i) => {
            let key = v.id + ''
            if (this.selectServers.indexOf(key) === -1) this.selectServers.push(key)
          })
        } else {
          this.selectServers = []
        }
      },
      'isSelectFilehubAll' (n, o) {
        if (n) {
          this.access_filehub.forEach((v, i) => {
            let key = v.id + ''
            if (this.selectFilehub.indexOf(key) === -1) this.selectFilehub.push(key)
          })
        } else {
          this.selectFilehub = []
        }
      },
      'isSelectProjectsAll' (n, o) {
        if (n) {
          this.access_projects.forEach((v, i) => {
            let key = v.id + ''
            if (this.selectProjects.indexOf(key) === -1) this.selectProjects.push(key)
          })
        } else {
          this.selectProjects = []
        }
      },
      'is0' (n, o) {
        if (n) {
          this.permissions[this.btnDoIndex].forEach((v, i) => {
            let key = v.id + ''
            if (this.select0Permissions.indexOf(key) === -1) this.select0Permissions.push(key)
          })
        } else {
          this.select0Permissions = []
        }
      },
      'is1' (n, o) {
        if (n) {
          this.permissions[this.btnDoIndex].forEach((v, i) => {
            let key = v.id + ''
            if (this.select1Permissions.indexOf(key) === -1) this.select1Permissions.push(key)
          })
        } else {
          this.select1Permissions = []
        }
      },
      'is2' (n, o) {
        if (n) {
          this.permissions[this.btnDoIndex].forEach((v, i) => {
            let key = v.id + ''
            if (this.select2Permissions.indexOf(key) === -1) this.select2Permissions.push(key)
          })
        } else {
          this.select2Permissions = []
        }
      },
      'is3' (n, o) {
        if (n) {
          this.permissions[this.btnDoIndex].forEach((v, i) => {
            let key = v.id + ''
            if (this.select3Permissions.indexOf(key) === -1) this.select3Permissions.push(key)
          })
        } else {
          this.select3Permissions = []
        }
      },
      'is4' (n, o) {
        if (n) {
          this.permissions[this.btnDoIndex].forEach((v, i) => {
            let key = v.id + ''
            if (this.select4Permissions.indexOf(key) === -1) this.select4Permissions.push(key)
          })
        } else {
          this.select4Permissions = []
        }
      },
      'is5' (n, o) {
        if (n) {
          this.permissions[this.btnDoIndex].forEach((v, i) => {
            let key = v.id + ''
            if (this.select5Permissions.indexOf(key) === -1) this.select5Permissions.push(key)
          })
        } else {
          this.select5Permissions = []
        }
      },
      'is6' (n, o) {
        if (n) {
          this.permissions[this.btnDoIndex].forEach((v, i) => {
            let key = v.id + ''
            if (this.select6Permissions.indexOf(key) === -1) this.select6Permissions.push(key)
          })
        } else {
          this.select6Permissions = []
        }
      }
    }
  }
</script>

<style lang="scss">

</style>
