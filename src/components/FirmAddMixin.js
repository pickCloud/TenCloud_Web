import axios from '../store/request/axios'
export default {
  data: () => ({
    data: {
      name: '',
      contact: '',
      mobile: ''
    }
  }),
  methods: {
    checkData () {
      let temp = this.data.mobile === '' || !(/^1[34578]\d{9}$/.test(this.data.mobile))
      if (temp) {
        this.$toast('填写正确的手机号码', 'cc')
        return false
      }
      if (!this.data.name) {
        this.$toast('请填写企业名称', 'cc')
        return false
      }
      if (!this.data.contact) {
        this.$toast('请填写联系人', 'cc')
        return false
      }
      axios.http('company_create', this.data, 'post').then(d => {
        this.$toast('添加成功', 'cc')
        this.$router.push({name: 'UserInfo'})
      }).catch(e => {
        this.$toast(e.message, 'cc')
      })
    }
  },
  created () {
  },
  beforeDestroy () {
  }
}
