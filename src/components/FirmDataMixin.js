import axios from '../store/request/axios'
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
    changeData () {
      this.isEditor = !this.isEditor
    },
    saveData () {
      let p = {
        cid: this.$route.parmas.id,
        mobile: this.form.mobile,
        contact: this.form.name,
        name: ''
      }

      axios.http('company_updata', p, 'post').then(d => {
        this.$toast('更改成功', 'cc')
      }).catch(e => {

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
    }
  },
  created () {
    this.getDataApi()
  },
  beforeDestroy () {
  }
}
