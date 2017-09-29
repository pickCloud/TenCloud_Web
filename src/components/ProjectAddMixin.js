import Popper from './Poppers.js'
import GitHub from './Projectadd/GitHub.vue'
import LocalImage from './Projectadd/LocalImage.vue'
import CloudImage from './Projectadd/CloudImage.vue'
import Btngroup from './Projectadd/BtnGroup.vue'
import Event from './Events'
import {mapGetters, mapMutations} from 'vuex'
const IMG_IDX = ['github', 'limage', 'cimage']

export default {
  mixins: [Popper],
  computed: {
    ...mapGetters('projectAdd', ['formdata', 'getNum'])
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
    ...mapMutations('projectAdd', [
      'setFormdata'
    ]),
    updataName (value) {
      this.setFormdata('name', value)
    },
    updataImage_name (value) {
      this.setFormdata('image_name', value)
    },
    updataDescription (value) {
      this.setFormdata('description', value)
    },
    updataMode (value) {
      this.setFormdata('mode', value)
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
          // this.formdata.name = temp.name
          // this.formdata.description = temp.description
          // this.formdata.mode = temp.mode + ''
          // this.formdata.image_name = temp.image_name
          console.log(this.getNum)
          console.log(this.formdata)
          this.setFormdata('name', temp.name)
          this.setFormdata('description', temp.description)
          this.setFormdata('mode', temp.mode)
          this.setFormdata('image_name', temp.image_name)
          this.imageMode = IMG_IDX[temp.image_source]
          const tout = setTimeout(_ => {
            Event.$emit('pullGitHub', true)
            clearTimeout(tout)
          }, 10)
        }
      })
    },
    getLocalStorage (key) {
      return window.localStorage.getItem(key)
    },
    setLocalStorage (key, item) {
      window.localStorage.setItem(key, item)
    },
    getLocaltion (data) {
      this.setFormdata(false, data)
    }
  },
  created () {
    this.isEditor = this.$route.params.id !== undefined
    if (this.isEditor) this.editorMode()
    this.isHaveLocal = this.getLocalStorage('isHaveLocal')
    if (this.isHaveLocal) this.getLocaltion(this.getLocalStorage('formdata'))
  },
  components: {
    'github': GitHub,
    'limage': LocalImage,
    'cimage': CloudImage,
    'bgroup': Btngroup
  }
}
