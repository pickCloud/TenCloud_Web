<template>
  <div>
  <div class="p-16">
    <div class="flex-flex p-b16" >
    </div>
    <tab-tree :model="dataList"></tab-tree>
    </div>
  </div>
</template>

<script>
  import axios from '../../store/request/axios'
  import {mapState, mapMutations} from 'vuex'
//  import Event from '../Events'
  export default {
    data: () => ({
      tempName: '',
      cid: '',
      dataList: []
    }),
    methods: {
      ...mapMutations('pop', ['setPopState']),
      ...mapMutations('permission', ['setState', 'changeState']),
      getData () {
        axios.http('company_getPermission', '', 'get', this.pop_params.cid).then(d => {
          d.data = this.setType(d.data)
          d.data.forEach(item => {
            this.dataList.push(item)
          })
        })
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
      getTempUser (id) {
        this.$axios.http('company_getTemplate', '', 'get', '/' + id + '/format/' + 0).then(d => {
          if (d.data) {
            d.data.forEach(item => {
              this.dataList.push(item)
            })
          }
        })
      }
    },
    created () {
//      this.getData()
      this.getTempUser(this.pop_params.id)
    },
    computed: {
      /* pop_all 3 是创建模板5是修改模板 6是修改用户模板 */
      ...mapState('pop', ['pop_params', 'pop_all']),
      ...mapState('permission', ['permissions', 'access_servers', 'access_projects', 'access_filehub'])
    }
  }
</script>

<style lang="scss">

</style>
