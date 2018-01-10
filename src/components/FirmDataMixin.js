import axios from '../store/request/axios'
import {mapState, mapMutations, mapActions} from 'vuex'
import ChangeModuleName from './popx/ChangeModuleName.vue'
import Poppers from './Poppers.js'
import Selects from './Selects.js'
export default {
  mixins: [Poppers, Selects],
  data: () => ({
    form: {
      name: '',
      mobile: '',
      create_time: '',
      update_time: ''
    },
    isEditor: false,
    // module: [],
    idType: '',
    isAdmin: false
  }),
  methods: {
    ...mapMutations('pop', ['setPopState']),
    ...mapMutations('permission', ['clearState']),
    ...mapMutations('user', ['UPDATE']),
    ...mapActions('firmData', ['getEmployees', 'getModule']),
    ...mapActions('navTop', ['getCompany']),
    changeData () {
      this.isEditor = !this.isEditor
    },
    saveData () {
      let p = {
        cid: this.$route.params.id,
        mobile: this.form.mobile,
        contact: this.form.contact,
        name: this.form.name
      }
      if (this.form.name === '') {
        this.$toast('企业名称不能为空', 'cc')
        return false
      }
      if (this.form.mobile === '') {
        this.$toast('手机号码不能为空', 'cc')
        return false
      }
      if (this.form.contact === '') {
        this.$toast('名字不能不能为空', 'cc')
        return false
      }
      axios.http('company_updata', p, 'post').then(d => {
        this.isEditor = false
        this.$toast('更改成功', 'cc')
      }).catch(e => {
        this.$toast(e.message, 'cc')
      })
    },
    cancel () {
      this.isEditor = false
    },
    getDataApi () {
      this.getEmployees(this.$route.params.id)
      this.getModule(this.$route.params.id).then(d => {
        this.getBaseData()
      })
    },
    getBaseData () {
      axios.http('company_detail', '', 'get', this.$route.params.id).then(d => {
        let companyInfo = d.data[0]
        companyInfo.cid = companyInfo.id
        delete companyInfo.id
        this.form = companyInfo
        this.form.is_admin = this.isAdmin
        this.UPDATE(this.form)
        console.log(this.form)
      })
    },
    addTemp () {
      this.clearState()
      this.setPopState({name: 'pop_all', value: 3})
      this.setPopState({name: 'pop_params', value: {cid: this.$route.params.id}})
    },
    changeUserTemp (id) {
      this.setPopState({name: 'pop_all', value: 6})
      this.setPopState({name: 'pop_params', value: {cid: this.$route.params.id, id: id}})
    },
    lookUserTemp (id) {
      this.setPopState({name: 'pop_all', value: 7})
      this.setPopState({name: 'pop_params', value: {cid: this.$route.params.id, id: id}})
    },
    changeTemp (id) {
      this.setPopState({name: 'pop_all', value: 5})
      this.setPopState({name: 'pop_params', value: {cid: this.$route.params.id, id: id}})
    },
    invite () {
      this.setPopState({name: 'pop_all', value: 1})
      this.setPopState({name: 'pop_params', value: {cid: this.$route.params.id, company_name: this.form.name}})
    },
    leaveCompany () {
      let id = ''
      this.employees.forEach(item => {
        if (item.uid === this.$root.userinfo.id) {
          id = item.id
          return false
        }
      })
      axios.http('company_employee_dismission', {id: id}, 'post').then(d => {
        this.$toast('成功', 'cc')
        this.getCompany(3)
      })
      this.$router.push({name: 'UserInfo'})
    },
    inviteCondition () {
      this.setPopState({name: 'pop_all', value: 2})
      this.setPopState({name: 'pop_params', value: {cid: this.$route.params.id, company_name: this.form.name}})
    },
    permissionChange () {
      this.setPopState({name: 'pop_all', value: 4})
      this.setPopState({name: 'pop_params', value: {cid: this.$route.params.id}})
    },
    company_accept (id) {
      axios.http('company_accept', {id: id}, 'post').then(d => {
        this.$toast('审核成功', 'cc')
        this.getDataApi()
      })
    },
    company_reject (id) {
      axios.http('company_reject', {id: id}, 'post').then(d => {
        this.$toast('已拒绝', 'cc')
        this.getDataApi()
      })
    },
    company_dismission (id) {
      axios.http('company_dismission', {id: id}, 'post').then(d => {
        this.$toast('解除成功', 'cc')
        this.getDataApi()
      })
    },
    deleteTemp (item) {
      this.popperDelete('您确定要删除 ' + item.name + ' 模板吗？', _ => {
        let p = {
          pt_id: item.id,
          cid: this.$route.params.id
        }
        this.$axios.http('company_getTemplate', p, 'post', '/' + item.id + '/del').then(d => {
          this.$toast('删除成功', 'cc')
          this.getModule(this.$route.params.id)
        }, e => {})
      })
    },
    moduleMame (item) {
      this.$Popx({
        popper: ChangeModuleName,
        data: {
          title: '模板重命名'
        },
        callback: ({type, payload, next}) => {
          if (payload.type === 'sure') {
            this.$axios.http('company_getTemplate', {
              pt_id: item.id,
              cid: this.$route.params.id,
              name: payload.filename
            }, 'post', '/' + item.id + '/rename').then(d => {
              this.getModule(this.$route.params.id)
              next()
            })
          } else {
            next()
          }
        }
      })
    },
    isShow (name) {
      return this.$store.state.user.currentUser.is_admin || this.$store.state.user.currentPermission.indexOf(this.$store.state.user.permissions[name]) !== -1
    }
  },
  computed: {
    ...mapState('pop', ['pop_all']),
    ...mapState('firmData', ['employees', 'module']),
    ...mapState('user', ['currentUser']),
    inputW () {
      return window.innerWidth * 300 / 1920
    },
    inputH () {
      return window.innerWidth * 190 / 1920
    }
  },
  created () {
    this.getDataApi()
    this.$store.commit('sitepath/SET_PATH', [
      {name: 'Main', cn: '主页'},
      {cn: '企业资料'}
    ])
  },
  beforeDestroy () {
  },
  watch: {
    '$route': 'getDataApi',
    'employees': function () {
      this.employees.forEach(item => {
        if (item.mobile === this.$root.userinfo.mobile) {
          this.isAdmin = item.is_admin
        }
      })
    }
  }
}
