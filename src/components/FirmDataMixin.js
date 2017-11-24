import axios from '../store/request/axios'
import {mapState, mapMutations} from 'vuex'
export default {
  data: () => ({
    form: {
      name: '',
      mobile: '',
      create_time: '',
      update_time: ''
    },
    isEditor: false,
    module: [],
    employees: [],
    idType: ''
  }),
  methods: {
    ...mapMutations('pop', ['setPopState']),
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
      this.getBaseData()
      this.getEmployees()
      this.getModule()
    },
    getBaseData () {
      axios.http('company_detail', '', 'get', this.$route.params.id).then(d => {
        this.form = d.data[0]
      })
    },
    getEmployees () {
      axios.http('company_employe', '', 'get', this.$route.params.id + '/employees').then(d => {
        this.employees = d.data
      })
    },
    getModule () {
      axios.http('company_template', '', 'get', this.$route.params.id).then(d => {
        this.module = d.data
      })
    },
    addTemp () {
      this.setPopState({name: 'pop_all', value: 3})
      this.setPopState({name: 'pop_params', value: {cid: this.$route.params.id}})
    },
    changeTemp (id) {
      this.setPopState({name: 'pop_all', value: 5})
      this.setPopState({name: 'pop_params', value: {cid: id}})
    },
    invite () {
      this.setPopState({name: 'pop_all', value: 1})
      this.setPopState({name: 'pop_params', value: {cid: this.$route.params.id}})
    },
    inviteCondition () {
      this.setPopState({name: 'pop_all', value: 2})
      this.setPopState({name: 'pop_params', value: {cid: this.$route.params.id}})
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
    deleteTemp (id) {
      let p = {
        cid: this.$route.params.id
      }
      axios.http('company_getTemplate', p, 'post', this.$route.params.id).then(d => {
        this.$toast('删除成功', 'cc')
        this.getModule()
      })
    }
  },
  computed: {
    ...mapState('pop', ['pop_all'])
  },
  created () {
    this.getDataApi()
  },
  beforeDestroy () {
  },
  watch: {
    '$route': 'getDataApi'
  }
}
