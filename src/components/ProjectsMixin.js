import Selects from './Selects.js'
import Poppers from './Poppers.js'
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
import PermisionCommonModule from './PermisionCommonModule.js'
export default {
  mixins: [Poppers, Selects, PermisionCommonModule],
  data: () => ({
    modelCn: ['普通项目', '基础服务', '应用组件'],
    STATUS: {
      '0': ['初创建', 'primary_bg alpha-black_txt'],
      '1': ['构建中', 'primary_bg alpha-black_txt'],
      '2': ['构建成功', 'primary_bg alpha-black_txt'],
      '3': ['部署中', 'primary_bg alpha-black_txt'],
      '4': ['部署成功', 'primary_bg alpha-black_txt'],
      '-2': ['构建失败', 'pink_bg alpha-black_txt'],
      '-4': ['部署失败', 'pink_bg alpha-black_txt']
    }
  }),
  computed: {
    ...mapGetters('projects', [
      'listts'
    ]),
    ...mapState('user', [
      'currentUser'
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
    clearLocal () {
      window.localStorage.setItem('isHaveLocal', 'false')
      window.localStorage.setItem('formdata', '')
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
