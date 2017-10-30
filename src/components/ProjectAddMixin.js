import Popper from './Poppers.js'
import GitHub from './Projectadd/GitHub.vue'
import LocalImage from './Projectadd/LocalImage.vue'
import CloudImage from './Projectadd/CloudImage.vue'
import Btngroup from './Projectadd/BtnGroup.vue'
// import Event from './Events'
import {mapGetters, mapMutations, mapActions} from 'vuex'
const IMG_IDX = ['github', 'limage', 'cimage']

export default {
  mixins: [Popper],
  computed: {
    ...mapGetters('projectAdd', ['formdata']),
    watchMode: {
      get () {
        return this.formdata.mode + ''
      },
      set (value) {
        this.setFormdata({name: 'mode', value: value})
      }
    }
  },
  data: () => ({
    isEditor: false,
    imageMode: 'github',
    propData: {},
    isHaveLocal: false
  }),
  watch: {
    'formdata.mode' (n, o) {
      if (n === '0') this.imageMode = 'github'
    }
  },
  methods: {
    ...mapMutations('projectAdd', ['setFormdata']),
    ...mapMutations('github', ['getLocaltion', 'setLocalStorage']),
    ...mapActions('github', ['getGitHub']),
    updataName (e) {
      this.setFormdata({name: 'name', value: e.target.value})
    },
    updataImage_name (e) {
      this.setFormdata({name: 'image_name', value: e.target.value})
    },
    updataDescription (e) {
      this.setFormdata({name: 'description', value: e.target.value})
    },
    updataMode (e) {
      this.setFormdata({name: 'mode', value: e.target.value})
    },
    addProject () {
      const tempdata = this.$refs.proSource.getData()
      if (!tempdata) return
      if (this.formdata.name === '') {
        this.$toast('名称不能为空', 'cc')
        return
      }
      if (this.formdata.image_name === '') {
        this.$toast('镜像名称不能为空', 'cc')
        return
      }
      if (this.formdata.description === '') {
        this.$toast('描述不能为空', 'cc')
        return
      }
      // merge data
      let pdata = Object.assign({}, this.formdata, tempdata)
      pdata.image_source = IMG_IDX.indexOf(this.imageMode)
      this.$Global.async(this.isEditor ? 'project_update' : 'project_add', true).getData(pdata).then(d => {
        if (d.status === 0) {
          if (!this.isEditor) this.$router.push({name: 'Projects'})
          else this.$router.push({name: 'ProjectDetail', params: {id: this.$route.params.id}})
        }
        this.$toast(this.isEditor ? '修改成功' : '添加成功', 'cc')
        this.setLocalStorage({key: 'isHaveLocal', item: ''})
        this.setFormdata({name: false,
          value: {
            name: '',
            image_name: '',
            description: '',
            mode: '0'}})
        // console.log(d)
      }, e => {})
    },
    bindGitHub () {
      if (this.btnIdx === 0) {
        if (this.git_tip.indexOf('<img') !== -1) return
        this.getApiData()
      }
      this.btnIdx = 0
    },
    editorMode () {
      this.$Global.async('project_detail', true).getData(null, this.$route.params.id).then(d => {
        if (d.status === 0) {
          let temp = this.propData = d.data[0]
          // this.setFormdata({name: 'name', value: temp.name})
          // this.setFormdata({name: 'description', value: temp.description})
          // this.setFormdata({name: 'mode', value: temp.mode})
          // this.setFormdata({name: 'image_name', value: temp.image_name})
          this.setFormdata({name: false, value: temp})
          this.imageMode = IMG_IDX[temp.image_source]
          const tout = setTimeout(_ => {
            this.getGitHub({isBoolean: true})
            clearTimeout(tout)
          }, 10)
        }
      })
    }
  },
  created () {
    this.isEditor = this.$route.params.id !== undefined
    this.setFormdata({name: 'id', value: this.$route.params.id})
    if (this.isEditor) this.editorMode()
    this.isHaveLocal = window.localStorage.getItem('isHaveLocal')
    if (this.isHaveLocal) {
      this.getLocaltion(window.localStorage.getItem('formdata'))
    }
  },
  components: {
    'github': GitHub,
    'limage': LocalImage,
    'cimage': CloudImage,
    'bgroup': Btngroup
  }
}
