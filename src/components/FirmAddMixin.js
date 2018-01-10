import axios from '../store/request/axios'
import {mapMutations, mapActions} from 'vuex'
export default {
  data: () => ({
    data: {
      name: '',
      contact: '',
      mobile: ''
    }
  }),
  methods: {
    ...mapMutations('user', ['UPDATE']),
    ...mapActions('navTop', ['getCompany']),
    checkData () {
      let temp = this.data.mobile === '' || !(/^1[34578]\d{9}$/.test(this.data.mobile))
      if (!this.data.name) {
        this.$toast('请填写企业名称', 'cc')
        return false
      }
      if (!this.data.contact) {
        this.$toast('请填写联系人', 'cc')
        return false
      }
      if (temp) {
        this.$toast('填写正确的手机号码', 'cc')
        return false
      }
      axios.http('company_create', this.data, 'post').then(d => {
        this.$toast('添加成功', 'cc')
        this.UPDATE({cid: d.data.cid,
          company_name: this.data.name})
        this.$axios.token.cid = d.data.cid
        this.getCompany(3)
        this.$router.push({name: 'FirmData', params: {id: d.data.cid}})
      })
    }
  },
  created () {
    this.data.mobile = this.$root.userinfo.mobile
    this.$store.commit('sitepath/SET_PATH', [
      {name: 'Main', cn: '主页'},
      {name: 'UserInfo', cn: '个人资料'},
      {cn: '添加企业'}
    ])
  },
  beforeDestroy () {
  }
}
