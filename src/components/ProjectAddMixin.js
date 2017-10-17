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
    ...mapGetters('projectAdd', ['formdata'])
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
      this.setLocalStorage('formdata', this.formdata)
      this.setLocalStorage('isHaveLocal', true)
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
          this.setFormdata('name', temp.name)
          this.setFormdata('description', temp.description)
          this.setFormdata('mode', temp.mode)
          this.setFormdata('image_name', temp.image_name)
          this.imageMode = IMG_IDX[temp.image_source]
          let that = this
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
      item = JSON.stringify(item)
      window.localStorage.setItem(key, item)
    },
    getLocaltion (data) {
      data = JSON.parse(data)
      this.setFormdata({name: false, value: data})
    }
  },
  created () {
    this.isEditor = this.$route.params.id !== undefined
    if (this.isEditor) this.editorMode()
    this.isHaveLocal = this.getLocalStorage('isHaveLocal')
    if (this.isHaveLocal) {
      this.getLocaltion(this.getLocalStorage('formdata'))
    }
  },
  components: {
    'github': GitHub,
    'limage': LocalImage,
    'cimage': CloudImage,
    'bgroup': Btngroup
  }
}
