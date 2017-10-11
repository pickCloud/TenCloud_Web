import Selects from './Selects.js'
import Poppers from './Poppers.js'
import {mapGetters, mapMutations, mapActions} from 'vuex'
export default {
  mixins: [Poppers, Selects],
  data: () => ({
    modelCn: ['普通项目', '基础服务', '应用组件']
  }),
  computed: {
    ...mapGetters('projects', [
      'listts'
    ])
  },
  methods: {
    ...mapMutations('projects', ['setListts', 'deleteItem']),
    ...mapActions('projects', ['getProjectDetail', 'getProjects']),
    delProject (id) {
      let delids = this.selects
      if (id !== -1) delids = [id + '']
      if (delids.length === 0) {
        this.$toast('请选择要删除的项目', 'cc')
      } else {
        this.popperDelete('您确定要删除项目' + this.getAttrById(delids).join(',') + '吗？', _ => {
          this.getProjectDetail(delids).then(d => {
            if (d.status === 0) {
              // this.getApiData()
              // this.deleteItem(delids[0])
              this.getProjects()
            }
            this.$toast(d.message, 'cc')
          })
        })
      }
    },
    getApiData () {
      // const cid = this.clusterid = 1
      this.getProjects()
    }
  },
  created () {
    // this.getApiData()
    this.getProjects()
    this.$store.commit('sitepath/SET_PATH', [
      {name: 'Main', cn: '主页'},
      {cn: '项目列表'}
    ])
  }
}
