<template>
  <div>
  <div class="p-16">
    <div class="flex-flex add-table p-b16" v-if="pop_all===3 || pop_all===5">
      <div v-if="pop_all===3">新增权限模板名称：</div>
      <div v-if="pop_all===5">修改权限模板名称：</div>
      <div style="width: 400px"><input class="input-placehold" placeholder="请输入权限模板的名称" v-model="tempName"/></div>
    </div>
    <div class="p-b16" v-if="pop_all===6">
      <div >
        <m-select :datas="selectData" v-model="selectValue" @change="moduleChange($event)" :sizeh="48" :sizew="300" style="border-radius: 5px;border: 1px solid #b2b2b2;"></m-select>
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
  import Event from '../Events'
  export default {
    data: () => ({
      tempName: '',
      cid: '',
      selectValue: {
        label: '请选择',
        value: ''
      },
      selectData: [
      ],
      dataList: []
    }),
    methods: {
      ...mapMutations('pop', ['setPopState']),
      ...mapMutations('permission', ['setState', 'changeState']),
      setCondition () {
        this.setPopState({name: 'pop_all', value: 2})
      },
      getData () {
        axios.http('company_getPermission', '', 'get', this.pop_params.cid).then(d => {
          d.data = this.setType(d.data)
          d.data.forEach(item => {
            this.dataList.push(item)
          })
        })
        if (this.pop_all === 3) {
//          this.getTempUser()
        }
        if (this.pop_all === 5) {
          this.getMudule()
          this.getTemp(this.pop_params.id)
        }
        if (this.pop_all === 6) {
          this.getMudule()
          this.getTempUser()
        }
      },
      moduleChange (e) {
//        console.log(e)
      },
      getMudule () {
        /* 获取模板list */
        this.$axios.http('company_template', '', 'get', this.pop_params.cid).then(d => {
          d.data.forEach(item => {
            this.selectData.push({label: item.name, value: item.id})
          })
        })
      },
      getTemp (id) {
        /* get module of temple(not user) */
        this.$axios.http('company_getTemplate', '', 'get', '/' + id + '/format/' + 1).then(d => {
          if (d.data) {
            this.changeState(d.data)
            this.tempName = d.data.name
          }
          Event.$emit('input')
        })
      },
      getTempUser (id) {
        this.$axios.http('company_getUserTemplate', '', 'get', this.pop_params.cid + '/user/' + this.pop_params.id + '/detail').then(d => {
          if (d.data) {
            this.changeState(d.data)
          }
        })
      },
      setType (list, type = null) {
        for (let i = 0; i < list.length; i++) {
          if (!type) {
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
            } else if (list[i].name === '云服务器' && list[i].data) {
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
        if (!this.tempName && this.pop_all === 3) {
          this.$toast('请输入模板名称', 'cc')
          return
        }
        if (this.permissions.length === 0 && this.access_servers.length === 0 && this.access_projects.length === 0 && this.access_filehub.length === 0) {
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
        if (this.pop_params === 6) {
          p.uid = this.pop_params.id
        }
        if (this.pop_all === 5) {
          this.changeTemp(p)
        } else {
          this.addTemp(p)
        }
      },
      changeTemp (p) {
        axios.http('company_getTemplate', p, 'put', '/' + this.pop_params.id + '/update').then(d => {
          this.$toast('操作成功', 'cc')
        }).catch(e => {
          this.$toast(e.message, 'cc')
        })
      },
      addTemp (p) {
        axios.http('template_add', p, 'post').then(d => {
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
      /* pop_all 3 是创建模板5是修改模板 6是修改用户模板 */
      ...mapState('pop', ['pop_params', 'pop_all']),
      ...mapState('permission', ['permissions', 'access_servers', 'access_projects', 'access_filehub'])
    },
    watch: {
      'selectValue' (n) {
        this.getTemp(n.value)
      }
    }
  }
</script>

<style lang="scss">

</style>
