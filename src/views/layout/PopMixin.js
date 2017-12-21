// import axios from '../../store/request/axios'
import {mapState, mapMutations} from 'vuex'

export default {
  data: () => ({
    tietle: {
      '1': '邀请员工',
      '2': '设置员工加入条件',
      '3': '新增权限模板',
      '4': '更换管理员',
      '5': '修改权限',
      '6': '修改用户权限',
      '7': '邀请员工',
      '8': '申请加入已有企业'
    }
  }),
  methods: {
    ...mapMutations('pop', ['setPopState']),
    nextStep () {
    },
    backLogin () {
      this.$router.push({name: 'Login'})
    },
    closePop () {
      this.setPopState({name: 'pop_all', value: false})
    },
    getBack () {
      this.type--
    }
  },
  computed: {
    ...mapState('pop', ['pop_all'])
  },
  created () {
  },
  watch: {
  }
}
