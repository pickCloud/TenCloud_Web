// import axios from '../../store/request/axios'
import {mapState, mapMutations} from 'vuex'

export default {
  data: () => ({
    type: 0,
    tietle: {
      '0': '邀请员工',
      '1': '邀请员工',
      '2': '邀请员工',
      '3': '邀请员工',
      '4': '邀请员工',
      '5': '邀请员工',
      '6': '邀请员工'
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
