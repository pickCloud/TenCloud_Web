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
    </div>
    <tab-tree :model="dataList"></tab-tree>
    </div>

  <div class="" style="background-color: #1d212a;height: 70px;display: flex;">
    <m-btn class="primary_bg grey-dark_txt" :sizeh="48" :sizew="300" style="margin: 11px auto" @click.native="commit">确认提交</m-btn>
  </div>
  </div>
</template>

<script>
  import axios from '../../store/request/axios'
  import {mapState, mapMutations} from 'vuex'
  export default {
    data: () => ({
      tempName: '',
      cid: '',
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
      dataList: []
    }),
    methods: {
      ...mapMutations('pop', ['setPopState']),
      ...mapMutations('permission', ['setState']),
      setCondition () {
        this.setPopState({name: 'pop_all', value: 2})
      },
      getData () {
        axios.http('company_getPermission', '', 'get', this.pop_params.cid).then(d => {
          d.data = this.setType(d.data)
          console.log(d.data)
          d.data.forEach(item => {
            this.dataList.push(item)
          })
        })
      },
      setType (list, type = null) {
        for (let i = 0; i < list.length; i++) {
          if (!type) {
            console.log(list[i].name)
            if (list[i].name === '功能' && list[i].data) {
              list[i].type = 'permissions'
              list[i].data = this.setType(list[i].data, 'permissions')
            } if (list[i].name === '数据' && list[i].data) {
              list[i].data = this.setType(list[i].data, null)
            } else if (list[i].name === '文件' && list[i].data) {
              list[i].type = 'access_filehub'
              list[i].data = this.setType(list[i].data, 'access_filehub')
            } else if (list[i].name === '项目' && list[i].data) {
              list[i].type = 'access_projects'
              list[i].data = this.setType(list[i].data, 'access_projects')
            } else if (list[i].name === '云服务' && list[i].data) {
              list[i].type = 'access_servers'
              list[i].data = this.setType(list[i].data, 'access_servers')
            }
          } else {
            if (list[i].data) {
              list[i].type = type
              list[i].data = this.setType(list[i].data, type)
            } else {
              list[i].type = type
            }
          }
        }
        return list
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
          permissions: this.permissions.join(','),
          access_servers: this.access_servers.join(','),
          access_projects: this.access_projects.join(','),
          access_filehub: this.access_filehub.join(',')
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
      ...mapState('pop', ['pop_params', 'pop_all']),
      ...mapState('permission', ['permissions', 'access_servers', 'access_projects', 'access_filehub'])
    },
    watch: {
    }
  }
</script>

<style lang="scss">

</style>
