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
    employees: []
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
        contact: this.form.name,
        name: ''
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
      axios.http('company_employe', '', 'get', this.$route.params.id + '/employees').then(d => {
        this.module = d.data
      })
    },
    invite () {
      this.setPopState({name: 'pop_all', value: 1})
      this.setPopState({name: 'pop_params', value: {cid: this.$route.params.id}})
    },
    inviteCondition () {
      this.setPopState({name: 'pop_all', value: 2})
      this.setPopState({name: 'pop_params', value: {cid: this.$route.params.id}})
    },
    company_accept (id) {
      axios.http('company_accept', {id: id}, 'post').then(d => {
        this.$toast('审核成功', 'cc')
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
  }
}
